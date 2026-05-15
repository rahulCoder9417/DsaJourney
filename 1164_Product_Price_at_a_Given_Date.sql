SELECT b.product_id, b.new_price as price
FROM (
    SELECT product_id, MAX(change_date) AS change_date
    FROM Products
    WHERE change_date <= '2019-08-16'
    GROUP BY product_id
) a
JOIN Products b
ON a.product_id = b.product_id 
AND a.change_date = b.change_date

UNION

SELECT product_id, 10 AS price
FROM Products
GROUP BY product_id
HAVING MIN(change_date) > '2019-08-16'

ORDER BY product_id;