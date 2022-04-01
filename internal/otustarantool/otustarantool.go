package otustarantool

import (
	"github.com/tarantool/go-tarantool"
	"os"
	"otus_sn_go/internal/logger"
)

var Connection *tarantool.Connection

func InitDb() {
	dbHost, _ := os.LookupEnv("TARANTOOL_HOST")
	dbPort, _ := os.LookupEnv("TARANTOOL_PORT")
	opts := tarantool.Opts{User: "guest"}
	var err error
	if Connection, err = tarantool.Connect(dbHost+":"+dbPort, opts); err != nil {
		panic(err)
	}

}

func CloseConnection() {
	if err := Connection.Close(); err != nil {
		logger.Error(err.Error())
	}
}
