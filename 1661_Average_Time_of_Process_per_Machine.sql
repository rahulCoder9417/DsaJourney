-- Write your PostgreSQL query statement below
SELECT 
    start_now.machine_id,
    ROUND(AVG(end_now.timestamp - start_now.timestamp)::numeric, 3) AS processing_time
FROM Activity start_now
JOIN Activity end_now
ON start_now.machine_id = end_now.machine_id
AND start_now.process_id = end_now.process_id
WHERE start_now.activity_type = 'start'
AND end_now.activity_type = 'end'
GROUP BY start_now.machine_id;