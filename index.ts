#! /usr/bin/env node
import inquirer from "inquirer";

// Asking Question from User through Inquirer

let answers = await inquirer.prompt([
    {message: "Enter First Number" , type: "number", name:"firstNumber"},
    { message: "Enter Second Number", type: "number", name:"secondNumber"},
    {
        message: "Select one Operator to perform Operations",
        type: "list",
        name:"operator",
        choices:["Addition","Subtraction","Multiplication","Division"],
    },
]);
console.log(answers);

//Conditional Statement If-Else

if(answers.operator === "Addition"){
    console.log(answers.firstNumber + answers.secondNumber)
}

else if (answers.operator === "Subtraction"){
  
    console.log(answers.firstNumber - answers.secondNumber)
}
else if (answers.operator === "Multiplication"){
    console.log(answers.firstNumber * answers.secondNumber)
}

else if (answers.operator === "Division"){
    console.log(answers.firstNumber / answers.secondNumber)
}

else {
    console.log("Invalid Input")
}