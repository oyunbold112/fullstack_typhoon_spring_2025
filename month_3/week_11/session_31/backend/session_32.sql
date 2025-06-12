-- session 32

select * from actor;

-- city

select * from city;

-- country

select * from country;

-- filter where clause

select * from country where country = 'United States';

-- country id 93

select * from country where country_id = 93;

-- actor_id  5

select * from actor where actor_id = 5;

-- country id ni 93 city
select * from city where country_id = 93;

-- india hotuud

select * from city where country_id = 44;

-- JOIN


join country co 
on co.country_id = c.country_id;


select c.city, co.country from city c
join country co 
on co.country_id = c.country_id;

-- Examples 
create table basket_a (
	a INT primary key,
	fruit_a VARCHAR(100) not null
);

create table basket_b (
  	b INT primary key,
  	fruit_b VARCHAR(100) not null
);

insert into basket_a (a, fruit_a)
values
(1, 'Apple'),
(2, 'Orange'),
(3, 'Banana'),
(4, 'Cucumber');

insert into basket_b (b, fruit_b)
values 
(1, 'Orange'),
(2, 'Apple'),
(3, 'Watermelon'),
(4, 'Pear');

select * from basket_a ba;
select * from basket_b b;

-- join buyu inner join

select 
	a,
	fruit_a,
	b,
	fruit_b
from
	basket_a
inner join basket_b
 	on fruit_a = fruit_b

-- left join
select
	a,
	fruit_a,
	b,
	fruit_b
from
	basket_a
left join basket_b
	on fruit_a = fruit_b
	
-- left anti join
	
select
	a,
	fruit_a,
	b,
	fruit_b
from
	basket_a
left join basket_b
	on fruit_a = fruit_b
where b is null;

-- 
right join basket_b on fruit_a = fruit_b;


-- full outer join

select 
	a,
	fruit_a,
	b, 
	fruit_b
from
	basket_a
full outer join basket_b
 	on fruit_a = fruit_b;
 

select 
	a,
	fruit_a,
	b, 
	fruit_b
from
	basket_a
full join basket_b
 	on fruit_a = fruit_b
where a is null or b is null;
 

select * from customer
select * from payment
-- Exercises
-- customer id, ner bolon ovgiig tolson payment amount bolon heddeh odor tolson be gedgiig ni buh datag haruulsan queryg bichne uu


select
	c.customer_id,
	c.first_name,
	c.last_name,
	p.amount,
	p.payment_date
from
	customer c 
	inner join payment p on p.customer_id = c.customer_id 
order by
	p.customer_id asc

-- Exercises

select
	c.customer_id,
	c.first_name || '' || c.last_name customer_name,
	s.first_name || '' || s.last_name staff_name,
	p.amount,
	p.payment_date
from
	customer c
	inner join payment p using (customer_id)
	inner join staff s using(staff_id)
order by
	payment_date;


-- left join
-- film_id, film title, inventory_id-g ni haruulsan kinonii tile aar ni buurah
-- daraallaar haruulah query bichne uu.

select 
	i.inventory_id,
	i.film_id,
	f.title
from
	inventory i
	left join film f on i.film_id = f.film_id
order by
	i.inventory_id asc;

-- tuhain kino ni inventory_id ni null baigaa buh datag haruulna uu/ deerh shig
-- film_id, film title, inventory_id-g songoj haruulaarai
select 
	inventory.inventory_id,
	film.film_id,
	film.title
from
	film
	left join inventory using(film_id)
where inventory.inventory_id is null
order by
	film.title;
	
-- 