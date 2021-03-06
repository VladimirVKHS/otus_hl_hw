package routes

import (
	"github.com/go-chi/chi"
	"github.com/go-chi/cors"
	spa "github.com/roberthodgen/spa-server"
	"os"
	user_auth_handler "otus_sn_go/internal/handlers/user-auth-handler"
	user_counters_handler "otus_sn_go/internal/handlers/user-counters-handler"
	user_data_handler "otus_sn_go/internal/handlers/user-data-handler"
	user_messages_handler "otus_sn_go/internal/handlers/user-messages-handler"
	user_posts_handler "otus_sn_go/internal/handlers/user-posts-handler"
	user_profile_handler "otus_sn_go/internal/handlers/user-profile-handler"
)

func RegisterRouter() *chi.Mux {

	r := chi.NewRouter()
	r.With(
		RequestIDMiddleware,
		JwtMiddleware,
		cors.Handler(cors.Options{
			// AllowedOrigins:   []string{"https://foo.com"}, // Use this to allow specific origin hosts
			AllowedOrigins: []string{"https://*", "http://*", "*"},
			// AllowOriginFunc:  func(r *http.Request, origin string) bool { return true },
			AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
			AllowedHeaders:   []string{"Accept", "Authorization", "Content-Type", "X-CSRF-Token"},
			ExposedHeaders:   []string{"Link"},
			AllowCredentials: false,
			MaxAge:           300, // Maximum value not ignored by any of major browsers
		}),
	).Route("/api", func(r chi.Router) {
		r.Route("/auth", func(r chi.Router) {
			r.Post("/register", user_auth_handler.RegisterUserHandler)
			r.Post("/login", user_auth_handler.LoginUserHandler)
			r.With(AuthMiddleware).Get("/me", user_auth_handler.MeHandler)
		})
		r.With(AuthMiddleware).Route("/profile", func(r chi.Router) {
			r.Post("/", user_profile_handler.ProfileUpdateHandler)
		})
		r.Route("/users", func(r chi.Router) {
			r.Get("/", user_data_handler.GetUsersHandler)
			r.Route("/{id:[0-9]+}", func(r chi.Router) {
				r.Get("/", user_data_handler.GetUserHandler)
				r.With(AuthMiddleware).Post("/add_to_friends", user_data_handler.AddToFriendsHandler)
				r.With(AuthMiddleware).Post("/remove_from_friends", user_data_handler.RemoveFromFriendsHandler)
				r.Route("/posts", func(r chi.Router) {
					r.Get("/", user_posts_handler.GetUsersPostsHandler)
				})
			})
		})
		r.Route("/posts", func(r chi.Router) {
			r.With(AuthMiddleware).Post("/", user_posts_handler.CreatePostHandler)
			r.With(AuthMiddleware).Get("/feed", user_posts_handler.GetUserFeedHandler)
		})
		r.Route("/messages", func(r chi.Router) {
			r.With(AuthMiddleware).Post("/{id:[0-9]+}", user_messages_handler.CreateMessageHandler)
			r.With(AuthMiddleware).Post("/{id:[0-9]+}/mark_as_read", user_messages_handler.MarkAsReadHandler)
			r.With(AuthMiddleware).Get("/{id:[0-9]+}", user_messages_handler.GetMassagesHandler)
		})
		r.Route("/counters", func(r chi.Router) {
			r.With(AuthMiddleware).Get("/", user_counters_handler.GetCountersHandler)
		})
	})
	webclientDir, _ := os.LookupEnv("WEBCLIENT_DIR")
	r.Get("/*", spa.SpaHandler(webclientDir, "index.html").ServeHTTP)
	return r
}
