const mysql = require("mysql");
const inquirer = require("inquirer");
require("console.table");

const sqlConnection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'yourPassword',
    database: 'employeeDatabase'
});

sqlConnection.connect(fucntion (err), {
    /* if (err) throw err;
    console.log("connected as id" + sqlConnection.threadId); */
    
});