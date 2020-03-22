// Grabbing Dependencies

const inquirer = require("inquirer");
const mysql = require("mysql");
const db_Connect = require('./_db/lib/db-connect');
import Employee  from "./_db/lib/db-classes";
import EmployeeRole from "./_db/lib/db-classes";
import Department from "./_db/lib/db-classes";
import { dbConnect } from "./_db/lib/db-connect";

// When program is run
// Connect to database
dbConnect.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);        
    }
    console.log("connected to employees_DB successfully");
    initialize();
});

// FUNCTIONS
function initialize () {
    // Prompt user for which action to take
    inquirer.prompt({
        name: "menu",
        type: "rawlist",
        message: "What Would you like to do?",
        choices: [
            "View Employee Roster",
            "View Departments",
            "View Roles",
            "Add Employee",
            // "Update Employee Role",
            "EXIT"
        ]
    })
    // Based on which action user chooses, run the appropriate function
    //either viewing a table or affecting a table entry.
    .then(function(answer) {
        switch (answer.menu) {
            case "View Employee Roster":
                viewEmployee();
                break;
            case "View Roles":
                viewRole();
                break;
            case "View Departments":
                viewDepartment();
                break;
            case "Add Employee":
                addEmployee();
                break;
            case "Add Role":
                addRole();
                break;
            case "Add Department":
                addDepartment();
                break;   
            case "EXIT":
                dbConnect.end();
                break;                

        }
    })
}