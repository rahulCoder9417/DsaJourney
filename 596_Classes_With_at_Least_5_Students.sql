-- Write your PostgreSQL query statement below
select class 
from Courses 
group by class
having Count(student)>4