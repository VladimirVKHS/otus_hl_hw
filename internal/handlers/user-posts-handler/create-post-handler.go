package user_posts_handler

import (
	"encoding/json"
	"github.com/go-playground/validator/v10"
	"io/ioutil"
	"net/http"
	httpHelper "otus_sn_go/internal/helpers/http"
	jwt_helper "otus_sn_go/internal/helpers/jwt"
	"otus_sn_go/internal/logger"
	"otus_sn_go/internal/models/post"
)

func CreatePostHandler(w http.ResponseWriter, r *http.Request) {
	data, err := ioutil.ReadAll(r.Body)
	if err != nil {
		http.Error(w, "BadRequest", http.StatusBadRequest)
		return
	}
	r.Body.Close()

	var postCreateRequest post.PostCreateRequest
	if err := json.Unmarshal(data, &postCreateRequest); err != nil {
		http.Error(w, "BadRequest", http.StatusBadRequest)
		return
	}

	validate := validator.New()
	validationErrs := validate.Struct(postCreateRequest)
	if validationErrs != nil {
		httpHelper.ValidationErrorResponse(w, validationErrs.Error())
		return
	}

	user, _ := jwt_helper.GetCurrentUser(r.Context())
	post := post.Post{
		UserId: user.Id,
		Title:  postCreateRequest.Title,
		Body:   postCreateRequest.Body,
	}
	if err := post.Save(r.Context()); err != nil {
		logger.Error(err.Error())
		httpHelper.InternalServerErrorResponse(w)
		return
	}

	httpHelper.JsonResponse(w, post.ToResponse())
}
