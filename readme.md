# Otus Highload Architect homework 1

Golang backend + angular web client   

## Run

    cp .env.example .env

    ./main

## .env configuration

    JWT_SECRET={any_string}}
    JWT_TOKEN_TTL=360000
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_USER=otus
    DB_PASSWORD=otus
    DB_NAME=otus
    HTTP_PORT=8085
    WEBCLIENT_DIR=webclient/dist/webclient
    REDIS_HOST=127.0.0.1
    REDIS_PORT=16379
    RABBIT_HOST=127.0.0.1
    RABBIT_PORT=15671
    DIALOG_SERVICE_HOST=http://localhost:7000
    COUNTERS_SERVICE_URL=http://localhost:7001