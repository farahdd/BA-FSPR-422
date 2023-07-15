-- select * from people;

-- select first_name, last_name, city from people;

-- select first_name 'Имя', last_name 'Фамилия' from people;

--select first_name 'Имя', last_name 'Фамилия', upper(city) as Город from people;

-- select DISTINCT state_code from people;
-- select state_code from people;

-- >, <, >=, <=, != или <>, =

-- select first_name, last_name, city, state_code from people
-- WHERE state_code = 'CA';
-- WHERE state_code <> 'CA';
-- WHERE state_code <> 'NY';

-- select first_name, last_name, city, state_code from people
-- where first_name like 'Jani_e';
-- where first_name like 'J%'; -- все что начинается на J
-- where first_name like '%an%'; -- имеется an
-- where first_name like '%an%e_';

-- select first_name, last_name, city, state_code, company from people
-- where company is NOT Null;
-- использование is обязательно для проверки null

-- select first_name, last_name, city, state_code, quiz_points from people
-- where quiz_points BETWEEN 95 and 100;
-- where first_name BETWEEN 'A' and 'D';
-- where quiz_points > 90 and quiz_points <= 100;
-- where first_name like 'A%' and last_name like 'W%' and (quiz_points = 96 or quiz_points = 92);

-- select first_name, last_name, city, state_code, age from people
-- where city = 'Los Angeles'
-- limit 5;

-- SELECT first_name, last_name, age,
-- CASE
	when age > 18 then 'You can drive now!'
	when age > 40 then 'Adult content'
	Else 'You are still a child!'
END as 'Response'
from people;

-- asc desc
select first_name, last_name, quiz_points from people
ORDER by quiz_points asc;
