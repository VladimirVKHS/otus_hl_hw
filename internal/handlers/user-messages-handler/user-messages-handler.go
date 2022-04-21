package user_messages_handler

import (
	"encoding/json"
	"fmt"
	"github.com/go-chi/chi"
	"github.com/go-playground/validator/v10"
	"io/ioutil"
	"net/http"
	"otus_sn_go/internal/constants"
	httpHelper "otus_sn_go/internal/helpers/http"
	jwt_helper "otus_sn_go/internal/helpers/jwt"
	"otus_sn_go/internal/logger"
	user2 "otus_sn_go/internal/models/user"
	"otus_sn_go/internal/otussncounters"
	"otus_sn_go/internal/otussndialog"
	"strconv"
	"time"
)

type MessageCreateRequest struct {
	Message string `validate:"lte=4096,required"`
}

type MarkAsReadRequest struct {
	MessageIds []string `validate:"required,gt=0,lte=1000,dive,uuid"`
}

func CreateMessageHandler(w http.ResponseWriter, r *http.Request) {
	id, _ := strconv.Atoi(chi.URLParam(r, "id"))

	tUser := &user2.User{}
	if err := user2.GetUserById(r.Context(), id, tUser); err != nil {
		httpHelper.InternalServerErrorResponse(w)
		return
	}
	if tUser.Id == 0 {
		httpHelper.NotFoundErrorResponse(w)
		return
	}

	data, err := ioutil.ReadAll(r.Body)
	if err != nil {
		http.Error(w, "BadRequest", http.StatusBadRequest)
		return
	}
	r.Body.Close()

	var postCreateRequest MessageCreateRequest
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
	var message *otussndialog.Message
	requestId := r.Context().Value(constants.RequestIDKey).(int)
	logger.Info(fmt.Sprintf("Create message. Request ID = %d", requestId))
	if message, err = otussndialog.PostMessage(&otussndialog.MessageCreateRequest{
		AuthorId:    user.Id,
		AddresseeId: id,
		Message:     postCreateRequest.Message,
	}, strconv.Itoa(requestId)); err != nil {
		logger.Error(err.Error())
		httpHelper.InternalServerErrorResponse(w)
		return
	}

	go func() {
		_ = cntUpdate(id, 1, strconv.Itoa(requestId))
	}()

	httpHelper.JsonResponse(w, message.ToResponse())
}

func MarkAsReadHandler(w http.ResponseWriter, r *http.Request) {
	id, _ := strconv.Atoi(chi.URLParam(r, "id"))

	tUser := &user2.User{}
	if err := user2.GetUserById(r.Context(), id, tUser); err != nil {
		httpHelper.InternalServerErrorResponse(w)
		return
	}
	if tUser.Id == 0 {
		httpHelper.NotFoundErrorResponse(w)
		return
	}

	data, err := ioutil.ReadAll(r.Body)
	if err != nil {
		http.Error(w, "BadRequest", http.StatusBadRequest)
		return
	}
	r.Body.Close()

	var request MarkAsReadRequest
	if err := json.Unmarshal(data, &request); err != nil {
		http.Error(w, "BadRequest", http.StatusBadRequest)
		return
	}

	validate := validator.New()
	validationErrs := validate.Struct(request)
	if validationErrs != nil {
		httpHelper.ValidationErrorResponse(w, validationErrs.Error())
		return
	}

	user, _ := jwt_helper.GetCurrentUser(r.Context())
	var result *otussndialog.MarkAsReadResult
	requestId := r.Context().Value(constants.RequestIDKey).(int)
	logger.Info(fmt.Sprintf("Mark as read messages. Request ID = %d", requestId))
	if result, err = otussndialog.MarkAsRead(&otussndialog.MarkAsReadRequest{
		AuthorId:    id,
		AddresseeId: user.Id,
		MessageIds:  request.MessageIds,
	}, strconv.Itoa(requestId)); err != nil {
		logger.Error(err.Error())
		httpHelper.InternalServerErrorResponse(w)
		return
	}

	if result.AffectedMessages > 0 {
		go func() {
			_ = cntUpdate(user.Id, -result.AffectedMessages, strconv.Itoa(requestId))
		}()
	}

	httpHelper.JsonResponse(w, result.ToResponse())
}

func GetMassagesHandler(w http.ResponseWriter, r *http.Request) {
	id, _ := strconv.Atoi(chi.URLParam(r, "id"))
	user, _ := jwt_helper.GetCurrentUser(r.Context())

	if id == user.Id {
		httpHelper.BadRequestResponse(w)
		return
	}

	requestId := r.Context().Value(constants.RequestIDKey).(int)
	logger.Info(fmt.Sprintf("Get messages. Request ID = %d", requestId))

	var result *otussndialog.MessagesListResponse
	var err error
	if result, err = otussndialog.ReadMessages(user.Id, id, strconv.Itoa(requestId)); err != nil {
		fmt.Println(err)
		logger.Error(err.Error())
		httpHelper.InternalServerErrorResponse(w)
		return
	}

	httpHelper.JsonResponse(w, result.ToResponse())
}

func cntUpdate(userId int, unreadMessagesCountDelta int, requestId string) error {
	_, err := otussncounters.UpdateCounters(userId, &otussncounters.CounterUpdateRequest{UnreadMessagesCountDelta: unreadMessagesCountDelta}, requestId)
	if err != nil {
		logger.Error(fmt.Sprintf("Counter update request error, try repeat. Error: %s", err.Error()))
		time.Sleep(60 * time.Second)
		return cntUpdate(userId, unreadMessagesCountDelta, requestId)
	}
	return nil
}
