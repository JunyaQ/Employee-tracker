USE employeeTracker
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES 
(123456, "Junya", "Qiao", 1111, 234567);


INSERT INTO department(id, department_name)
VALUES
(1111, "web programming");


INSERT INTO arole(id, title, department_id)
VALUES
(12345, "junior worker", 1111);