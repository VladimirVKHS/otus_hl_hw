package user_data_handler

import (
	"fmt"
	"github.com/go-chi/chi"
	"net/http"
	httpHelper "otus_sn_go/internal/helpers/http"
	jwt_helper "otus_sn_go/internal/helpers/jwt"
	"otus_sn_go/internal/logger"
	user2 "otus_sn_go/internal/models/user"
	"strconv"
)

func AddToFriendsHandler(w http.ResponseWriter, r *http.Request) {
	id, _ := strconv.Atoi(chi.URLParam(r, "id"))
	user, _ := jwt_helper.GetCurrentUser(r.Context())

	if id == user.Id {
		httpHelper.BadRequestResponse(w)
		return
	}

	friend := &user2.User{}
	if err := user2.GetUserById(r.Context(), id, friend); err != nil {
		httpHelper.NotFoundErrorResponse(w)
		return
	}

	if err := user.AddToFriends(r.Context(), id); err != nil {
		fmt.Println(err)
		logger.Error(err.Error())
		httpHelper.InternalServerErrorResponse(w)
		return
	}

	OutputWithFriends(user, w, r)
}

func RemoveFromFriendsHandler(w http.ResponseWriter, r *http.Request) {
	id, _ := strconv.Atoi(chi.URLParam(r, "id"))
	user, _ := jwt_helper.GetCurrentUser(r.Context())

	if id == user.Id {
		httpHelper.BadRequestResponse(w)
		return
	}

	friend := &user2.User{}
	if err := user2.GetUserById(r.Context(), id, friend); err != nil {
		httpHelper.NotFoundErrorResponse(w)
		return
	}

	if err := user.RemoveFromFriends(r.Context(), id); err != nil {
		fmt.Println(err)
		logger.Error(err.Error())
		httpHelper.InternalServerErrorResponse(w)
		return
	}

	OutputWithFriends(user, w, r)
}

func OutputWithFriends(user *user2.User, w http.ResponseWriter, r *http.Request) {
	friendsData, err := user.GetFriendsData(r.Context())
	if err != nil {
		fmt.Println(err)
		logger.Error(err.Error())
		httpHelper.InternalServerErrorResponse(w)
	}

	response := friendsData.ToResponse()
	response["user"] = user.ToResponse()

	httpHelper.JsonResponse(w, response)
}
