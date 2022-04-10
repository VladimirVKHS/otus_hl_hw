# Otus Highload Architect homework 8

## Общие сведения

- выполнена настройка haproxy для обеспечения отказоустойчивого подключения к slave-серверам mysql (2 инстанса: slave1,2): [config](./docker/haproxy/haproxy.cfg).
- работа запроса на чтение пользователей (api/users) выполнена через отказоустойчивое подключение mysql.
- выполнена настройка nginx для беспечения отказоустойчивого подключения к приложению соц сети (3 инстанса: app1,2,3): [config](./docker/nginx/default.conf).

## Запуск

     docker-compose up

## Просмотр данных:
- url приложения: http://localhost:9000/
- url статуса nginx: http://localhost:9001/nginx_status
- url статуса haproxy: localhost:8404/stats

## Эксперимент

- запущена генерация нагрузки (при помощи Jmeter 5.4.1)
- отключен один инстанс приложения (app1)
- отключен один инстанс mysql (slave1)
- включен инстанс приложения (app1)
- включен инстанс mysql (slave1)

Результаты:
- полный лог эксперимента: [log](./fault-tolerance-experiment-log.txt)
- скриншот настроек Jmeter: [link](http://joxi.ru/n2YpKlDCkQlO0m)
- скриншот результатов Jmeter: [link](http://joxi.ru/DmBKWwptqynQx2)

## Заключение

Отказоусточйивое подключение к mysql (через haproxy) и к приложению (через nginx) работает корректно. 