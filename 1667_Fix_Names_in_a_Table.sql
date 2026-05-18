select user_id,    UPPER(LEFT(name, 1)) || LOWER(SUBSTRING(name FROM 2))   as name from Users 
order by user_id