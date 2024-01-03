const mysql = require("mysql2");
const inquirer = require("inquirer");
require("console.table");

const sqlConnection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'employeeDatabase'
});

// assistance with setting up connection 
sqlConnection.connect(function (err) {
     if (err) throw err;
    console.log("connected as id" + sqlConnection.threadId); 
    mainMenu();
});

function mainMenu() {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'What would you like to do?',
                name:'Selection',
                choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role']
            }
        ])
        .then ((data) => {
            if(data.Selection === 'view all departments'){
                viewDeparments();
            }
            if(data.Selection === 'view all roles'){
                viewRoles();
            }
            if(data.Selection === 'view all employees'){
                viewEmployees();
            }
            if(data.Selection === 'add a department'){
                addDepartment();
            }
        })
};
function viewDeparments(){
    sqlConnection.query("select * from department", (err, data) => {
        console.table(data);
        mainMenu();
    })
};

function viewRoles (){
    sqlConnection.query("select * from roles", (err, data) => {
        console.table(data);
        mainMenu();
    })
};

function viewEmployees() {
    sqlConnection.query("select * from employee", (err, data) => {
        console.table(data);
        mainMenu();
    })
};
function addDepartment(){
    inquirer
        .prompt({
            type: 'input',
            message: 'enter new department name',
            name: 'DepartmentName'
        })
        .then(response => {
            sqlConnection.query(`INSERT INTO department(name)
            VALUES ("${response.DepartmentName}")`, err => {
                viewDeparments(); 
            })
        })
}

