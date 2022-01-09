package user

import (
	"context"
	"otus_sn_go/internal/otusdb"
	"strings"
)

type UsersListResponse struct {
	Users      []*User
	Page       int
	PerPage    int
	TotalItems int
}

func GetUserById(ctx context.Context, id int, user *User) error {
	err := otusdb.Db.QueryRowContext(
		ctx,
		"SELECT id, first_name, last_name, password, login, city, age, interests, is_public, created_at FROM users WHERE id = ?",
		id,
	).Scan(&user.Id, &user.FirstName, &user.LastName, &user.Password, &user.Login, &user.City, &user.Age, &user.Interests, &user.IsPublic, &user.CreatedAt)
	return err
}

func GetUserByLogin(ctx context.Context, login string, user *User) error {
	err := otusdb.Db.QueryRowContext(
		ctx,
		"SELECT id, first_name, last_name, password, login, city, age, interests, is_public, created_at FROM users WHERE login = ?",
		login,
	).Scan(&user.Id, &user.FirstName, &user.LastName, &user.Password, &user.Login, &user.City, &user.Age, &user.Interests, &user.IsPublic, &user.CreatedAt)
	return err
}

func GetUsersByIds(ctx context.Context, ids []int) ([]*User, error) {
	var users []*User
	if len(ids) == 0 {
		return users, nil
	}
	args := make([]interface{}, len(ids))
	for i, id := range ids {
		args[i] = id
	}
	rows, err := otusdb.Db.QueryContext(
		ctx,
		"SELECT id, first_name, last_name, password, login, city, age, interests, is_public, created_at FROM users WHERE id IN (?"+strings.Repeat(",?", len(args)-1)+") ORDER BY id",
		args...,
	)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	for rows.Next() {
		user := &User{}
		err := rows.Scan(&user.Id, &user.FirstName, &user.LastName, &user.Password, &user.Login, &user.City, &user.Age, &user.Interests, &user.IsPublic, &user.CreatedAt)
		if err != nil {
			return nil, err
		}
		users = append(users, user)
	}
	return users, nil
}

func GetPublicUsers(ctx context.Context, result *UsersListResponse) error {
	err := otusdb.Db.QueryRowContext(
		ctx,
		"SELECT count(id) as c FROM users WHERE is_public = 1",
	).Scan(&result.TotalItems)
	if err != nil {
		return err
	}
	rows, err2 := otusdb.Db.QueryContext(
		ctx,
		"SELECT id, first_name, last_name, password, login, city, age, interests, is_public, created_at FROM users WHERE is_public = 1 OFFSET ? LIMIT ? ORDER BY id",
		result.PerPage*(result.Page-1),
		result.PerPage,
	)
	if err2 != nil {
		return err2
	}
	defer rows.Close()
	for rows.Next() {
		user := &User{}
		err := rows.Scan(&user.Id, &user.FirstName, &user.LastName, &user.Password, &user.Login, &user.City, &user.Age, &user.Interests, &user.IsPublic, &user.CreatedAt)
		if err != nil {
			return err
		}
		result.Users = append(result.Users, user)
	}
	return nil
}
