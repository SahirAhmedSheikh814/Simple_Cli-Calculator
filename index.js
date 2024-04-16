#! /usr/bin/env node
import inquirer from "inquirer";
let loop = true;
while (loop) {
    let userInput = await inquirer.prompt([
        {
            type: "number",
            name: "num1",
            message: "Enter First Number"
        },
        {
            type: "number",
            name: "num2",
            message: "Enter Second Number"
        },
        {
            type: "list",
            name: "operator",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"],
            message: "Select the Operator"
        }
    ]);
    let num1 = userInput.num1;
    let num2 = userInput.num2;
    let operator = userInput.operator;
    console.log(num1, num2, operator);
    // now we use some conditions here
    if (num1 && num2) {
        if (operator === "Addition") {
            console.log(`\nThe answer of ${num1} + ${num2} = ${num1 + num2}`);
        }
        else if (operator === "Subtraction") {
            console.log(`\nThe answer of ${num1} - ${num2} = ${num1 - num2}`);
        }
        else if (operator === "Multiplication") {
            console.log(`\nThe answer of ${num1} * ${num2} = ${num1 * num2}`);
        }
        else if (operator === "Division") {
            console.log(`\nThe answer of ${num1} / ${num2} = ${num1 / num2}`);
        }
    }
    else {
        console.log(`Please Enter a Valid Number`);
    }
    let calculateMore = await inquirer.prompt({
        type: "confirm",
        name: "more",
        message: "Do you want more Calculations?",
        default: false
    });
    if (!calculateMore.more) {
        loop = false;
        console.log(`\nThankyou for Using My Calculator`);
    }
}
