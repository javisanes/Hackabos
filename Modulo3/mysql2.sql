-- 1a. Display the first and last names of all actors from the table actor.

-- select first_name as Nombre, last_name as Apellido
-- from actor as a;
-- 
-- 1b. Display the first and last name of each actor in a single column in LOWER case letters. Name the column Actor Name.

-- select LOWER(concat(first_name,' ', last_name)) as 'Actor Name'
-- from actor as a;

-- 2a. You need to find the ID number, first name, and last name of an actor, of whom you know only the first name, "Joe." 
--      What is one query would you use to obtain this information?

-- select actor_id as Identificación ,first_name as Nombre, last_name as Apellido
-- from actor as a
-- where first_name='Javier'

-- 2b. Find all actors whose last name contain the letters GEN:

-- select last_name as Apellido
-- from actor as a
-- where last_name like '%est%'

-- 2c. Find all actors whose last names contain the letters LI. This time, order the rows by last name and first name, in that order:

-- select last_name as Apellido, first_name Nombre
-- from actor as a
-- where last_name like '%est%'
-- order by last_name, first_name;

-- 2d. Using IN, display the country_id and country columns of the following countries: Afghanistan, Bangladesh, and China:

-- select country_id as 'ID País', country as País
-- from country
-- where country IN ('Afghanistan', 'Bangladesh', 'China')
-- 
-- 3a. Add a middle_name column to the table actor. Position it between first_name and last_name. Hint: you will need to specify the data type.

-- alter table actor add column middle_name varchar(50) null after first_name


-- 3b. You realize that some of these actors have tremendously long last names. 
--  Change the data type of the middle_name column to blobs.

-- alter table actor modify middle_name blob;


-- 3c. Now delete the middle_name column.

-- alter table actor drop middle_name;


-- 4a. List the last names of actors, as well as how many actors have that last name.

-- select last_name, COUNT(*) 
-- from actor
-- group by last_name
-- 

-- 4b. List last names of actors and the number of actors who have that last name, 
--     but only for names that are shared by at least two actors

-- select last_name, COUNT(*)
-- from actor
-- group by last_name
-- having COUNT(*)>1; 

-- 4c. Oh, no! The actor HARPO WILLIAMS was accidentally entered in the actor table as GROUCHO WILLIAMS, 
--     the name of Harpo's second cousin's husband's yoga teacher. Write a query to fix the record.

-- 
-- update actor set first_name = 'Harpo'
-- where first_name= 'Groucho' and last_name='Williams';

-- select * from actor where first_name = 'Harpo'
-- 

-- 4d. Perhaps we were too hasty in changing GROUCHO to HARPO. It turns out that GROUCHO was the correct 
-- name after all! 
-- In a single query, if the first name of the actor is currently HARPO, 
-- change it to GROUCHO. Otherwise, change the first name to MUCHO GROUCHO, as that is exactly what 
-- the actor will be with the grievous error. BE CAREFUL NOT TO CHANGE THE FIRST NAME OF EVERY ACTOR 
-- TO MUCHO GROUCHO, HOWEVER! 
-- (Hint: update the record using a unique identifier.)
 
-- 5a. You cannot locate the schema of the address table. Which query would you use to re-create it?

-- CREATE TABLE `address` (
--   `address_id` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
--   `address` varchar(50) NOT NULL,
--   `address2` varchar(50) DEFAULT NULL,
--   `district` varchar(20) NOT NULL,
--   `city_id` smallint(5) unsigned NOT NULL,
--   `postal_code` varchar(10) DEFAULT NULL,
--   `phone` varchar(20) NOT NULL,
--   `location` geometry NOT NULL,
--   `last_update` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
--   PRIMARY KEY (`address_id`),
--   KEY `idx_fk_city_id` (`city_id`),
--   SPATIAL KEY `idx_location` (`location`),
--   CONSTRAINT `fk_address_city` FOREIGN KEY (`city_id`) REFERENCES `city` (`city_id`) ON UPDATE CASCADE
-- ) ENGINE=InnoDB AUTO_INCREMENT=606 DEFAULT CHARSET=utf8;



-- 6a. Use JOIN to display the first and last names, as well as the address, of each staff member. Use the tables staff and address:

-- select first_name as Nombre, last_name as Apellido, a.address as Dirección
-- from staff as s
-- inner join address as a on a.address_id=s.address_id;


-- 6b. Use JOIN to display the total amount rung up by each staff member in August of 2005. Use tables staff and payment.

-- select first_name as Nombre, last_name as Apellido, sum(p.amount) as Cantidad
-- from staff as s
-- inner join payment as p on s.staff_id=p.staff_id and month(p.payment_date)=8 and year(p.payment_date)=2005
-- group by first_name, last_name;

-- 6c. List each film and the number of actors who are listed for that film. Use tables film_actor and film. Use inner join.

-- select title as Título, count(*) as 'Número Actores'
-- from film as f
-- inner join film_actor as fa on f.film_id=fa.film_id
-- group by title;


-- 6d. How many copies of the film Hunchback Impossible exist in the inventory system?

-- select f.film_id as FID, count(store_id) as Tienda
-- from inventory as i
-- inner join film as f on f.film_id=i.film_id
-- where title='Hunchback Impossible'
-- group by f.film_id;

-- 6e. Using the tables payment and customer and the JOIN command, list the total paid by each customer. 
--     List the customers alphabetically by last name:

-- SET  sql_mode = 'STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
-- select c.first_name as Nombre, c.last_name as Apellido, SUM(p.amount)
-- from payment as p
-- inner join customer as c on p.customer_id=c.customer_id
-- group by c.last_name
-- order by c.last_name;



-- 7a. The music of Queen and Kris Kristofferson have seen an unlikely resurgence. As an unintended consequence, 
--  films starting with the letters K and Q have also soared in popularity. Use subqueries to display the titles of
--  movies starting with the letters K and Q whose language is English.

-- select title as Título, language_id as Idioma
-- from film as f
-- where language_id = 1 and (title like 'K%' or title like 'Q%'); 

-- 7b. Use subqueries to display all actors who appear in the film Alone Trip.

-- select first_name as Nombre, last_name as Apellido
-- from actor as a
-- where a.actor_id 

-- 7c. You want to run an email marketing campaign in Canada, for which you will need the names and 
--     email addresses of all Canadian customers. 
--     Use joins to retrieve this information.

select c.email as Correo, c.first_name as Nombre, c.last_name as Apellido, district as Localización
from customer as c

-- 7d. Sales have been lagging among young families, and you wish to target all family movies for a promotion. 
--  Identify all movies categorized as famiy films.

-- 7e. Display the most frequently rented movies in descending order.

-- 7f. Write a query to display how much business, in dollars, each store brought in.

-- 7g. Write a query to display for each store its store ID, city, and country.

-- 7h. List the top five genres in gross revenue in descending order. 
-- (Hint: you may need to use the following tables: category, film_category, inventory, payment, and rental.)

-- 8a. In your new role as an executive, you would like to have an easy way of viewing 
--      the Top five genres by gross revenue. Use the solution from the problem above to create a view. 
--      If you haven't solved 7h, you can substitute another query to create a view.

-- 8b. How would you display the view that you created in 8a?

-- 8c. You find that you no longer need the view top_five_genres. Write a query to delete it.