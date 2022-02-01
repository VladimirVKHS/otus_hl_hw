FROM mysql
COPY my.cnf /etc/mysql
RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com --recv-keys 467B942D3A79BD29
RUN apt-get update && apt-get install -y htop sysstat nmon procps