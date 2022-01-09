package user

import (
	"context"
	"errors"
	"otus_sn_go/internal/helpers/hash"
	"otus_sn_go/internal/otusdb"
)

type User struct {
	Id        int
	Login     string `validate:"lte=255,required"`
	FirstName string `validate:"lte=255,required"`
	LastName  string `validate:"lte=255,required"`
	Password  string `validate:"lte=255,required"`
	Age       int    `validate:"min=18,max=150,required"`
	Interests string `validate:"lte=4096"`
	City      string `validate:"lte=255,required"`
	CreatedAt string
	IsPublic  bool
}

type UserLoginRequest struct {
	Login    string `validate:"lte=255,required"`
	Password string `validate:"lte=255,required"`
}

type UserProfileUpdateRequest struct {
	Login     string `validate:"lte=255,required"`
	FirstName string `validate:"lte=255,required"`
	LastName  string `validate:"lte=255,required"`
	Password  string `validate:"lte=255"`
	Age       int    `validate:"min=18,max=150,required"`
	Interests string `validate:"lte=4096"`
	City      string `validate:"lte=255,required"`
	IsPublic  bool
}

func (u *User) Save(ctx context.Context) error {
	if u.Id != 0 {
		_, err := otusdb.Db.QueryContext(
			ctx,
			"UPDATE users SET login = ?, first_name = ?, last_name = ?, password = ?, age = ?, interests = ?, city = ?, is_public = ? WHERE id = ?",
			u.Login, u.FirstName, u.LastName, u.Password, u.Age, u.Interests, u.City, u.IsPublic, u.Id,
		)
		return err
	}
	result, err := otusdb.Db.ExecContext(
		ctx,
		"INSERT INTO users (login, first_name, last_name, password, age, interests, city, is_public, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP())",
		u.Login, u.FirstName, u.LastName, u.Password, u.Age, u.Interests, u.City, u.IsPublic,
	)
	if err != nil {
		return err
	}
	id, _ := result.LastInsertId()
	u.Id = int(id)
	return nil
}

func (u *User) ValidateUnique(ctx context.Context) error {
	count := -1
	if u.Id == 0 {
		err := otusdb.Db.QueryRowContext(
			ctx,
			"SELECT count(*) as c FROM users WHERE login = ?",
			u.Login,
		).Scan(&count)
		if err != nil {
			return err
		}
	} else {
		err := otusdb.Db.QueryRowContext(
			ctx,
			"SELECT count(*) as c FROM users WHERE login = ? AND id != ?",
			u.Login, u.Id,
		).Scan(&count)
		if err != nil {
			return err
		}
	}
	if count > 0 {
		return errors.New("Not a unique login")
	}
	return nil
}

func (u *User) Refresh(ctx context.Context) error {
	err := GetUserById(ctx, u.Id, u)
	return err
}

func (u *User) SetPassword(password string) error {
	passwordHash, err := hash.HashPassword(password)
	if err != nil {
		return err
	}
	u.Password = passwordHash
	return nil
}

func (u *User) CheckPassword(password string) bool {
	return hash.CheckPasswordHash(password, u.Password)
}

func (u *User) ToResponse() map[string]interface{} {
	return map[string]interface{}{
		"Id":        u.Id,
		"FirstName": u.FirstName,
		"LastName":  u.LastName,
		"Login":     u.Login,
		"Age":       u.Age,
		"Interests": u.Interests,
		"City":      u.City,
		"IsPublic":  u.IsPublic,
		"CreatedAt": u.CreatedAt,
	}
}

func UsersToResponse(users []*User) []map[string]interface{} {
	var result []map[string]interface{}
	for _, u := range users {
		result = append(result, u.ToResponse())
	}
	return result
}
