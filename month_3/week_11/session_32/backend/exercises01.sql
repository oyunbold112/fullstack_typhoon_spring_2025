-- exercsises 01

select * from film;

select
	last_name,
	first_name
from actor;

select 
	title,
	release_year,
	rental_rate 
from film;

select
	first_name "First name",
	last_name "Last name"
from customer;

select 
	title "Movie Title",
	length "Duration(minutes)",
	rental_rate "Price"
from film;

select
	first_name "Actor First Name",
	last_name "Actor Last Name"
from actor;

select distinct
	rating 
from film;

select distinct
	release_year
from film; 

select distinct 
	rental_rate
from film;

select distinct 
	rating,
	release_year
from film;

select * from film
order by title asc;


select * from film
order by rental_rate desc;

select * from customer
order by last_name asc;

select * from customer
order by first_name asc;

select * from film
order by length desc;

select * from film
order by title asc;

select distinct 
	rating "film rating"
from film
order by rating asc;

select 
	first_name || '' || last_name "Full name"
from actor;

select
	title "kinonii ner",
	rental_rate "tureesiin une"
from
	film
order by
	rental_rate desc;


select distinct 
	email
from customer
order by email asc;

select
	title "kinonii ner",
	release_year "garsan on",
	rating "рэйтинг"
	from film
order by release_year asc, title asc;

select distinct
	rental_rate "tureesiin une",
	rating "рэйтинг"
from film
order by rental_rate asc, rating asc;

select distinct 
	last_name "Actor Surname"
from actor
order by last_name desc;