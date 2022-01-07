package otusdb

import (
	"database/sql"
	_ "github.com/go-sql-driver/mysql"
	"os"
)

var Db *sql.DB

func InitDb() {

	dbHost, _ := os.LookupEnv("DB_HOST")
	dbUser, _ := os.LookupEnv("DB_USER")
	dbPassword, _ := os.LookupEnv("DB_PASSWORD")
	dbName, _ := os.LookupEnv("DB_NAME")
	dbPort, _ := os.LookupEnv("DB_PORT")
	db, err := sql.Open("mysql", dbUser + ":" + dbPassword + "@tcp(" + dbHost + ":" + dbPort + ")/" + dbName)
	if err != nil {
		panic(err)
	}
	Db = db
}

func CloseDb() error {
	return Db.Close()
}