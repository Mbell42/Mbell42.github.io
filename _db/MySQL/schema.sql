/* SQL Table Schema */

/* For SQLworkbench 8 users */
/* ALTER USER 'root'@'localHost' IDENTIFIED WITH mysql_native_password BY 'root'; */

/* Create database */
DROP DATABASE IF EXISTS employeesDB;

CREATE DATABASE employeesDB;

USE employeesDB;

/* Create tables */
/* Create employee table */
CREATE TABLE employee (
    id INT AUTO_INCREMENT = ,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT NULL,
    PRIMARY KEY (id)
);
/* Create role table */
CREATE TABLE employe_role (
    id INT PRIARY KEY,
    job_title VARCHAR(50) NOT NULL,
    department_id INT NOT NULL,
    salary DECIMAL(10,2) NULL
    
);


/* Create department table */
CREATE TABLE department (
    id INT PRIMARY KEY,
    department_name VARCHAR(50) NOT NULL
);

/* SELECTIONS */
/* Selections from tables */
 SELECT * FROM employee;
 SELECT * FROM employee_role;
 SELECT * FROM department;