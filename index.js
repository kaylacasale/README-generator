// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')

//* generate list items for table of contents
//* see if you could do choices/options for tableofContents
// TODO: Create an array of questions for user input
const generateREADME = (answers) = ({ title, description, tableOfContents, installation, usage, license, contributing, tests, questions }) =>
    `# Title: ${answers.title}
    ## Description: ${answers.description}
    ## Table of Contents: ${answers.tableOfContents}`

inquirer
    .prompt([
        // {
        //     type: 'input',
        //     message: 'What sections would you like to include in your README file?',
        //     name: 'sections',
        //     choices: [
        //         { title: 'Title', value: '#ff0000' },
        //         { title: 'Installation', value: '#00f00' },
        //         { title: 'User Story', value: '#0000ff' }
        //     ]
        // }
        {
            type: 'input',
            message: 'What would you like the title of your application to be?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'How would you describe your application?',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What sections would you like to include in your README?',
            name: 'tableOfContents',
        },
        {
            type: 'input',
            message: 'Describe how your application is installed.',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Describe how your application is used (e.g. directions).',
            name: 'usage',
        },


    ])
    .then((answers) => {
        const contentREADME = generateREADME(JSON.stringify(answers));

        fs.writeFile('README.md', contentREADME, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md file!')) //title text = underined
        console.log(answers)
    })

// TODO: Create a function to write README file
function writeToFile(fileName, answers) {

    // fs.writeToFile(fileName, JSON.stringify(answers, null, '/t'), (err) =>
    //     err ? console.log(err) : console.log('Successfully created README.md file!'))




}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
