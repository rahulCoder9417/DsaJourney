SELECT 
    query_name,
    ROUND(AVG(rating::decimal / position), 2) AS quality,
    ROUND(
        SUM(CASE WHEN rating < 3 THEN 1 ELSE 0 END)::decimal
        / COUNT(*) * 100,
        2
    ) AS poor_query_percentage
FROM Queries
GROUP BY query_name;