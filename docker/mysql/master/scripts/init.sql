CREATE USER 'otus'@'%' IDENTIFIED BY 'otus';
CREATE DATABASE otus;
GRANT ALL PRIVILEGES ON *.* TO 'otus'@'%';
GRANT replication slave ON *.* TO 'otus'@'%';
FLUSH PRIVILEGES;