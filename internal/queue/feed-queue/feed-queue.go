package feed_queue

import (
	"context"
	"fmt"
	"otus_sn_go/internal/logger"
	"otus_sn_go/internal/models/post"
	user2 "otus_sn_go/internal/models/user"
	"otus_sn_go/internal/otusrabbit"
	key_throttler "otus_sn_go/pkg/key-throttler"
	"strconv"
)

const queue = "feed_queue"

func InitQueueHandler() error {
	return otusrabbit.Consume(queue, func(userId int) {
		var user = user2.User{}
		var ctx = context.Background()
		if err := user2.GetUserById(ctx, userId, &user); err != nil {
			logger.Error(err.Error())
			return
		}
		var feed = post.PostsListResponse{}
		if err := post.GetUserFeed(ctx, &user, &feed, true); err != nil {
			logger.Error("queue consume error 1 " + err.Error())
			return
		}
		if err := post.SaveUserFeedToCache(ctx, &user, &feed); err != nil {
			logger.Error("queue consume error 2 " + err.Error())
			return
		}
		fmt.Println("FEED saved", feed)
	})
}

func InsertToQueue(userId int) {
	key_throttler.Throttle(queue+"_"+strconv.Itoa(userId), func() {
		if err := otusrabbit.Publish(queue, strconv.Itoa(userId)); err != nil {
			logger.Error("queue publish error  " + err.Error())
		}
	})
}
