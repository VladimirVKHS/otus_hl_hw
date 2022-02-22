package migrations

import (
	"database/sql"
	goose "github.com/pressly/goose/v3"
)

func init() {
	goose.AddMigration(upCreatePostsTable, downCreatePostsTable)
}

func upCreatePostsTable(tx *sql.Tx) error {
	_, err := tx.Exec(`
			CREATE TABLE posts (
			    id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
			    title VARCHAR(255),
			    body VARCHAR(4096),
			    user_id int,
			    created_at TIMESTAMP,
			    updated_at TIMESTAMP
            );
		`)
	if err != nil {
		return err
	}
	_, err2 := tx.Exec(`
			ALTER TABLE posts ADD INDEX posts_user_idx (user_id);
		`)
	if err2 != nil {
		return err
	}
	return nil
}

func downCreatePostsTable(tx *sql.Tx) error {
	_, err := tx.Exec(`
			DROP TABLE posts;
		`)
	if err != nil {
		return err
	}
	return nil
}
