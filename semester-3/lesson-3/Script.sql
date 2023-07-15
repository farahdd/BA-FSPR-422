--database

 CREATE TABLE friends (
 	id INTEGER,
 	name TEXT UNIQUE,
 	birthday_date date
 );
 
 INSERT INTO friends (id, name, birthday_date)
 VALUES (1, 'James Monro', '1940-05-30');
 
 INSERT INTO friends (id, name, birthday_date)
 VALUES (2, 'James Hunt', '1940-09-15');
 
 INSERT INTO friends (id, name, birthday_date)
 VALUES (3, 'Dua Lipa', '1996-05-24');

 ALTER TABLE friend
 ADD COLUMN email TEXT;
 
 UPDATE friends
 SET email = 'blah-bla@gmail.com'
 WHERE id = 1;
 
 UPDATE friends
 SET email = 'hello@mail.ru'
 WHERE id = 2;
 
 UPDATE friends
 SET email = 'dualipa@gmail.com'
 WHERE id = 3;

SELECT * FROM friends
