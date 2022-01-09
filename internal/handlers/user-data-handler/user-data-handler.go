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

func GetUserHandler(w http.ResponseWriter, r *http.Request) {
	id, _ := strconv.Atoi(chi.URLParam(r, "id"))
	targetUser := &user2.User{}
	if err := user2.GetUserById(r.Context(), id, targetUser); err != nil {
		httpHelper.NotFoundErrorResponse(w)
		return
	}

	if !targetUser.IsPublic {
		user, _ := jwt_helper.GetCurrentUser(r.Context())
		if user == nil {
			httpHelper.ForbiddenResponse(w)
			return
		}
		isFriendOrSubscriber, _ := user.IsFriendOrSubscriber(r.Context(), targetUser.Id)
		if !isFriendOrSubscriber {
			httpHelper.ForbiddenResponse(w)
			return
		}
	}

	OutputWithFriends(targetUser, w, r)
}

func GetUsersHandler(w http.ResponseWriter, r *http.Request) {
	result := &user2.UsersListResponse{}
	result.Page, _ = strconv.Atoi(r.URL.Query().Get("page"))
	if result.Page == 0 {
		result.Page = 1
	}
	result.PerPage, _ = strconv.Atoi(r.URL.Query().Get("per_page"))
	if result.PerPage == 0 {
		result.PerPage = 10
	}

	err := user2.GetPublicUsers(r.Context(), result)
	if err != nil {
		fmt.Println(err)
		logger.Error(err.Error())
		httpHelper.InternalServerErrorResponse(w)
		return
	}

	httpHelper.JsonResponse(w, result.ToResponse())
}
