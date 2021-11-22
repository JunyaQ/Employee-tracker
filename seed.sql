USE employeeTracker

INSERT INTO department(id, department_name)
VALUES
(1111, "web programming"),
(2222,"management");


INSERT INTO arole(id, title, salary, department_id)
VALUES
(12345, "junior worker",20000.00, 1111);


INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES 
(123456, "Junya", "Qiao", 12345, 234567);




