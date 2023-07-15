-- Создание таблицы
-- CREATE TABLE celebs (
-- 	id INTEGER,
-- 	name TEXT,
-- 	age INTEGER
-- );
-- 
-- INSERT INTO celebs (id, name, age)
-- VALUES (1, 'LEWIS HAMILTON', '30')
-- 
-- INSERT INTO celebs (id, name, age)
-- VALUES (2, 'CARLOS SAINZ', '')
-- 
-- ALTER TABLE celebs
-- ADD COLUMN twitter_handle varchar(50);
-- 
-- UPDATE celebs
-- SET twitter_handle = '@taylorswift13'
-- WHERE id = 2
-- 
-- select * from celebs;
-- 
-- DELETE FROM celebs
-- WHERE age IS NULL

-- CREATE TABLE celebs (
-- 	id integer primary key,
-- 	name text unique,
-- 	date_of_birth text not null,
-- 	date_of_death text DEFAULT 'Not Applicable'
-- 
-- );
-- 
-- INSERT INTO celebs (id, name, date_of_birth)
-- VALUES (1, 'Lewis Hamilton', '2020-12-06');
-- 
-- INSERT INTO celebs (id, name, date_of_birth)
-- VALUES (2, 'Charles Leclerc', '2021-10-06');

-- CREATE TABLE friend (
-- 	id INTEGER,
-- 	name TEXT UNIQUE,
-- 	bithday_date TEXT
-- );
-- 
-- INSERT INTO friend (id, name, bithday_date)
-- VALUES (1, 'James Monro', '1940-05-30');
-- 
-- INSERT INTO friend (id, name, bithday_date)
-- VALUES (2, 'James Hunt', '1940-09-15');
-- 
-- INSERT INTO friend (id, name, bithday_date)
-- VALUES (3, 'Dua Lipa', '1996-05-24');



-- ALTER TABLE friend
-- ADD COLUMN email TEXT;
-- 
-- UPDATE friend
-- SET email = 'blah-bla@gmail.com'
-- WHERE id = 1;
-- 
-- UPDATE friend
-- SET email = 'hello@mail.ru'
-- WHERE id = 2;
-- 
-- UPDATE friend
-- SET email = 'dualipa@gmail.com'
-- WHERE id = 3;
-- 
-- DELETE FROM friend
-- WHERE name = 'James Monro';

-- INSERT INTO friend (id, name, bithday_date)
-- VALUES (1, 'James Monro', '1940-05-30');

UPDATE friend
SET name = 'Flash'
WHERE id = 1;

SELECT * FROM friend

