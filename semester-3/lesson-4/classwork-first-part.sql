-- select count(*) as 'Count of rows' from people
-- where quiz_points > 80;

-- select sum(age) as 'Count of rows' from people;
-- select avg(age) as 'Count of rows' from people;


-- SELECT city, state_code, avg(age) from people
-- -- group by 1
-- where city like 'B%'
-- group by city
-- order by 2
-- limit 10; 

SELECT city, state_code, avg(age), sum(quiz_points) as Total_points from people
group by city
HAVING Total_points > 100
order by 1; 