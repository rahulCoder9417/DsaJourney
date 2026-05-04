-- Write your PostgreSQL query statement below
select e.name,b.bonus  
from Employee e
left join Bonus b
on e.empID = b.empID
where b.bonus IS NULL OR b.bonus < 1000; 