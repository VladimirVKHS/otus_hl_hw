package migrations

import (
	"database/sql"
	goose "github.com/pressly/goose/v3"
)

func init() {
	goose.AddMigration(upAddUsersSearchIndex, downAddUsersSearchIndex)
}

func upAddUsersSearchIndex(tx *sql.Tx) error {
	_, err := tx.Exec(`
			ALTER TABLE users ADD INDEX users_search (first_name, last_name, is_public)
		`)
	if err != nil {
		return err
	}
	return nil
}

func downAddUsersSearchIndex(tx *sql.Tx) error {
	_, err := tx.Exec(`
			ALTER TABLE users DROP INDEX users_search;
		`)
	if err != nil {
		return err
	}
	return nil
}
