package migrations

import (
	"database/sql"
	goose "github.com/pressly/goose/v3"
)

func init() {
	goose.AddMigration(upCreateUsersTable, downCreateUsersTable)
}

func upCreateUsersTable(tx *sql.Tx) error {
	_, err := tx.Exec(`
			CREATE TABLE users (
			    id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
			    first_name VARCHAR(255),
			    last_name VARCHAR(255),
			    login VARCHAR(255),
			    password VARCHAR(255),
				age INTEGER,
				interests VARCHAR(4096),
				city VARCHAR(4096),
				is_public TINYINT(1),
			    created_at TIMESTAMP
            );
		`)
	if err != nil {
		return err
	}
	return nil
}

func downCreateUsersTable(tx *sql.Tx) error {
	_, err := tx.Exec(`
			DROP TABLE users;
		`)
	if err != nil {
		return err
	}
	return nil
}
