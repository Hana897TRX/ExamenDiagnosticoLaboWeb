CREATE DATABASE IF NOT EXISTS labodb;
USE labodb;

DROP TABLE IF EXISTS Person;
CREATE TABLE IF NOT EXISTS Person(
	id INT NOT NULL PRIMARY KEY auto_increment,
    personName VARCHAR(255) NOT NULL,
    gender VARCHAR(50) NOT NULL,
    email VARCHAR(255) NOT NULL,
    street VARCHAR(255) NOT NULL,
    streetNumber VARCHAR(100) NOT NULL,
    postalCode VARCHAR(100) NOT NULL,
    lada VARCHAR(10) NOT NULL,
    phoneNumber VARCHAR(50) NOT NULL
) ENGINE = InnoDB;

DROP TABLE IF EXISTS PhoneNumber;
CREATE TABLE IF NOT EXISTS PhoneNumber(
	id INT NOT NULL PRIMARY KEY auto_increment,
    personId INT NOT NULL,
    lada VARCHAR(10) NOT NULL,
    phoneNumber VARCHAR(50) NOT NUll,
    
    foreign key(personId) references Person(id)
) ENGINE = InnoDB;

SELECT * FROM Person;
SELECT * From PhoneNumber;