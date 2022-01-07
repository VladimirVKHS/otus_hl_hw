package main

import (
	"github.com/joho/godotenv"
	goose "github.com/pressly/goose/v3"
	"otus_sn_go/internal/logger"
	_ "otus_sn_go/internal/migrations"
	"otus_sn_go/internal/otusdb"
)

func main()  {
	if err := godotenv.Load(); err != nil {
		panic("Config not found: .env!")
	}
	logger.Init()
	otusdb.InitDb()
	defer otusdb.CloseDb()

	goose.SetDialect("mysql")
	err := goose.Up(otusdb.Db, "internal/migrations")
	if err != nil {
		panic(err)
	}


}
