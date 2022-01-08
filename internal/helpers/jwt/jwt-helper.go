package jwt_helper

import (
	"github.com/go-chi/jwtauth/v5"
	"os"
	user2 "otus_sn_go/internal/models/user"
	"strconv"
	"time"
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
