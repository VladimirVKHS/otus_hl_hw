package routes

import (
	"github.com/go-chi/chi"
	"github.com/go-chi/jwtauth/v5"
	user_auth_handler "otus_sn_go/internal/handlers/user-auth-handler"
	jwt_helper "otus_sn_go/internal/helpers/jwt"
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
			r.Post("/register", user_auth_handler.RegisterUserHandler)
			r.Post("/login", user_auth_handler.LoginUserHandler)
			r.With(jwtauth.Verifier(jwt_helper.TokenAuth), AuthMiddleware).Get("/me", user_auth_handler.MeHandler)
		})
	})
	return r
}
