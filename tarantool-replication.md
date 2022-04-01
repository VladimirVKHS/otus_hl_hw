# Настройка репликации MySQL в Tarantool. Сравнение скорости работы

## Общие сведения

   - целевой запрос: получение списка пользователей с пагинаций (без текстового поиска)

## Настройка Tarantool

    docker-compose up
    docker exec -i -t otus_sn_tarantool console
    box.cfg{}
    box.schema.space.create('binlog', { if_not_exists = true })
    box.space.binlog:create_index('primary', {unique = true, parts = {1, 'unsigned'}})
    box.schema.space.create('users', { if_not_exists = true })
    box.space.users:create_index('primary', {unique = true, parts = {1, 'unsigned'}})

    function get_users(all, page, per_page)
        meta = box.tuple.new({all, page, per_page, box.space.users:count()})
        if all then
            data = box.space.users:select()
        else
            data = box.space.users:pairs():drop_n((page - 1) * per_page):take_n(per_page):totable()
        end
        return box.tuple.new({meta, data})
    end

## Настройка репликатора Tarantool

   [replicatord.yml](docker/tarantool/replicator/replicatord.yml)

## Нагрузочное тестирование

### Параметры

   - ПО: Jmeter-5.4.1
   - 10 потоков
   - 60 секунд

### MySQL

   - запрос: api/users?per_page=100&page=${__Random(1,99)}
   - average, ms: 209
   - 95% line, ms: 483
   - errors, %: 0
   - throughput, 1/sec: 47,5
   - скриншот: http://joxi.ru/Drlx5GnUKjjpwr

### Tarantool

   - запрос: api/users/tarantool?per_page=100&page=${__Random(1,99)}
   - average, ms: 37
   - 95% line, ms: 58
   - errors, %: 0
   - throughput, 1/sec: 266,8
   - скриншот: http://joxi.ru/52aWqx4HlqqVDr

### Заключение

   - Запросы через тарантул выполняются в среднем в 5-6 раз быстрее