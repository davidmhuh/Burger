CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
id int NOT NULL auto_increment,
burger_name VARCHAR(30) NOT NULL,
devoured BOOLEAN DEFAULT FALSE,
PRIMARY KEY(id)
);

DROP TABLE burgers;