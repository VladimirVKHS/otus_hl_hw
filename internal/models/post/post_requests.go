package post

import (
	"context"
	"fmt"
	arraysHelper "otus_sn_go/internal/helpers/arrays"
	"otus_sn_go/internal/models/user"
	"otus_sn_go/internal/otusdb"
)

type PostsListResponse struct {
	Items         []*Post
	Users         []*user.User
	Page          int
	PerPage       int
	TotalItems    int
	Search        string
	GetAll        bool
	GetTotalItems bool
}

func (r *PostsListResponse) ToResponse() map[string]interface{} {
	var items interface{}
	if len(r.Items) > 0 {
		items = PostsToResponse(r.Items)
	} else {
		items = make([]string, 0)
	}
	var users interface{}
	if len(r.Users) > 0 {
		users = user.UsersToResponse(r.Users)
	} else {
		users = make([]string, 0)
	}
	return map[string]interface{}{
		"page":            r.Page,
		"per_page":        r.PerPage,
		"total_items":     r.TotalItems,
		"get_all":         r.GetAll,
		"get_total_items": r.GetTotalItems,
		"search":          r.Search,
		"items":           items,
		"users":           users,
	}
}

func GetPostById(ctx context.Context, id int, post *Post) error {
	err := otusdb.Db.QueryRowContext(
		ctx,
		"SELECT id, user_id, title, body, updated_at, created_at FROM posts WHERE id = ?",
		id,
	).Scan(&post.Id, &post.UserId, &post.Title, &post.Body, &post.UpdatedAt, &post.CreatedAt)
	return err
}

func GetPosts(ctx context.Context, whereQuery string, result *PostsListResponse) error {
	searchQuery := ""
	limitQuery := ""
	if result.Search != "" {
		q := otusdb.Quoter.Value(result.Search + "%")
		searchQuery = fmt.Sprintf("title LIKE '%s' AND body LIKE '%s' AND ", q, q)
	}

	if !result.GetAll && result.GetTotalItems {
		limitQuery = fmt.Sprintf(" LIMIT %d OFFSET %d", result.PerPage, result.PerPage*(result.Page-1))
		err := otusdb.Db.QueryRowContext(
			ctx,
			"SELECT count(id) as c FROM posts WHERE "+whereQuery+" "+searchQuery,
		).Scan(&result.TotalItems)
		if err != nil {
			return err
		}
	}

	rows, err2 := otusdb.Db.QueryContext(
		ctx,
		"SELECT id, user_id, title, body, updated_at, created_at FROM posts WHERE "+
			whereQuery+" "+
			searchQuery+
			" ORDER BY updated_at DESC "+
			limitQuery,
	)
	if err2 != nil {
		return err2
	}
	defer rows.Close()
	count := 0
	for rows.Next() {
		count++
		post := &Post{}
		err := rows.Scan(&post.Id, &post.UserId, &post.Title, &post.Body, &post.UpdatedAt, &post.CreatedAt)
		if err != nil {
			return err
		}
		result.Items = append(result.Items, post)
	}
	if result.GetAll {
		result.Page = 1
		result.PerPage = count
		result.TotalItems = count
	}

	// Load users
	var userIds []int
	for _, post := range result.Items {
		if arraysHelper.IndexOf(userIds, post.UserId) < 0 {
			userIds = append(userIds, post.UserId)
		}
	}
	users, err := user.GetUsersByIds(ctx, userIds)
	if err != nil {
		return err
	}
	result.Users = users

	return nil
}

func GetUserPosts(ctx context.Context, user *user.User, result *PostsListResponse) error {
	whereQuery := fmt.Sprintf("user_id = %d", user.Id)
	if err := GetPosts(ctx, whereQuery, result); err != nil {
		return err
	}
	return nil
}

func GetUserFeed(ctx context.Context, user *user.User, result *PostsListResponse) error {
	whereQuery := fmt.Sprintf(
		"user_id IN (SELECT friend_id FROM user_friends WHERE user_id = %d)",
		user.Id,
	)
	if err := GetPosts(ctx, whereQuery, result); err != nil {
		return err
	}
	return nil
}
