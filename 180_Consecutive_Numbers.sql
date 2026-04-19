select distinct num as ConsecutiveNums from (select num,lag(num) over(order by id) as prev1 ,lag(num,2) over(order by id) as prev2 from logs) t 
where num = prev1 and num = prev2