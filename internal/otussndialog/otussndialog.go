package otussndialog

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"
	"os"
	"time"
)

type MessageCreateRequest struct {
	AuthorId    int    `validate:"required"`
	AddresseeId int    `validate:"required"`
	Message     string `validate:"lte=4096,required"`
}

type Message struct {
	Id        string
	AuthorId  int    `validate:"required"`
	Message   string `validate:"lte=4096,required"`
	CreatedAt string
}

type MarkAsReadRequest struct {
	AuthorId    int      `validate:"required"`
	AddresseeId int      `validate:"required"`
	MessageIds  []string `validate:"required,gt=0,lte=1000,dive,uuid"`
}

type MarkAsReadResult struct {
	AffectedMessages int
}

func (m *Message) ToResponse() map[string]interface{} {
	return map[string]interface{}{
		"Id":        m.Id,
		"Message":   m.Message,
		"AuthorId":  m.AuthorId,
		"CreatedAt": m.CreatedAt,
	}
}

func (m *MarkAsReadResult) ToResponse() map[string]interface{} {
	return map[string]interface{}{
		"AffectedMessages": m.AffectedMessages,
	}
}

func (r *MessagesListResponse) ToResponse() map[string]interface{} {
	var items interface{}
	if len(r.Items) > 0 {
		items = MessagesToResponse(r.Items)
	} else {
		items = make([]string, 0)
	}
	return map[string]interface{}{
		"items": items,
	}
}

func MessagesToResponse(messages []*Message) []map[string]interface{} {
	var result []map[string]interface{}
	for _, m := range messages {
		result = append(result, m.ToResponse())
	}
	return result
}

type MessagesListResponse struct {
	Items []*Message `json:"items"`
}

var client *http.Client
var url string

func Init() {
	url, _ = os.LookupEnv("DIALOG_SERVICE_URL")
	tr := &http.Transport{
		MaxIdleConns:       10,
		IdleConnTimeout:    30 * time.Second,
		DisableCompression: true,
	}
	client = &http.Client{Transport: tr}
}

func PostMessage(request *MessageCreateRequest, requestId string) (*Message, error) {
	jsonData, _ := json.Marshal(&request)
	req, err := http.NewRequest("POST", url+"/api/messages", bytes.NewBuffer(jsonData))
	if err != nil {
		return nil, err
	}
	req.Header.Set("X-REQUEST-ID", requestId)
	req.Header.Set("Content-Type", "application/json")
	resp, err := client.Do(req)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()
	result := &Message{}
	if err := json.NewDecoder(resp.Body).Decode(result); err != nil {
		return nil, err
	}
	return result, nil
}

func MarkAsRead(request *MarkAsReadRequest, requestId string) (*MarkAsReadResult, error) {
	jsonData, _ := json.Marshal(&request)
	req, err := http.NewRequest("POST", url+"/api/messages/mark_as_read", bytes.NewBuffer(jsonData))
	if err != nil {
		return nil, err
	}
	req.Header.Set("X-REQUEST-ID", requestId)
	req.Header.Set("Content-Type", "application/json")
	resp, err := client.Do(req)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()
	result := &MarkAsReadResult{}
	if err := json.NewDecoder(resp.Body).Decode(result); err != nil {
		return nil, err
	}
	return result, nil
}

func ReadMessages(user1Id int, user2Id int, requestId string) (*MessagesListResponse, error) {
	req, err := http.NewRequest("GET", url+fmt.Sprintf("/api/messages?user1_id=%d&user2_id=%d", user1Id, user2Id), nil)
	if err != nil {
		return nil, err
	}
	req.Header.Set("X-REQUEST-ID", requestId)
	resp, err := client.Do(req)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()
	result := &MessagesListResponse{}
	if err := json.NewDecoder(resp.Body).Decode(result); err != nil {
		return nil, err
	}
	return result, nil
}
