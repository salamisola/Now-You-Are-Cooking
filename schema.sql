-- Drops the blogger if it exists currently --
DROP DATABASE IF EXISTS cooking_db;
-- Creates the "blogger" database --
CREATE DATABASE cooking_db;

-- select u.name, r.recipeId, r.rating_ease, rec.title from Users u join Ratings r on
-- u.id = r.userId join Recipes rec on rec.id = r.recipeId;