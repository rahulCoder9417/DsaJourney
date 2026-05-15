-- Write your PostgreSQL query statement below
select *,
    CASE
        WHEN (x + y + z) - GREATEST(x, y, z) > GREATEST(x, y, z) THEN 'Yes'
        ELSE 'No'
    END AS triangle
from triangle
