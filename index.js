fs = require('fs');
inquirer = require('inquirer');

const { default: inquirer } = require('inquirer');
const {Circle, Square, Triangle} = require('./lib/shapes');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter a maximum of 3 characters',
        validate: (text) => {
            if(text.length <= 3) {
                return(true) 
            } else {return('Enter up to 3 letters')}
        }
    },
    {
        type: 'input',
        name: 'text',
        message: 'Enter a maximum of 3 characters'},
    {
        type: 'input',
        name: 'text',
        message: 'Enter a maximum of 3 characters'}
];

inquirer.prompt(questions).then((answers) => {
    
})