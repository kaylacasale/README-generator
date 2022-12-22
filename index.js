// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')


// TODO: Create an array of questions for user input
const generateREADME = (answers) = ({ sections, title, installation, userStory, acceptanceCriteria, mockup }) =>

    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What sections would you like to include in your README file?',
                name: 'sections',
                choices: [
                    { title: 'Title', value: '#ff0000' },
                    { title: 'Installation', value: '#00f00' },
                    { title: 'User Story', value: '#0000ff' }
                ]
            }
        ])


// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
