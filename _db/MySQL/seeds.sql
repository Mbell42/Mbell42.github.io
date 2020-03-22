/* SQL Table Seeds */
USE employees_db;

/* INSERTS */
/* employee inserts */
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
    ("Matthew", "Bell", 1, 2);
    -- (),
    -- ();

/* role inserts */
INSERT INTO role (title, salary, department_id)
VALUES 
    ("Quality Assurance Specialist", 36000.00, 2);
    -- (),
    -- ();
/* department inserts */
INSERT INTO department (name)
VALUES 
    (Quality Assurance),
    (Design),
    (Art),
    (Development),
    (Production);

/* SELECTIONS */
/* Selections from tables */
 SELECT * FROM employee;
 SELECT * FROM employee_role;
 SELECT * FROM department;





