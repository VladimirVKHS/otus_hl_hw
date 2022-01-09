package migrations

import (
	"database/sql"
	goose "github.com/pressly/goose/v3"
)

func init() {
	goose.AddMigration(upCreateUserFriendsTable, downCreateUserFriendsTable)
}

func upCreateUserFriendsTable(tx *sql.Tx) error {
	_, err := tx.Exec(`
			CREATE TABLE user_friends (
			    user_id int,
			    friend_id int
            );
		`)
	if err != nil {
		return err
	}
	return nil
}

func downCreateUserFriendsTable(tx *sql.Tx) error {
	_, err := tx.Exec(`
			DROP TABLE user_friends;
		`)
	if err != nil {
		return err
	}
	return nil
}
