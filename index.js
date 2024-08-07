    const fs = require('fs');
    // Pulling in file system from node.
    const inquirer = require('inquirer');
      // Pulling in inquirer npm.
    const {Circle, Square, Triangle} = require('./lib/shapes');
      // Pulling in the shapes js file from the lib directory

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
// Set the questions to allow a user to select the characters in the shape, it's color and type.
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
// Takes the user input and compares it to the class objects to then create the new svg shape itself and passes in the color.

    const svgFile = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shape.render()}
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
</svg>`
// Setting the link to generate the svg file.
    fs.writeFile('SVG-Generator.svg', svgFile, (err) => {
        if(err) throw err;
        console.log('File created successfully.');
// Taking the input and writing a svg file with it and logging success message.
    });
})
