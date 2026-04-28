SELECT ROUND(SUM(i.tiv_2016)::numeric, 2) AS tiv_2016
FROM Insurance i
JOIN (
    SELECT lat, lon
    FROM Insurance
    GROUP BY lat, lon
    HAVING COUNT(*) = 1
) t
ON i.lat = t.lat AND i.lon = t.lon
WHERE i.tiv_2015 IN (
    SELECT tiv_2015
    FROM Insurance
    GROUP BY tiv_2015
    HAVING COUNT(*) > 1
);