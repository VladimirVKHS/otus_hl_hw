package otusrabbit

import (
	"github.com/streadway/amqp"
	"os"
	"strconv"
)

var Ch *amqp.Channel

func Init() {
	host, _ := os.LookupEnv("RABBIT_HOST")
	port, _ := os.LookupEnv("RABBIT_PORT")
	conn, err := amqp.Dial("amqp://guest:guest@" + host + ":" + port + "/")
	if err != nil {
		panic(err)
	}

	Ch, err = conn.Channel()
	if err != nil {
		panic(err)
	}
}

func Publish(queue string, data string) error {
	return Ch.Publish(
		"",    // exchange
		queue, // routing key
		false, // mandatory
		false,
		amqp.Publishing{
			DeliveryMode: amqp.Persistent,
			ContentType:  "text/plain",
			Body:         []byte(data),
		})
}

func Consume(queue string, handler func(int)) error {
	if _, err := Ch.QueueDeclare(
		queue, // name
		true,  // durable
		false, // delete when unused
		false, // exclusive
		false, // no-wait
		nil,   // arguments
	); err != nil {
		return err
	}
	c, err := Ch.Consume(
		queue, // queue
		"",    // consumer
		true,  // auto-ack
		false, // exclusive
		false, // no-local
		false, // no-wait
		nil,   // args
	)
	if err != nil {
		return err
	}
	go func() {
		for d := range c {
			i, _ := strconv.Atoi(string(d.Body))
			handler(i)
		}
	}()
	return err
}

func Close() {
	Ch.Close()
}
