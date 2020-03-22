// DATABASE CLASSES

// const db_Connect = require('./_db/lib/db-connect');
import { dbConnect } from "./db-connect";

// Connect to database
// dbConnect();

// Create Employee class
class Employee {
    constructor(firstName, lastName, roleId, managerId) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.roleId = roleId;
        this.managerId = managerId;
    };
    viewEmployee() {
        console.log("Viewing Employee Roster...");
        dbConnect.query("SELECT * FROM employee", (err,res) => {
            if(err) throw(err);
            console.log(res);
        });
    };
    addEmployee(data) {
        dbConnect.query(`INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
        VALUES (${JSON.stringify(this.firstName)}, ${JSON.stringify(this.lastName)}, ${this.roleID}, ${this.managerID})`,
        (err) => {
            if(err) throw(err);
        })
        console.log(`${this.firstName} ${this.lastName} has been added successfully!`);
    };
    deleteEmployee(data) {
        dbConnect.query("DELETE FROM employee WHERE ?", {id: data.id },
        (err) => {
            if(err) throw(err);
        })
        console.log(`${this.firstName} ${this.lastName} has been removed successfully!`);
    };
    // updateEmployeeRole(data) {

    // };
};

class EmployeeRole {
    constructor(id, title, salary, departmentId) {
        this.id = id;
        this.title = title;
        this.salary = salary;
        this.departmentId = departmentId
    };
    viewRole() {
        console.log("Viewing Employee Roles...");
        dbConnect.query("SELECT * FROM role", (err,res) => {
            if(err) throw(err);
            console.log(res);
        });
    };
    addRole(data) {
        dbConnect.query(`INSERT INTO emlpoye_role (id, title, salary, department_id)
        VALUES (${this.id}, ${JSON.stringify(this.title)}, ${this.salary}, ${this.departmentId})`,
        (err) => {
            if(err) throw(err);
        })
        console.log(`${this.title} has been added to Roles!`);
    };
    deleteRole(data) {
        dbConnect.query("DELETE FROM employee WHERE ?", { id: data.id },
        (err) => {
            if(err) throw(err);
        })
    };
};

class Department {
    constructor(id, departmentName) {
        this.id = id;
        this.department_name = department_name;
    };
    viewDepartment() {

    };
    addDepartment() {

    };
    deleteDepartment() {

    };
};

// EXPORTS
export default {
    Employee,
    EmployeeRole,
    Department
};