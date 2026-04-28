-- Write your PostgreSQL query statement below
select max(num) as num from (
    select num,count(*) from MyNumbers group by num having count(*)=1
) 