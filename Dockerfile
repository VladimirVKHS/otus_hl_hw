FROM ubuntu:18.10
RUN mkdir /var/app && mkdir /var/app/logs
WORKDIR /var/app
COPY ./webclient /var/app/webclient
COPY ./main /var/app/main
COPY ./internal/migrations /var/app/internal/migrations
RUN chmod 777 /var/app/main
CMD [ "/var/app/main" ]