-- Write your PostgreSQL query statement below
select e.employee_id, e.name, j.reports_count ,j.average_age
from Employees e
join (
    select reports_to as employee_id ,
count(*) as reports_count,
Round(Avg(age)) as average_age
from Employees 
group by reports_to
having reports_to is not Null
) j
on e.employee_id = j.employee_id
order by e.employee_id