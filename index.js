const inquirer = require("inquirer");
const express = require("express");
// Import and require mysql2
const mysql = require('mysql2');
const PORT = process.env.PORT || 3001;

const app = express();
// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // {TODO: Add your MySQL password}
    password: 'junyaQ',
    database: 'employeeTracker',
  },
  console.log(`Connected to the database.`)
);


db.connect(() => {
    // Start start questions
    console.log("start with startquestions");
    startquestions();
});



const startquestions=()=> {
    // name, id, email, office
    return inquirer.prompt([
    {
        type:"list",
        name:"menu",
        message:"Please choose one of the options below: ",
        choices: ["view all departments",
        "view all roles",
        "view all employees",
        "add a department",
        "add a role",
        "add an employee",
        "update an employee role"]
    
    },

])
// based on option from the main menu
.then(startanswer=>{
 if(startanswer.menu == "view all departments"){
     viewalldepartments();
 }
 else if(startanswer.menu == "view all roles"){
     viewallroles();
 }
 else if (startanswer.menu=="view all employees"){
     viewallemployees();
 }
 else if(startanswer.menu == "add a department"){
    adddepartment();
 }
 else if(startanswer.menu == "add a role"){
     addrole();
 }
 else if(startanswer.menu =="add an employee"){
    addemployee();
 }
 else if(startanswer.menu =="updagte an employee role"){
     updateemployeerole();
 }
    
})
}

function viewalldepartments(){
    console.log("view all departments");
}
function viewallroles(){
    console.log("view all roles");
}
function viewallemployees(){
    const query = "SELECT * FROM employee";
    db.query(query, function(err, res) {
      if (err) throw err;
      console.table(res);
      startquestions();
    });
      console.log("view all employees");
   
}

function adddepartment(){

    console.log("add a department");
}
function addrole(){
    console.log("add a role");
}
function addemployee(){
    console.log("add an employee");
}
function updateemployeerole(){
    console.log("update an employee role");
}



app.use((req, res) => {
  res.status(404).end();
});