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
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES 
(123456, "Junya", "Qiao", 1111, 234567),


INSERT INTO department(id, department_name)
VALUES
(1111, "web programming"),


INSERT INTO arole(id, title, department_id)
VALUES
(12345, "junior worker", 1111),
