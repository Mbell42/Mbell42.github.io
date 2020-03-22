// CREATE CONNECTION TO DATABASE

// Connect to database
const mysql = require('mysql');

const dbConnect = mysql.createConnection({
    // host
    host: "localHost",
    // port
    port: 4242,
    // name
    user: "root",
    // password
    password: "rootroot",
    database: employeeDB
});

// EXPORTS
exports.dbConnect = dbConnect;