package routes

import (
	"github.com/go-chi/chi"
	user_auth_handler "otus_sn_go/internal/handlers/user-auth-handler"
	user_friends_handler "otus_sn_go/internal/handlers/user-friends-handler"
	user_profile_handler "otus_sn_go/internal/handlers/user-profile-handler"
)

func RegisterRouter() *chi.Mux {

	r := chi.NewRouter()
	r.With(JwtMiddleware).Route("/api", func(r chi.Router) {
		r.Route("/auth", func(r chi.Router) {
			r.Post("/register", user_auth_handler.RegisterUserHandler)
			r.Post("/login", user_auth_handler.LoginUserHandler)
			r.With(AuthMiddleware).Get("/me", user_auth_handler.MeHandler)
		})
		r.With(AuthMiddleware).Route("/profile", func(r chi.Router) {
			r.Post("/", user_profile_handler.ProfileUpdateHandler)
		})
		r.Route("/users/{id:[0-9]+}", func(r chi.Router) {
			r.With(AuthMiddleware).Post("/add_to_friends", user_friends_handler.AddToFriendsHandler)
			r.With(AuthMiddleware).Post("/remove_from_friends", user_friends_handler.RemoveFromFriendsHandler)
		})
	})
	return r
}
