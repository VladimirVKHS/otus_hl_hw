package otussncounters

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"
	"os"
	"time"
)

type Counter struct {
	UserId              int
	UnreadMessagesCount int
}

func (c *Counter) ToResponse() map[string]interface{} {
	return map[string]interface{}{
		"UserId":              c.UserId,
		"UnreadMessagesCount": c.UnreadMessagesCount,
	}
}

type CounterUpdateRequest struct {
	UnreadMessagesCountDelta int
}

var client *http.Client
var url string

func Init() {
	url, _ = os.LookupEnv("COUNTERS_SERVICE_URL")
	tr := &http.Transport{
		MaxIdleConns:       10,
		IdleConnTimeout:    30 * time.Second,
		DisableCompression: true,
	}
	client = &http.Client{Transport: tr}
}

func GetCounters(userId int, requestId string) (*Counter, error) {
	req, err := http.NewRequest("GET", url+fmt.Sprintf("/api/counters/%d", userId), nil)
	if err != nil {
		return nil, err
	}
	req.Header.Set("X-REQUEST-ID", requestId)
	resp, err := client.Do(req)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()
	result := &Counter{}
	if err := json.NewDecoder(resp.Body).Decode(result); err != nil {
		return nil, err
	}
	return result, nil
}

func UpdateCounters(userId int, request *CounterUpdateRequest, requestId string) (*Counter, error) {
	jsonData, _ := json.Marshal(&request)
	req, err := http.NewRequest("POST", url+fmt.Sprintf("/api/counters/%d", userId), bytes.NewBuffer(jsonData))
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
	result := &Counter{}
	if err := json.NewDecoder(resp.Body).Decode(result); err != nil {
		return nil, err
	}
	return result, nil
}
