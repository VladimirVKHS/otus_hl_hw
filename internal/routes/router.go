package routes

import (
	"github.com/go-chi/chi"
	user_handler "otus_sn_go/internal/handlers/user-handler"
)

func RegisterRouter() *chi.Mux {

	r := chi.NewRouter()
	r.Route("/api", func(r chi.Router) {
		r.Route("/auth", func(r chi.Router) {
			// r.With(AuthMiddleware).Post("/", user.CreateUserHandler)
			// r.Get("/", user.GetUserListHandler)
			// r.Route("/{id:[0-9]+}", func(r chi.Router) {
			// 	r.Get("/", user.GetUserHandler)
			// 	r.With(AuthMiddleware).Delete("/", user.DeleteUserHandler)
			// })
			r.Post("/register", user_handler.RegisterUserHandler)
		})
	})
	return r
}
