create table book (
--	id integer primary key,
	title varchar(100),
	isbn varchar(50) primary key,
	pages integer,
	price money,
	description varchar(256),
	publisher varchar(100)
);



create table author (
	name varchar(50),
	bio varchar(100),
	email varchar(20) primary key
);

create table books_authors (
	book_isbn varchar(50) references book(isbn),
	author_email varchar(50) references author(email),
	primary key (book_isbn, author_email)
);

create table popular_books (
	book_title varchar(50),
	author_name varchar(50),
	number_sold integer,
	number_previewed integer,
	primary key (book_title, author_name)
);

 create table book_details (
 	id integer primary key,
	rating float,
	language varchar(10),
	keywords text,
	date_published date,
	isbn varchar(50) references book(isbn) unique
 );

create table chapter (
	id integer primary key,
	book_isbn varchar(50) references book(isbn),
	number integer,
	title varchar(50)
);

 create table page (
	id integer PRIMARY KEY,
	chapter_id integer references chapter(id),
	content text,
	header varchar(20),
	footer varchar(20)
 );




select 
	constraint_name, table_name, column_name
from
	information_schema.key_column_usage
where 
	table_name = 'books_details';
