package routes

import (
	"context"
	"github.com/go-chi/jwtauth/v5"
	"github.com/lestrrat-go/jwx/jwt"
	"net/http"
	user2 "otus_sn_go/internal/models/user"
	"time"
)

func AuthMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		token, claims, err := jwtauth.FromContext(r.Context())
		if err != nil {
			http.Error(w, err.Error(), 401)
			return
		}

		if token == nil || jwt.Validate(token) != nil {
			http.Error(w, http.StatusText(401), 401)
			return
		}

		expiresIn, err := time.Parse(time.RFC3339, claims["expires_in"].(string))
		if err != nil {
			http.Error(w, err.Error(), 401)
			return
		}

		if time.Now().UTC().After(expiresIn) {
			http.Error(w, "Token expired", 401)
			return
		}

		user := &user2.User{}
		err = user2.GetUserById(r.Context(), int(claims["user_id"].(float64)), user)
		if err != nil {
			http.Error(w, err.Error(), 401)
			return
		}
		ctx := context.WithValue(r.Context(), "user", user)

		// Token is authenticated, pass it through
		next.ServeHTTP(w, r.WithContext(ctx))
	})
}
