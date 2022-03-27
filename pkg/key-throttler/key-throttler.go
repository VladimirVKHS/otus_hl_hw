package key_throttler

import (
	"github.com/frostbyte73/go-throttle"
	"sync"
	"time"
)

var createMutex sync.Mutex

type Throttler struct {
	f func(f func())
	m *sync.Mutex
}

var throttles map[string]*Throttler

func init() {
	throttles = make(map[string]*Throttler)
}

func Throttle(key string, f func()) {
	var t *Throttler
	t, _ = throttles[key]
	if t == nil {
		createMutex.Lock()
		t, _ = throttles[key]
		if t == nil {
			t = &Throttler{
				f: throttle.New(time.Second * 10),
				m: &sync.Mutex{},
			}
		}
		throttles[key] = t
		createMutex.Unlock()
	}
	t.m.Lock()
	defer t.m.Unlock()
	t.f(f)
}
