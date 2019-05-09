### Schema

CREATE DATABASE nowYouareCookin_db;
USE nowYouareCookin_db;

CREATE TABLE recipes (
	id int NOT NULL AUTO_INCREMENT,
	recipe_name varchar(100) NOT NULL,
	PRIMARY KEY (id)
);
CREATE TABLE ratings (
	id int NOT NULL AUTO_INCREMENT,
	recipe_name varchar(100) NOT NULL,
	rating INTEGER(10) NOT NULL,
	PRIMARY KEY (id)
);
select * from recipes;
select * from ratings;

