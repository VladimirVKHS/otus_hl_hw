package user_auth_handler

import (
	"encoding/json"
	"github.com/go-playground/validator/v10"
	"io/ioutil"
	"net/http"
	httpHelper "otus_sn_go/internal/helpers/http"
	jwt_helper "otus_sn_go/internal/helpers/jwt"
	user2 "otus_sn_go/internal/models/user"
	"time"
)

func RegisterUserHandler(w http.ResponseWriter, r *http.Request) {
	data, err := ioutil.ReadAll(r.Body)
	if err != nil {
		http.Error(w, "BadRequest", http.StatusBadRequest)
		return
	}
	r.Body.Close()

	var user user2.User
	if err := json.Unmarshal(data, &user); err != nil {
		http.Error(w, "BadRequest", http.StatusBadRequest)
		return
	}

	validate := validator.New()
	validationErrs := validate.Struct(user)
	if validationErrs != nil {
		httpHelper.ValidationErrorResponse(w, validationErrs.Error())
		return
	}

	if err := user.ValidateUnique(r.Context()); err != nil {
		httpHelper.ValidationErrorResponse(w, err.Error())
		return
	}

	user.SetPassword(user.Password)

	if err := user.Save(r.Context()); err != nil {
		httpHelper.ValidationErrorResponse(w, err.Error())
		return
	}
	user.Refresh(r.Context())
	httpHelper.JsonResponse(w, user.ToResponse())
}

func LoginUserHandler(w http.ResponseWriter, r *http.Request) {
	data, err := ioutil.ReadAll(r.Body)
	if err != nil {
		http.Error(w, "BadRequest", http.StatusBadRequest)
		return
	}
	r.Body.Close()

	var loginRequest user2.UserLoginRequest
	if err := json.Unmarshal(data, &loginRequest); err != nil {
		http.Error(w, "BadRequest", http.StatusBadRequest)
		return
	}

	user := &user2.User{}
	err = user2.GetUserByLogin(r.Context(), loginRequest.Login, user)
	if err != nil {
		httpHelper.NotFoundErrorResponse(w)
		return
	}

	if !user.CheckPassword(loginRequest.Password) {
		httpHelper.UnauthorizedErrorResponse(w)
		return
	}

	token := jwt_helper.GenerateJwtToken(user)

	httpHelper.JsonResponse(w, map[string]interface{}{
		"token":      token.Token,
		"expires_in": token.ExpiresIn.UTC().Format(time.RFC3339),
		"user":       user.ToResponse(),
	})
}

func MeHandler(w http.ResponseWriter, r *http.Request) {
	user, _ := jwt_helper.GetCurrentUser(r.Context())
	httpHelper.JsonResponse(w, map[string]interface{}{
		"user": user.ToResponse(),
	})
}
