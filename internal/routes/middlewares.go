package routes

import (
	"context"
	"errors"
	"github.com/go-chi/jwtauth/v5"
	"github.com/lestrrat-go/jwx/jwt"
	"net/http"
	jwt_helper "otus_sn_go/internal/helpers/jwt"
	user2 "otus_sn_go/internal/models/user"
	"time"
)

func JwtMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		tokenString := jwtauth.TokenFromHeader(r)
		ctx := r.Context()
		var error error
		if tokenString != "" {
			token, err := jwtauth.VerifyToken(jwt_helper.TokenAuth, tokenString)
			if err == nil {
				claims, err2 := token.AsMap(ctx)
				if err2 == nil && jwt.Validate(token) == nil {
					expiresIn, err3 := time.Parse(time.RFC3339, claims["expires_in"].(string))
					if err3 == nil {
						if time.Now().UTC().After(expiresIn) {
							error = errors.New("Token expired")
						} else {
							user := &user2.User{}
							error = user2.GetUserById(r.Context(), int(claims["user_id"].(float64)), user)
							if error == nil {
								ctx = context.WithValue(ctx, jwt_helper.JWT_USER_KEY, user)
							}
						}
					} else {
						error = err3
					}
				} else {
					error = err2
				}
			} else {
				error = err
			}
		} else {
			error = errors.New("Unauthorized")
		}
		if error != nil {
			ctx = context.WithValue(ctx, jwt_helper.JWT_ERROR_KEY, error.Error())
		}
		next.ServeHTTP(w, r.WithContext(ctx))
	})
}

func AuthMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		_, err := jwt_helper.GetCurrentUser(r.Context())
		if err != nil {
			errorString, err2 := jwt_helper.GetTokenError(r.Context())
			if err2 != nil {
				errorString = err2.Error()
			}
			http.Error(w, errorString, 401)
			return
		}

		// Token is authenticated, pass it through
		next.ServeHTTP(w, r)
	})
}
