DROP DATABASE IF EXISTS employeeTracker;
CREATE DATABASE employeeTracker;
USE employeeTracker;

CREATE TABLE employee(
    id INT NOT NULL AUTO_INCREMENT ,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    PRIMARY KEY(id)
);

CREATE TABLE department(
    id INT NOT NULL AUTO_INCREMENT,
    department_name VARCHAR(30),
    PRIMARY KEY(id)
);

CREATE TABLE arole(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30),
    department_id INT,
    PRIMARY KEY(id)
);

