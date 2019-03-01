-- update actor set 
-- first_name='JAVIER',
-- last_name='SANESTEBAN GONZÁLEZ'
-- where actor_id=201;


-- INSERT INTO `sakila`.`film`
-- (`title`,
-- `description`,
-- `release_year`,
-- `language_id`,
-- `original_language_id`,
-- `rental_duration`,
-- `rental_rate`,
-- `length`,
-- `replacement_cost`,
-- `rating`,
-- `special_features`)
-- VALUES
-- ('Mi vida, mi condena',
-- 'Esto es una película que es un tostón de cojones y tal y cual',
-- 2019,
-- 1,
-- 3,
-- 5,
-- 5,
-- 120,
-- 100,
-- 'PG-13',
-- 'Deleted Scenes');

-- INSERT INTO film_actor(actor_id, film_id)
-- values(23, 1001),(201,1001),(3,1001)

-- insert into film_category (film_id, category_id)
-- values(1001, 11)
-- 

-- select film_id as FID, title as Título, release_year as 'Año Creación'
-- from film
-- where rental_rate<4.42
-- and film_id<300

-- select title, count(*) as cantidadActores, avg(length) as duracionmedia
-- from film as f
-- inner join film_actor as fa on f.film_id=fa.film_id
-- inner join actor as a on a.actor_id=fa.actor_id
-- group by title
-- having count(*)>6
-- order by cantidadActores, title;

-- select release_year, avg(length)
-- from film
-- group by release_year;

-- select title as Título, name as Categoría
-- from film as f
-- inner join film_category as fc on f.film_id= fc.film_id
-- inner join category c on fc.category_id= c.category_id;

