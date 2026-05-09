-- Write your PostgreSQL query statement below
select p.product_id,
    case 
        when sum(u.units) is null
        then 0
        else 
            round(sum(u.units*p.price)/sum(u.units)::numeric,2)
    end
    as average_price
from 
    prices p
left join 
    UnitsSold u
on 
    u.product_id = p.product_id
    and u.purchase_date between p.start_date and p.end_date
group by 
    p.product_id