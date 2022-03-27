package user_posts_handler

import (
	"net/http"
	httpHelper "otus_sn_go/internal/helpers/http"
	jwt_helper "otus_sn_go/internal/helpers/jwt"
	"otus_sn_go/internal/logger"
	"otus_sn_go/internal/models/post"
)

func GetUserFeedHandler(w http.ResponseWriter, r *http.Request) {
	user, _ := jwt_helper.GetCurrentUser(r.Context())
	result := &post.PostsListResponse{}
	result.GetTotalItems = false
	result.PerPage = 1000
	if err := post.GetUserFeed(r.Context(), user, result, false); err != nil {
		logger.Error(err.Error())
		httpHelper.InternalServerErrorResponse(w)
		return
	}

	httpHelper.JsonResponse(w, result.ToResponse())
}
