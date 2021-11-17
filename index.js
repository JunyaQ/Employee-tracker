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
.then(startanswer=>{
 if(startanswer.menu == "view all departments"){
     console.log("view all departments");
 }
 else if(startanswer.menu == "view all roles"){
     console.log("view all roles");
 }
 else if(startanswer.menu == "add a department"){
     console.log("add a department");
 }
 else if(startanswer.menu == "add a role"){
     console.log("add a role");
 }
 else if(startanswer.menu =="add an employee"){
     console.log("add an employee");
 }
 else if(startanswer.menu =="updagte an employee role"){
     console.log("update an employee role");
 }
})
}
startquestions();