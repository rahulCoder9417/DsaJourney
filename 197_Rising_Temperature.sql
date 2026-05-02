-- Write your PostgreSQL query statement below
SELECT today.id
FROM weather today
JOIN weather yesterday
ON today.recordDate = yesterday.recordDate + INTERVAL '1 day'
WHERE today.temperature > yesterday.temperature