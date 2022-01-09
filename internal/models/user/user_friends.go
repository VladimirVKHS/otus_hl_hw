package user

import (
	"context"
	"errors"
	arraysHelper "otus_sn_go/internal/helpers/arrays"
	"otus_sn_go/internal/otusdb"
)

type UserFriendsData struct {
	IncomingRequests []*User
	OutgoingRequests []*User
	Friends          []*User
}

func (friendsData *UserFriendsData) ToResponse() map[string]interface{} {
	var incoming interface{}
	if len(friendsData.IncomingRequests) > 0 {
		incoming = UsersToResponse(friendsData.IncomingRequests)
	} else {
		incoming = make([]string, 0)
	}
	var outgoing interface{}
	if len(friendsData.OutgoingRequests) > 0 {
		outgoing = UsersToResponse(friendsData.OutgoingRequests)
	} else {
		outgoing = make([]string, 0)
	}
	var friends interface{}
	if len(friendsData.Friends) > 0 {
		friends = UsersToResponse(friendsData.Friends)
	} else {
		friends = make([]string, 0)
	}
	return map[string]interface{}{
		"incoming_requests": incoming,
		"outgoing_requests": outgoing,
		"friends":           friends,
	}
}

func (u *User) GetFriendsData(ctx context.Context) (*UserFriendsData, error) {
	result := &UserFriendsData{}
	totalUserIds := []int{}
	incomingUserIds := []int{}
	outgoingUserIds := []int{}
	realIncomingUserIds := []int{}
	realOutgoingUserIds := []int{}
	realFriendUserIds := []int{}
	friendsRows, err := otusdb.Db.QueryContext(ctx, "SELECT user_id, friend_id FROM user_friends WHERE user_id = ? OR friend_id = ?;", u.Id, u.Id)
	if err != nil {
		return nil, err
	}
	defer friendsRows.Close()
	for friendsRows.Next() {
		var userId int
		var friendId int
		friendsRows.Scan(&userId, &friendId)
		if userId == u.Id {
			outgoingUserIds = append(outgoingUserIds, friendId)
		} else {
			incomingUserIds = append(incomingUserIds, userId)
		}
	}
	for _, v := range outgoingUserIds {
		if arraysHelper.IndexOf(incomingUserIds, v) < 0 {
			realOutgoingUserIds = append(realOutgoingUserIds, v)
		} else {
			realFriendUserIds = append(realFriendUserIds, v)
		}
		totalUserIds = append(totalUserIds, v)
	}
	for _, v := range incomingUserIds {
		if arraysHelper.IndexOf(realFriendUserIds, v) < 0 {
			realIncomingUserIds = append(realIncomingUserIds, v)
			totalUserIds = append(totalUserIds, v)
		}
	}
	users, err := GetUsersByIds(ctx, totalUserIds)
	if err != nil {
		return nil, err
	}
	for _, u := range users {
		if arraysHelper.IndexOf(realFriendUserIds, u.Id) >= 0 {
			result.Friends = append(result.Friends, u)
		} else if arraysHelper.IndexOf(realIncomingUserIds, u.Id) >= 0 {
			result.IncomingRequests = append(result.IncomingRequests, u)
		} else {
			result.OutgoingRequests = append(result.OutgoingRequests, u)
		}
	}
	return result, nil
}

func (u *User) AddToFriends(ctx context.Context, friendId int) error {
	if u.Id == friendId {
		return errors.New("Unaccptable friend ID")
	}
	_, err := otusdb.Db.ExecContext(
		ctx,
		"INSERT INTO user_friends (user_id, friend_id) SELECT * FROM (SELECT ? AS user_id, ? AS friend_id) AS temp WHERE"+
			" NOT EXISTS (SELECT user_id, friend_id FROM user_friends WHERE user_id = ? AND friend_id = ?) LIMIT 1;",
		u.Id, friendId, u.Id, friendId,
	)
	return err
}

func (u *User) RemoveFromFriends(ctx context.Context, friendId int) error {
	if u.Id == friendId {
		return errors.New("Unacceptable friend ID")
	}
	_, err := otusdb.Db.ExecContext(
		ctx,
		"DELETE FROM user_friends WHERE user_id = ? AND friend_id = ?;",
		u.Id, friendId,
	)
	return err
}

func (u *User) IsFriendOrSubscriber(ctx context.Context, targetUserId int) (bool, error) {
	if u.Id == targetUserId {
		return true, nil
	}
	var count int
	err := otusdb.Db.QueryRowContext(
		ctx,
		"SELECT count(*) as c FROM user_friends WHERE user_id =? AND friend_id = ?",
		targetUserId, u.Id,
	).Scan(&count)
	if err != nil {
		return false, err
	}
	return count > 0, nil
}
