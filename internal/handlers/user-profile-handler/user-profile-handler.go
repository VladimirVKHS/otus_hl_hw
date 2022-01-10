package user_profile_handler

import (
	"encoding/json"
	"github.com/go-playground/validator/v10"
	"io/ioutil"
	"net/http"
	httpHelper "otus_sn_go/internal/helpers/http"
	jwt_helper "otus_sn_go/internal/helpers/jwt"
	user2 "otus_sn_go/internal/models/user"
)

func ProfileUpdateHandler(w http.ResponseWriter, r *http.Request) {
	data, err := ioutil.ReadAll(r.Body)
	if err != nil {
		http.Error(w, "BadRequest", http.StatusBadRequest)
		return
	}
	r.Body.Close()

	var profileUpdateRequest user2.UserProfileUpdateRequest
	if err := json.Unmarshal(data, &profileUpdateRequest); err != nil {
		http.Error(w, "BadRequest", http.StatusBadRequest)
		return
	}

	validate := validator.New()
	validationErrs := validate.Struct(profileUpdateRequest)
	if validationErrs != nil {
		httpHelper.ValidationErrorResponse(w, validationErrs.Error())
		return
	}

	user, _ := jwt_helper.GetCurrentUser(r.Context())
	user.Login = profileUpdateRequest.Login
	user.FirstName = profileUpdateRequest.FirstName
	user.LastName = profileUpdateRequest.LastName
	user.City = profileUpdateRequest.City
	user.Age = profileUpdateRequest.Age
	user.Interests = profileUpdateRequest.Interests
	user.IsPublic = profileUpdateRequest.IsPublic
	user.Sex = profileUpdateRequest.Sex
	if profileUpdateRequest.Password != "" {
		user.SetPassword(profileUpdateRequest.Password)
	}

	if err := user.ValidateUnique(r.Context()); err != nil {
		httpHelper.ValidationErrorResponse(w, err.Error())
		return
	}

	if err := user.Save(r.Context()); err != nil {
		httpHelper.ValidationErrorResponse(w, err.Error())
		return
	}
	httpHelper.JsonResponse(w, user.ToResponse())
}
