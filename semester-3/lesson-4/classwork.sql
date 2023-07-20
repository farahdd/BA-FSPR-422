-- select DISTINCT name from Country;

-- select DISTINCT name, continent from Country
-- where continent = 'Asia';
-- 
-- select DISTINCT name, continent, indepyear from Country
-- where indepyear > 1990
-- order by indepyear desc;


-- select DISTINCT name, continent, indepyear, population from Country
-- where (indepyear is not null) and (Population between 15000 and 24318000)
-- limit 10;

-- select name, 
-- 	CASE
-- 		when GovernmentForm = 'Republic' then 'Республика'
-- ernmentForm = 'Monarcy' then 'Монархия'
-- overnmentForm = 'Federal Republic' then 'Федерация'
-- ные виды правления'
-- равления'
-- ntry;

-- -- Aggregate funcs
-- select sum(Population) from Country;

-- select avg(LifeExpectancy) as 'среднее количество продолжения жизни' from Country;

--select max(LifeExpectancy) 'максимальное продолжения жизни', Continent from Country
--group by Continent;

--select name, Population from Country
--group by name order by Population desc


