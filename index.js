    const inquirer = require("inquirer");
    const express = require("express");
    // Import and require mysql2
    const mysql = require('mysql2');
    const { exit } = require("process");
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
            "update an employee role",
            "Exit"]
        
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
    else if(startanswer.menu == "Exit"){
        console.log("Thank you for using employee tracker system");
        exit();
    }
        
    })
    }

    function viewalldepartments(){
        db.query("SELECT * FROM department",function(err,res){
            if(err) throw err;
            console.table(res);
            startquestions();
        })
        console.log("view all department");
    }
    function viewallroles(){
        db.query("SELECT * FROM arole", function(err,res){
            if(err) throw err;
            console.table(res);
            startquestions();
        })

        console.log("view all roles");
    }
    function viewallemployees(){
        db.query("SELECT * FROM employee", function(err, res) {
        if (err) throw err;
        console.table(res);
        startquestions();
        });
        console.log("view all employees");
    
    }

    function adddepartment(){
        console.log("add a department");
    return inquirer.prompt([{
            type: "input",
            message: "please add the department id: ",
            name: "id"
        },
        {
            type:"input",
            message:"Please enter the department name: ",
            name:"department"
        }])
        .then(res=> {
            db.query(`INSERT INTO department (id,department_name) VALUES("${res.id}","${res.department}")`,function(err,res){
                if(err) throw err;
                console.table(res);
                startquestions();
            })
        })
    }
    function addrole(){
        //id, title, department_id
        console.log("add a role");
        return inquirer.prompt([{
            type:"input",
            message:"Please add the role id",
            name:"id"
        },
    {
        type:"input",
        message:"Please enter the role title",
        name:"title"
        
    },
    {
        type:"input",
        message:"please enter the department id it belongs to:",
        name:"department_id"
    }])
    .then(res=>{
        db.query(`INSERT INTO arole(id, title, department_id)VALUES("${res.id}","${res.title}","${res.department_id}")`,function(err,res){
            if(err) throw err;
            console.log(res);
            startquestions();
        })
    })
    }
    function addemployee(){
        //id, first_name, last_name, role_id, manager_id
        console.log("add an employee");
        return inquirer.prompt([{
            type:"input",
            message:"Please add the employee id",
            name:"id"
        },
    {
        type:"input",
        message:"Please enter the employee first name",
        name:"first_name"
        
    },
    {
        type:"input",
        message:"please enter the employee last name:",
        name:"last_name"
    },
    {
        type:"input",
        message:"Please enter the role id:",
        name:"role_id"

    },
    {
        type:"input",
        message:"Please enter the manager id",
        name: "manager_id"
    }])
    .then(res=>{
        db.query(`INSERT INTO employee(id, first_name, last_name, role_id, manager_id)VALUES("${res.id}","${res.first_name}","${res.last_name}","${res.role_id}","${res.manager_id}")`,function(err,res){
            if(err) throw err;
            console.log(res);
            startquestions();
        })
    })
    }
    function updateemployeerole(){
        console.log("update an employee role");
    }



    app.use((req, res) => {
    res.status(404).end();
    });