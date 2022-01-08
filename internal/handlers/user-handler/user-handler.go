package user_handler

import (
	"encoding/json"
	jwtauth "github.com/go-chi/jwtauth/v5"
	"github.com/go-playground/validator/v10"
	"io/ioutil"
	"net/http"
	"os"
	httpHelper "otus_sn_go/internal/helpers/http"
	user2 "otus_sn_go/internal/models/user"
	"strconv"
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

	ttlStr, _ := os.LookupEnv("JWT_TOKEN_TTL")
	ttl, _ := strconv.Atoi(ttlStr)
	secret, _ := os.LookupEnv("JWT_SECRET")
	tokenAuth := jwtauth.New("HS256", []byte(secret), nil)
	expiresIn := time.Now().Local().Add(time.Second * time.Duration(ttl))
	_, tokenString, _ := tokenAuth.Encode(map[string]interface{}{
		"user_id":    user.Id,
		"expires_in": expiresIn.UTC().String(),
	})

	httpHelper.JsonResponse(w, map[string]interface{}{
		"token":      tokenString,
		"expires_in": expiresIn.UTC().String(),
		"user":       user.ToResponse(),
	})
}
