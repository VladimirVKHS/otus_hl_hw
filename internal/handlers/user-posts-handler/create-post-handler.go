package user_posts_handler

import (
	"context"
	"encoding/json"
	"github.com/go-playground/validator/v10"
	"io/ioutil"
	"net/http"
	httpHelper "otus_sn_go/internal/helpers/http"
	jwt_helper "otus_sn_go/internal/helpers/jwt"
	live_update "otus_sn_go/internal/live-update"
	"otus_sn_go/internal/logger"
	"otus_sn_go/internal/models/post"
	post2 "otus_sn_go/internal/models/post"
	feed_queue "otus_sn_go/internal/queue/feed-queue"
	"strconv"
)

func CreatePostHandler(w http.ResponseWriter, r *http.Request) {
	data, err := ioutil.ReadAll(r.Body)
	if err != nil {
		http.Error(w, "BadRequest", http.StatusBadRequest)
		return
	}
	r.Body.Close()

	var postCreateRequest post.PostCreateRequest
	if err := json.Unmarshal(data, &postCreateRequest); err != nil {
		http.Error(w, "BadRequest", http.StatusBadRequest)
		return
	}

	validate := validator.New()
	validationErrs := validate.Struct(postCreateRequest)
	if validationErrs != nil {
		httpHelper.ValidationErrorResponse(w, validationErrs.Error())
		return
	}

	user, _ := jwt_helper.GetCurrentUser(r.Context())
	post := post.Post{
		UserId: user.Id,
		Title:  postCreateRequest.Title,
		Body:   postCreateRequest.Body,
	}
	if err := post.Save(r.Context()); err != nil {
		logger.Error(err.Error())
		httpHelper.InternalServerErrorResponse(w)
		return
	}

	// handle post creation
	go func() {
		var ctx = context.Background()
		friendsData, friendDataErr := user.GetFriendsData(ctx)
		if friendDataErr != nil {
			logger.Error(friendDataErr.Error())
			return
		}
		list := &post2.PostsListResponse{
			GetAll: true,
		}
		post2.GetPosts(context.Background(), "id = "+strconv.Itoa(post.Id), list)
		for _, item := range friendsData.IncomingRequests {
			feed_queue.InsertToQueue(item.Id)
			liveUpdate(item.Id, list)
		}
		for _, item := range friendsData.Friends {
			feed_queue.InsertToQueue(item.Id)
			liveUpdate(item.Id, list)
		}
	}()

	httpHelper.JsonResponse(w, post.ToResponse())
}

func liveUpdate(userId int, p *post.PostsListResponse) {
	data := p.ToResponse()
	go func() {
		if err := live_update.Send(userId, "new_post_for_feed", &data); err != nil {
			logger.Error("feed_live_update exchange publish error  " + err.Error())
		}
	}()
}
