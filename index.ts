#! /usr/bin/env node 
import inquirer from "inquirer"
import chalk from "chalk"

const answer: {
    sentence: "string"
} = await inquirer.prompt([{
    name: "sentence",
    type: "input",
    message: "please enter sentence or paragraph we count down:"
}])
  
const word = answer.sentence.trim().split(" ")
console.log(chalk.bold.blue("\n \t Welcome to >===========================Word Counter===========================< \n"))
console.log(chalk.bold.bgBlueBright.yellow(`Your sentence word count is ${word.length}`))