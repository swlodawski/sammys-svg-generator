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
                } else {return'Enter up to 3 letters'}
            }
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter a text color'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Select a shape',
            choices: ['circle', 'square', 'triangle'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter a shape color'},
    ];

    inquirer
    .prompt(questions)
    .then((answers) => {
        let shape;

        if(answers.shape === 'circle') {
            shape = new Circle();
        }
    
        if(answers.shape === 'square') {
            shape = new Square();
        }
    
        if(answers.shape === 'triangle') {
            shape = new Triangle();
        }
        shape.setColor(answers.shapeColor);

    const svgFile = `<svg-version="1.1" height="200" width="300" xmlns="http://www.w3.org/2000/svg"> ${shape.render()} <text x="150" y="125" fonst-size="60" text-anchor="middle" fill=${answers.textColor}">${answers.text}</text></svg>`;

    fs.writeFile('SVG-Generator.svg', svgFile, (err) => {
        if(err) throw err;
        console.log('File created successfully.');

    });
});
