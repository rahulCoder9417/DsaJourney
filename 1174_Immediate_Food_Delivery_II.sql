-- Write your PostgreSQL query statement below
select Round(100.0*AVG(
    case 
    when order_date=customer_pref_delivery_date then 1
    else 0
    end

),2)as immediate_percentage from Delivery 
where (order_date,customer_id) in
(select Min(order_date) as order_date,customer_id  from Delivery
group by customer_id)