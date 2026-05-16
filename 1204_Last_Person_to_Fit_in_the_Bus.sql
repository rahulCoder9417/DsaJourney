-- Write your PostgreSQL query statement below
select person_name
from (select person_name,sum(weight) over(order by turn) as w
from Queue)
where w<=1000
order by w desc
limit 1
