package post

import (
	"context"
	"otus_sn_go/internal/models/user"
	"otus_sn_go/internal/otusdb"
)

type Post struct {
	Id        int
	UserId    int
	Title     string
	Body      string
	CreatedAt string
	UpdatedAt string
	User      *user.User
}

type PostCreateRequest struct {
	Title string `validate:"lte=255,required"`
	Body  string `validate:"lte=4096,required"`
}

func (p *Post) Save(ctx context.Context) error {
	if p.Id != 0 {
		_, err := otusdb.Db.QueryContext(
			ctx,
			"UPDATE users SET user_id = ?, title= ?, body = ?, updated_at = CURRENT_TIMESTAMP() WHERE id = ?",
			p.UserId, p.Title, p.Body, p.Id,
		)
		return err
	}
	result, err := otusdb.Db.ExecContext(
		ctx,
		"INSERT INTO posts (user_id, title, body, updated_at, created_at) VALUES (?, ?, ?, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP())",
		p.UserId, p.Title, p.Body,
	)
	if err != nil {
		return err
	}
	id, _ := result.LastInsertId()
	p.Id = int(id)
	return nil
}

func (p *Post) Refresh(ctx context.Context) error {
	err := GetPostById(ctx, p.Id, p)
	return err
}

func (p *Post) ToResponse() map[string]interface{} {
	return map[string]interface{}{
		"Id":        p.Id,
		"UserId":    p.UserId,
		"Title":     p.Title,
		"Body":      p.Body,
		"UpdatedAt": p.UpdatedAt,
		"CreatedAt": p.CreatedAt,
	}
}

func PostsToResponse(posts []*Post) []map[string]interface{} {
	var result []map[string]interface{}
	for _, p := range posts {
		result = append(result, p.ToResponse())
	}
	return result
}
