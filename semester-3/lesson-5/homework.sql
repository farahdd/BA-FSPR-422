create table restaurant (
	id varchar(20) primary key,
	motto varchar(50),
	address varchar(50) unique,
	phone varchar(20),
--	hours varchar(50),
	rating decimal,
	maps_link varchar(100)
	
);

create table working_hours (
	restaurant_id varchar(20) references restaurant(id),
	days varchar(50),
	time_start time,
	time_end time
);


create table reviews (
	id integer primary key,
	restaurant_id varchar(20) references restaurant(id),
	rating decimal,
	comment text,
	date date
);

create table menu (
	menu_id integer primary key,
	restaurant_id varchar(20) references restaurant(id) unique
);

create table category (
	id varchar(3) primary key,
	name varchar(20),
	description varchar(100),
	menu_id integer references menu(menu_id)
);

create table course (
	id integer primary key,
	name varchar(20),
	price money,
	course_desc varchar(50)
);

create table course_category (
	course_id integer references course(id),
	category_id varchar(3) references category(id),
	primary key (course_id, category_id)
);