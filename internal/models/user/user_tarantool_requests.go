package user

import (
	"context"
	"otus_sn_go/internal/otustarantool"
)

func GetPublicUsersFromTarantool(ctx context.Context, result *UsersListResponse) error {
	resp, err := otustarantool.Connection.Call("get_users", []interface{}{result.GetAll, result.PerPage, result.Page})
	if err != nil {
		return err
	}

	result.TotalItems = int(((resp.Tuples()[0][0]).([]interface{})[3]).(uint64))

	for _, u := range (resp.Tuples()[0][1]).([]interface{}) {
		ua := (u).([]interface{})
		user := &User{}
		user.Id = int((ua[0]).(uint64))
		user.FirstName = (ua[1]).(string)
		user.LastName = (ua[2]).(string)
		user.Login = (ua[3]).(string)
		user.Age = int((ua[4]).(uint64))
		user.Interests = (ua[5]).(string)
		user.City = (ua[6]).(string)
		user.IsPublic = (ua[7]).(uint64) > 0
		user.CreatedAt = (ua[8]).(string)
		result.Items = append(result.Items, user)
	}
	if result.GetAll {
		result.Page = 1
		result.PerPage = result.TotalItems
	}
	return nil
}
