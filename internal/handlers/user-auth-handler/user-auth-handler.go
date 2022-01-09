package user_auth_handler

import (
	"encoding/json"
	"fmt"
	"github.com/go-playground/validator/v10"
	"io/ioutil"
	"net/http"
	user_data_handler "otus_sn_go/internal/handlers/user-data-handler"
	httpHelper "otus_sn_go/internal/helpers/http"
	jwt_helper "otus_sn_go/internal/helpers/jwt"
	"otus_sn_go/internal/logger"
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

	friendsData, err := user.GetFriendsData(r.Context())
	if err != nil {
		fmt.Println(err)
		logger.Error(err.Error())
		httpHelper.InternalServerErrorResponse(w)
	}
	response := friendsData.ToResponse()
	response["token"] = token.Token
	response["expires_in"] = token.ExpiresIn.UTC().Format(time.RFC3339)
	response["user"] = user.ToResponse()

	httpHelper.JsonResponse(w, response)
}

func MeHandler(w http.ResponseWriter, r *http.Request) {
	user, _ := jwt_helper.GetCurrentUser(r.Context())
	user_data_handler.OutputWithFriends(user, w, r)
}
