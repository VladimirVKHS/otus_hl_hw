package migrations

import (
	"database/sql"
	goose "github.com/pressly/goose/v3"
)

func init() {
	goose.AddMigration(upAddSexFieldToUsersTable, downAddSexFieldToUsersTable)
}

func upAddSexFieldToUsersTable(tx *sql.Tx) error {
	_, err := tx.Exec(`
			ALTER TABLE users ADD COLUMN sex ENUM('male','female');
		`)
	if err != nil {
		return err
	}
	return nil
}

func downAddSexFieldToUsersTable(tx *sql.Tx) error {
	_, err := tx.Exec(`
			ALTER TABLE users DROP COLUMN sex;
		`)
	if err != nil {
		return err
	}
	return nil
}
