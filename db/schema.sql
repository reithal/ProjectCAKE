CREATE DATABASE gigs_db;
USE gigs_db;


CREATE TABLE employers(
    id int AUTO_INCREMENT,
    first_name VARCHAR(45),
    last_name  VARCHAR(45),
    email VARCHAR(45),
    phone int,
    PRIMARY KEY(id)
    );


CREATE TABLE applicants(
    id int AUTO_INCREMENT,
    first_name VARCHAR(45),
    last_name  VARCHAR(45),
    email VARCHAR(45),
    phone int,
    qualifiers TEXT,
    PRIMARY KEY(id)
   );


CREATE TABLE gigs(
    id int AUTO_INCREMENT,
    employer_id int NOT NULL,
    title TEXT,
    category VARCHAR(45),
    volunteer BOOLEAN NULL,
    pay BOOLEAN NULL,
    one_time_gig BOOLEAN NULL,
    street_address VARCHAR(45) NOT NULL,
    phone int,
    city VARCHAR(45)NOT NULL,
    state VARCHAR(45)NOT NULL,
    zipcode int NOT NULL,
    completion_date DATE NOT NULL,
    laboring_hours int,
    assigned_to_id int, 
    PRIMARY KEY(id)
   );