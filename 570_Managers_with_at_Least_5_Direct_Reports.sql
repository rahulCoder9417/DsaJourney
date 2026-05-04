-- Write your PostgreSQL query statement below
with ab as(select managerId from Employee 
group by managerID
having count(managerId)>=5)
select e.name from Employee e
join ab a
on a.managerId = e.id