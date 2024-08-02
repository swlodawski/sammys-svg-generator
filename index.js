const fs = require('fs');
const inquirer = require('inquirer');
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
        type: 'list',
        name: 'shape',
        message: 'Enter a maximum of 3 charactersPick a shape',
        choices: [Circle, Square, Triangle
        ]},
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a shape color'}
];

inquirer.prompt(questions).then((answers) => {
    let shape;

    if(answers.shape === 'circle') {
        shape = new Circle()
    }
    
    if(answers.shape === 'square') {
        shape = new Square()
    }
    
    if(answers.shape === 'triangle') {
        shape = new Triangle()
    }
    shape.setColor(answers.shapeColor)
})