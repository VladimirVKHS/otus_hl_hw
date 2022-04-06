package live_update

import (
	"encoding/json"
	"github.com/streadway/amqp"
	"otus_sn_go/internal/otusrabbit"
	"strconv"
)

type WsData struct {
	UserId int
	Event  string
	Data   interface{}
}

func Send(userId int, event string, data interface{}) error {
	wsData := WsData{
		UserId: userId,
		Event:  event,
		Data:   data,
	}
	dataToSend, err := json.Marshal(wsData)
	if err != nil {
		return err
	}
	return otusrabbit.Ch.Publish(
		"ws",                 // exchange
		strconv.Itoa(userId), // routing key
		false,                // mandatory
		false,
		amqp.Publishing{
			DeliveryMode: amqp.Transient,
			ContentType:  "text/plain",
			Body:         []byte(dataToSend),
		})
}
