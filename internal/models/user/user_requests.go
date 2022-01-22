package user

import (
	"context"
	"fmt"
	"otus_sn_go/internal/otusdb"
	"strings"
)

type UsersListResponse struct {
	Items      []*User
	Page       int
	PerPage    int
	TotalItems int
	Search     string
	GetAll     bool
}

func (r *UsersListResponse) ToResponse() map[string]interface{} {
	var items interface{}
	if len(r.Items) > 0 {
		items = UsersToResponse(r.Items)
	} else {
		items = make([]string, 0)
	}
	return map[string]interface{}{
		"page":        r.Page,
		"per_page":    r.PerPage,
		"total_items": r.TotalItems,
		"get_all":     r.GetAll,
		"search":      r.Search,
		"items":       items,
	}
}

func GetUserById(ctx context.Context, id int, user *User) error {
	err := otusdb.Db.QueryRowContext(
		ctx,
		"SELECT id, first_name, last_name, password, login, city, age, interests, is_public, sex, created_at FROM users WHERE id = ?",
		id,
	).Scan(&user.Id, &user.FirstName, &user.LastName, &user.Password, &user.Login, &user.City, &user.Age, &user.Interests, &user.IsPublic, &user.Sex, &user.CreatedAt)
	return err
}

func GetUserByLogin(ctx context.Context, login string, user *User) error {
	err := otusdb.Db.QueryRowContext(
		ctx,
		"SELECT id, first_name, last_name, password, login, city, age, interests, is_public, sex, created_at FROM users WHERE login = ?",
		login,
	).Scan(&user.Id, &user.FirstName, &user.LastName, &user.Password, &user.Login, &user.City, &user.Age, &user.Interests, &user.IsPublic, &user.Sex, &user.CreatedAt)
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
		"SELECT id, first_name, last_name, password, login, city, age, interests, is_public, sex, created_at FROM users WHERE id IN (?"+strings.Repeat(",?", len(args)-1)+") ORDER BY id",
		args...,
	)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	for rows.Next() {
		user := &User{}
		err := rows.Scan(&user.Id, &user.FirstName, &user.LastName, &user.Password, &user.Login, &user.City, &user.Age, &user.Interests, &user.IsPublic, &user.Sex, &user.CreatedAt)
		if err != nil {
			return nil, err
		}
		users = append(users, user)
	}
	return users, nil
}

func GetPublicUsers(ctx context.Context, result *UsersListResponse) error {
	searchQuery := ""
	limitQuery := ""
	if result.Search != "" {
		q := otusdb.Quoter.Value(result.Search + "%")
		searchQuery = fmt.Sprintf("first_name LIKE '%s' AND last_name LIKE '%s' AND ", q, q)
	}

	if !result.GetAll {
		limitQuery = fmt.Sprintf(" ORDER BY id LIMIT %d OFFSET %d", result.PerPage, result.PerPage*(result.Page-1))
		err := otusdb.Db.QueryRowContext(
			ctx,
			"SELECT count(id) as c FROM users WHERE "+searchQuery+"is_public = 1",
		).Scan(&result.TotalItems)
		if err != nil {
			return err
		}
	}

	rows, err2 := otusdb.Db.QueryContext(
		ctx,
		"SELECT id, first_name, last_name, password, login, city, age, interests, is_public, sex, created_at FROM users WHERE "+
			searchQuery+
			"is_public = 1"+
			limitQuery+
			" ORDER BY id",
	)
	if err2 != nil {
		return err2
	}
	defer rows.Close()
	count := 0
	for rows.Next() {
		count++
		user := &User{}
		err := rows.Scan(&user.Id, &user.FirstName, &user.LastName, &user.Password, &user.Login, &user.City, &user.Age, &user.Interests, &user.IsPublic, &user.Sex, &user.CreatedAt)
		if err != nil {
			return err
		}
		result.Items = append(result.Items, user)
	}
	if result.GetAll {
		result.Page = 1
		result.PerPage = count
		result.TotalItems = count
	}
	return nil
}
