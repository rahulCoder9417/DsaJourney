-- Write your PostgreSQL query statement below
select id,cnt as num from (
    select id ,count(id) as cnt
    from (
        select requester_id as id 
        from RequestAccepted
        union all
        select accepter_id as id
        from RequestAccepted
    )as all_requests
    group by id
)as request_counts order by cnt desc limit 1;