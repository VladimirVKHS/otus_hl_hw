package user_counters_handler

import (
	"fmt"
	"net/http"
	"otus_sn_go/internal/constants"
	httpHelper "otus_sn_go/internal/helpers/http"
	jwt_helper "otus_sn_go/internal/helpers/jwt"
	"otus_sn_go/internal/logger"
	"otus_sn_go/internal/otussncounters"
	"strconv"
)

func GetCountersHandler(w http.ResponseWriter, r *http.Request) {
	requestId := r.Context().Value(constants.RequestIDKey).(int)
	logger.Info(fmt.Sprintf("Get counters. Request ID = %d", requestId))

	user, _ := jwt_helper.GetCurrentUser(r.Context())

	var result *otussncounters.Counter
	var err error
	if result, err = otussncounters.GetCounters(user.Id, strconv.Itoa(requestId)); err != nil {
		fmt.Println(err)
		logger.Error(err.Error())
		httpHelper.InternalServerErrorResponse(w)
		return
	}

	httpHelper.JsonResponse(w, result.ToResponse())
}
