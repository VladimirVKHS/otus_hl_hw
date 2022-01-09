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
	var incoming interface{}
	if len(friendsData.IncomingRequests) > 0 {
		incoming = user2.UsersToResponse(friendsData.IncomingRequests)
	} else {
		incoming = make([]string, 0)
	}
	var outgoing interface{}
	if len(friendsData.OutgoingRequests) > 0 {
		outgoing = user2.UsersToResponse(friendsData.OutgoingRequests)
	} else {
		outgoing = make([]string, 0)
	}
	var friends interface{}
	if len(friendsData.Friends) > 0 {
		friends = user2.UsersToResponse(friendsData.Friends)
	} else {
		friends = make([]string, 0)
	}
	httpHelper.JsonResponse(w, map[string]interface{}{
		"user":              user.ToResponse(),
		"incoming_requests": incoming,
		"outgoing_requests": outgoing,
		"friends":           friends,
	})
}
