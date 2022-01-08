package user_handler

import (
	"encoding/json"
	"github.com/go-playground/validator/v10"
	"io/ioutil"
	"net/http"
	httpHelper "otus_sn_go/internal/helpers/http"
	user2 "otus_sn_go/internal/models/user"
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
		httpHelper.ValidationErrorResponse(w)
		return
	}

	if err := user.ValidateUnique(r.Context()); err != nil {
		http.Error(w, "NotUnique", http.StatusUnprocessableEntity)
		return
	}

	user.SetPassword(user.Password)

	if err := user.Save(r.Context()); err != nil {
		httpHelper.ValidationErrorResponse(w)
		return
	}
	user.Refresh(r.Context())
	httpHelper.JsonResponse(w, user.ToResponse())
}
