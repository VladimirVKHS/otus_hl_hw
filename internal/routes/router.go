package routes

import (
	"github.com/go-chi/chi"
	"github.com/go-chi/cors"
	spa "github.com/roberthodgen/spa-server"
	"os"
	user_auth_handler "otus_sn_go/internal/handlers/user-auth-handler"
	user_data_handler "otus_sn_go/internal/handlers/user-data-handler"
	user_profile_handler "otus_sn_go/internal/handlers/user-profile-handler"
)

func RegisterRouter() *chi.Mux {

	r := chi.NewRouter()
	r.With(
		JwtMiddleware,
		cors.Handler(cors.Options{
			// AllowedOrigins:   []string{"https://foo.com"}, // Use this to allow specific origin hosts
			AllowedOrigins: []string{"https://*", "http://*"},
			// AllowOriginFunc:  func(r *http.Request, origin string) bool { return true },
			AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
			AllowedHeaders:   []string{"Accept", "Authorization", "Content-Type", "X-CSRF-Token"},
			ExposedHeaders:   []string{"Link"},
			AllowCredentials: true,
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
			})
		})
	})
	webclientDir, _ := os.LookupEnv("WEBCLIENT_DIR")
	r.Get("/*", spa.SpaHandler(webclientDir, "index.html").ServeHTTP)
	return r
}
