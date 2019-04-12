DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers(
    id INT NOT NULL auto_increment,
    burger_name VARCHAR(100) NOT NULL,
    devoured TINYINT(1) NOT NULL,
    PRIMARY KEY (id)
);