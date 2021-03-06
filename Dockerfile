FROM golang:latest as builder
RUN mkdir /app
ADD . /app/
WORKDIR /app
EXPOSE 8086
RUN GOOS=linux GOARCH=amd64 go build -o /app/main /app/cmd/app/main.go

FROM ubuntu:18.04

COPY --from=builder /app/main /usr/bin/main
COPY --from=builder /app/logs /usr/bin/logs
COPY --from=builder /app/docker/app/env /usr/bin/.env
COPY --from=builder /app/internal/migrations /usr/bin/internal/migrations
COPY --from=builder /app/webclient/dist /usr/bin/webclient/dist
WORKDIR /usr/bin/
EXPOSE 8086
ENTRYPOINT [ "/usr/bin/main" ]