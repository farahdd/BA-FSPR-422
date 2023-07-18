-- CREATE TABLE movies (
-- 	id INTEGER primary key,
-- 	name text,
-- 	release_year date
-- );
-- 
-- INSERT into movies (name, release_year)
-- values 
-- ('Batman Begins', 2005-06-15),
-- ('Interstellar', 2014-10-7),
-- ('Openheimer', 2023-07-21);
-- 
-- ALTER TABLE movies
-- add COLUMN runtime time;
-- 
-- alter table movies
-- add column category text;
-- 
-- alter table movies
-- add column rating real;
-- 
-- alter table movies
-- add column box_office bigint;
-- 
-- alter table movies
-- add column created_at datetime;

update movies 
set runtime = '1:50:00', rating = 8.2, box_office = 150000000, created_at = '2004-07-10 14:00:00'
where id = 1;

update movies 
set runtime = '3:00:00', rating = 8.7, box_office = 165000000, created_at = '2013-03-06 14:15:0'
where id = 2;

update movies 
set runtime = '2:30:00', rating = 0.0, box_office = 0, created_at = '2022-07-06 19:20:00'
where id = 3;

-- alter TABLE movies
-- ADD CONSTRAINT movies_name UNIQUE (name);



