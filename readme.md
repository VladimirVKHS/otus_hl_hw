# Otus Highload Architect homework 1

Golang backend + angular web client   

## Run

    docker-compose up

## Fill database

    docker exec -i -t otus_sn_app bash
    main db:create-fake-users 100

## .env configuration

    JWT_SECRET={any_string}}
    JWT_TOKEN_TTL=360000
    DB_HOST=otus_sn_mysql_master
    DB_PORT=3306
    DB_USER=otus
    DB_PASSWORD=otus
    DB_NAME=otus
    HTTP_PORT=8085
    WEBCLIENT_DIR=webclient/dist/webclient
    REDIS_HOST=otus_sn_redis
    REDIS_PORT=6379
    RABBIT_HOST=otus_sn_rabbitmq
    RABBIT_PORT=5672
    RABBIT_WS_EXCHANGE=ws