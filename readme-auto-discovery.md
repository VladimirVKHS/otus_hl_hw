# Service uto discovery (homework 11)

## Общие сведения
- сервис диалог обернут в docker
- резвернут consul (3 сервера + 2 клиента для сервиса диалогов)
- реализовано auto discovery сервиса диалогов с применением consul-template и haproxy
- равномерная нагрузка экземпляров сервиса диалогов реализуется посредством haproxy (roundrobin)
- схема: http://joxi.ru/ZrJx8bDUQGLMR2

## Процесс развертки новых экземпляров
- регистрируем новый экземпляр в consul (service - dialog)
- автоматически consul-template генерирует конфиг для haproxy и перезагружает его