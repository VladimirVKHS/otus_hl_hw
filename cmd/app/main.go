package main

import (
	"fmt"
	"github.com/joho/godotenv"
	goose "github.com/pressly/goose/v3"
	"net/http"
	"os"
	"otus_sn_go/internal/logger"
	_ "otus_sn_go/internal/migrations"
	"otus_sn_go/internal/otusdb"
	"otus_sn_go/internal/routes"
	"strconv"
)

func main() {
	if err := godotenv.Load(); err != nil {
		panic("Config not found: .env!")
	}
	logger.Init()
	otusdb.InitDb()
	defer otusdb.CloseDb()

	goose.SetDialect("mysql")
	args := os.Args
	if len(args) > 1 {
		exit := false
		command := args[1]
		if command == "db:reset" {
			err := goose.Reset(otusdb.Db, "internal/migrations")
			if err != nil {
				panic(err)
			}
			exit = true
		}
		if command == "db:fix-migrations" {
			err := goose.Fix("internal/migrations")
			if err != nil {
				panic(err)
			}
			exit = true
		}
		if command == "db:down" {
			err := goose.Down(otusdb.Db, "internal/migrations")
			if err != nil {
				panic(err)
			}
			exit = true
		}
		if command == "db:down-to" && len(args) >= 3 {
			ver, _ := strconv.Atoi(args[2])
			err := goose.DownTo(otusdb.Db, "internal/migrations", int64(ver))
			if err != nil {
				panic(err)
			}
			exit = true
		}
		if exit {
			return
		}
	}

	err := goose.Up(otusdb.Db, "internal/migrations")
	if err != nil {
		panic(err)
	}

	// Chi routes
	http.Handle("/", routes.RegisterRouter())

	httpPort, _ := os.LookupEnv("HTTP_PORT")
	fmt.Println("HTTP server started, port: " + httpPort)
	http.ListenAndServe(":"+httpPort, nil)
}