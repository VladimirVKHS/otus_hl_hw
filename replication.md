# 1. Настрока асинхронной репликации

## Создание/запуск серверов БД

    docker-compose up
    docker exec -i -t otus_sn_mysql_master bash // консоль mysql master
    docker exec -i -t otus_sn_mysql_slave1 bash // консоль mysql slave1
    docker exec -i -t otus_sn_mysql_slave2 bash // консоль mysql slave2

## Конфигурация mysql

  - Master

        server_id = 1
        replicate-do-db = otus

  - Slave-1

        server_id = 2
        replicate-do-db = otus

  - Slave-2

        server_id = 3
        replicate-do-db = otus

## Просмотр статуса на мастере

    SHOW MASTER STATUS;
    
    +---------------+----------+--------------+------------------+-------------------+
    | File          | Position | Binlog_Do_DB | Binlog_Ignore_DB | Executed_Gtid_Set |
    +---------------+----------+--------------+------------------+-------------------+
    | binlog.000002 |      156 |              |                  |                   |
    +---------------+----------+--------------+------------------+-------------------+
    1 row in set (0.00 sec)


## Настройка репликации на слейве

    CHANGE MASTER TO
    MASTER_HOST='otus_sn_mysql_master',
    MASTER_USER='otus',
    MASTER_PASSWORD='otus',
    MASTER_PORT=3306,
    MASTER_LOG_FILE='binlog.000002',
    MASTER_LOG_POS=156,
    MASTER_CONNECT_RETRY=10;

    START SLAVE;

    SHOW SLAVE STATUS \G
    
    *************************** 1. row ***************************
        ...
        Slave_IO_Running: Yes
        Slave_SQL_Running: Yes
        ...

## 2,3. Нагрузочный тест

 - Утилизация ресурсов master при чтении с master:

       CPU Avg  99%                                                                                     0K/4.00G]   Load average: 4.20 2.28 1.33
       Memory 382.7Mb
       Disk usage: n/a (docker)

 - Утилизация ресурсов master при чтении со slave:

       CPU Avg  24%                                                                                     0K/4.00G]   Load average: 4.20 2.28 1.33
       Memory 380.1Mb
       Disk usage: n/a (docker)

## 5. Настройка 2-х слейвов и одного мастера (аналогично п.1)

При подключении новой реплики необходимо перевести мастер в readonly (предварительно заблокировав таблицы), снять дамп и развернуть его на слейве. Для ускорения - просто снес базу и подключил сразу 2 слейва.

    FLUSH TABLES WITH READ LOCK;
    SET GLOBAL read_only = ON;
    ... 
    SET GLOBAL read_only = OFF; 
    UNLOCK TABLES;

## 6. Включение row-based репликации

 - На мастере:

       SET GLOBAL binlog_format = 'ROW';

 - Изменение конфигурации на мастере:

       binlog_format = row 

## 7. Включение GTID

  - Переводим master в readonly:

        FLUSH TABLES WITH READ LOCK;
        SET GLOBAL read_only = ON;

  - На каждом сервере последовательно по 1-й команде:

        SET @@GLOBAL.ENFORCE_GTID_CONSISTENCY = WARN;
        SET @@GLOBAL.ENFORCE_GTID_CONSISTENCY = ON;
        SET @@GLOBAL.GTID_MODE = OFF_PERMISSIVE;
        SET @@GLOBAL.GTID_MODE = ON_PERMISSIVE;
        SHOW STATUS LIKE 'ONGOING_ANONYMOUS_TRANSACTION_COUNT'; // Ждем пока не будет равно нулю
        SET @@GLOBAL.GTID_MODE = ON;

  - На каждом сервере добавляем в конфиг:
       
        gtid_mode=ON
        enforce-gtid-consistency=ON

  - На каждом slave выполняем:

        STOP SLAVE;
        CHANGE MASTER TO MASTER_AUTO_POSITION = 1;
        START SLAVE;
        SHOW SLAVE STATUS \G //Проверяем статус

        ... 
        Slave_IO_Running: Yes
        Slave_SQL_Running: Yes


  - Отключаем readonly на master:

        SET GLOBAL read_only = OFF; 
        UNLOCK TABLES;

## 8. Настройка полусинхронной репликации

  - На мастере:

        INSTALL PLUGIN rpl_semi_sync_source SONAME 'semisync_source.so';

  - На слейвах:

        INSTALL PLUGIN rpl_semi_sync_replica SONAME 'semisync_replica.so';

  - На всех серверах проверяем статус плагина (должен быть ACTIVE):

        SELECT PLUGIN_NAME, PLUGIN_STATUS
        FROM INFORMATION_SCHEMA.PLUGINS
        WHERE PLUGIN_NAME LIKE '%semi%';
  
  - На слейвах перезапускаем IO_THREAD, проверяем статус:
        
        STOP REPLICA IO_THREAD;
        START REPLICA IO_THREAD;
        
        SHOW SLAVE STATUS \G

  - Обновляем конфигурацию мастера:
       
        rpl_semi_sync_source_enabled=1

  - Обновляем конфигурацию слейвов:

        rpl_semi_sync_replica_enabled=1

## 9. Создем нагрузку на запись в любую тестовую таблицу

   - Запускаем создание миллиона рандомных пользователей

         main db:create-fake-users 1000000

## 10. С помощью kill -9 убиваем мастер MySQL.

   - По kill -9 не удалось остановить mysql.

   - Для остановки использовал docker:

          docker container kill otus_sn_mysql_master

   - Команда создания пользователей вылетела по ошибке 

          50313 / 1000000
          mysql] 2022/02/02 01:14:00 packets.go:37: unexpected EOF
          panic: invalid connection

   - На обоих слейвах проверяем кол-во созданных записей: одинаково по 50313

## 11,12,13. Промоутим slave2 до мастера. Проверяем, есть ли потери транзакций.

   - На slave 2:

         STOP REPLICA;
         RESET MASTER;

   - На slave 1:

         STOP REPLICA;
         CHANGE REPLICATION SOURCE TO SOURCE_HOST='otus_sn_mysql_slave2';
         START REPLICA;

   - Колво созданных записей на обоих слевах одинаково (50313). Перезапускаем master - проверяем кол-во пользователей  - 50313. Соотвественно потери транзакций не произошло.

   - Пробуем запустить создание юзеров на slave2. Проверяем - записи создаются на обоих серверах slave1 и slave2. Slave 2 выполняет роль мастера.

