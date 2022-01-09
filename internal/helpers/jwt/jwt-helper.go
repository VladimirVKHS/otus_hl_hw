package jwt_helper

import (
	"context"
	"github.com/go-chi/jwtauth/v5"
	"os"
	user2 "otus_sn_go/internal/models/user"
	"strconv"
	"time"
)

const (
	JWT_ERROR_KEY = "JWT_ERROR"
	JWT_USER_KEY  = "JWT_USER"
)

var TokenAuth *jwtauth.JWTAuth

type JWTToken struct {
	Token     string
	ExpiresIn time.Time
}

func Init() {
	secret, _ := os.LookupEnv("JWT_SECRET")
	TokenAuth = jwtauth.New("HS256", []byte(secret), nil)
}

func GenerateJwtToken(user *user2.User) *JWTToken {
	ttlStr, _ := os.LookupEnv("JWT_TOKEN_TTL")
	ttl, _ := strconv.Atoi(ttlStr)
	expiresIn := time.Now().Local().Add(time.Second * time.Duration(ttl))
	_, tokenString, _ := TokenAuth.Encode(map[string]interface{}{
		"user_id":    user.Id,
		"expires_in": expiresIn.UTC().Format(time.RFC3339),
	})
	return &JWTToken{
		Token:     tokenString,
		ExpiresIn: expiresIn,
	}
}

func GetCurrentUser(ctx context.Context) (user *user2.User, e error) {
	defer func() {
		if err := recover(); err != nil {
			user = nil
			e = err.(error)
		}
	}()
	user = ctx.Value(JWT_USER_KEY).(*user2.User)
	return user, nil
}

func GetTokenError(ctx context.Context) (errorString string, e error) {
	defer func() {
		if err := recover(); err != nil {
			errorString = ""
			e = err.(error)
		}
	}()
	errorString = ctx.Value(JWT_ERROR_KEY).(string)
	return errorString, nil
}
