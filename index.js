const inquirer = require("inquirer");

const startquestions=()=> {
    // name, id, email, office
    return inquirer.prompt([
    {
        type:"list",
        name:"menu",
        message:"Please choose one of the options below: ",
        choices: ["view all departments",
        "view all roles",
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

startquestions();