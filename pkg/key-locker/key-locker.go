package key_locker

import "sync"

var createMutex sync.Mutex

var lockers map[string]*sync.Mutex

func init() {
	lockers = make(map[string]*sync.Mutex)
}

func Lock(key string) {
	var m *sync.Mutex
	m, _ = lockers[key]
	if m == nil {
		createMutex.Lock()
		m, _ = lockers[key]
		if m == nil {
			m = &sync.Mutex{}
			lockers[key] = m
		}
		createMutex.Unlock()
	}
	m.Lock()
}

func Unlock(key string) {
	m, ok := lockers[key]
	if ok {
		m.Unlock()
	}
}

func LockAndExecute(key string, f func() error) error {
	Lock(key)
	defer Unlock(key)
	return f()
}
