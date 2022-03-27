package otusredis

import (
	"context"
	"fmt"
	"github.com/go-redis/cache/v8"
	"github.com/go-redis/redis/v8"
	"os"
	"otus_sn_go/internal/logger"
	key_locker "otus_sn_go/pkg/key-locker"
	"time"
)

var Client *redis.Client
var Cache *cache.Cache

func InitDb() {
	dbHost, _ := os.LookupEnv("REDIS_HOST")
	dbPort, _ := os.LookupEnv("REDIS_PORT")
	Client = redis.NewClient(&redis.Options{
		Addr:     dbHost + ":" + dbPort,
		Password: "", // no password set
		DB:       0,  // use default DB
	})
	Cache = cache.New(&cache.Options{
		Redis:      Client,
		LocalCache: cache.NewTinyLFU(1000, time.Hour),
	})
}

func CloseClient() {
	if err := Client.Close(); err != nil {
		logger.Error(err.Error())
	}
}

func CacheSet(ctx context.Context, key string, value interface{}) error {
	err := Cache.Set(&cache.Item{
		Ctx:   ctx,
		Key:   key,
		Value: value,
		TTL:   time.Hour,
	})
	if err != nil {
		fmt.Println(value)
	}
	return err
}

func CacheGet(ctx context.Context, key string, value interface{}) error {
	return Cache.Get(ctx, key, value)
}

func LockCacheSet(ctx context.Context, key string, value interface{}) error {
	return key_locker.LockAndExecute("cache_"+key, func() error {
		err := CacheSet(ctx, key, value)
		if err != nil {
			logger.Error("lock cache set error " + err.Error())
		}
		return err
	})
}

func LockCacheGet(ctx context.Context, key string, value *interface{}) error {
	return key_locker.LockAndExecute("cache_"+key, func() error {
		return CacheGet(ctx, key, value)
	})
}
