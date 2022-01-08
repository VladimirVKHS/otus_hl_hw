package jwt_helper

import (
	"github.com/go-chi/jwtauth/v5"
	"os"
	user2 "otus_sn_go/internal/models/user"
	"strconv"
	"time"
)

var tokenAuth *jwtauth.JWTAuth

type JWTToken struct {
	Token     string
	ExpiresIn time.Time
}

func Init() {
	secret, _ := os.LookupEnv("JWT_SECRET")
	tokenAuth = jwtauth.New("HS256", []byte(secret), nil)
}

func GenerateJwtToken(user *user2.User) *JWTToken {
	ttlStr, _ := os.LookupEnv("JWT_TOKEN_TTL")
	ttl, _ := strconv.Atoi(ttlStr)
	expiresIn := time.Now().Local().Add(time.Second * time.Duration(ttl))
	_, tokenString, _ := tokenAuth.Encode(map[string]interface{}{
		"user_id":    user.Id,
		"expires_in": expiresIn.UTC().String(),
	})
	return &JWTToken{
		Token:     tokenString,
		ExpiresIn: expiresIn,
	}
}
