-- session_33

select
	film_id,
	title,
	rental_rate
from 
	film
group by
	rental_rate,
	film_id 
having
	rental_rate = 2.99
order by 
	film_id asc;
	
select
	customer_id,
	first_name
from
	customer
where 
	first_name = 'Mary';

select
	title,
	release_year
from
	film
where 
	release_year = 2006
	

select
	length,
	title
from
	film
group by
	title,
	length
having
	length > 120;

select 
	rating,
	rental_rate
from
	film
group by
	rating,
	rental_rate


select 
	f.rating,
	f.rental_rate
from
	film as f
group by
	f.rating,
	f.rental_rate
having 
	rental_rate = 0.99,
	rating = 'PG';
	
