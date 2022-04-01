CREATE USER 'otus'@'%' IDENTIFIED BY 'otus';
CREATE DATABASE otus;
GRANT ALL PRIVILEGES ON otus.* TO 'otus'@'%';
GRANT replication slave ON *.* TO 'otus'@'%';
GRANT REPLICATION CLIENT ON *.* TO 'otus'@'%';
GRANT SELECT ON *.* TO 'otus'@'%';
FLUSH PRIVILEGES