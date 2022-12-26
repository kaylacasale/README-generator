// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');

const generateMarkdown = require('./utils/generateMarkdown');


//* generate list items for table of contents
//* see if you could do choices/options for tableofContents
// TODO: Create an array of questions for user input
const generateREADME = (answers) = ({ tableOfContents, title, description, installation, usage, license, contributing, tests, questions }) =>
    `
    ## Table of Contents: ${tableOfContents}
    # Title: ${title}
    ## Description: ${description}
    ## Installation: ${installation}
    ## Usage: ${usage}`


//* inquirer.prompt takea an array of objects where each object is a question
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
            type: 'checkbox',
            message: 'What sections would you like to include in your README file?',
            name: 'sections',
            choices: ['Table of Contents', 'Title', 'Description', 'Installation', 'Usage', 'Licence', 'Contributing', 'Tests', 'Questions'],
        },
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
        // {
        //     type: 'input',
        //     message: 'What sections would you like to include in your README?',
        //     name: 'tableOfContents',
        // },
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
    //* answers will have a name property equal to whatever the user inputs
    .then((answers) => {
        const contentREADME = generateREADME(answers);

        // const fileName = `${answers.name.toLowerCase().split(' ').join('')}.json`;

        fs.writeFile('README.md', contentREADME, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md file!')) //title text = underined
        console.log(answers)
        console.log(`${answers.usage}`)
    })



// const writeFileAsync = generateMarkdown(writeToFile)
//console.log(`${process.argv[1]}`)
// .then((data) => {
//     const fileName = `${data.title.toLowerCase().split(' ').join(' ')}.json`

//     fs.writeToFile(fileName, JSON.stringify(data), (err) => {
//         err ? console.log(err) : console.log(data)
//     })
// })
// )


// fs.generateMarkdown(writeFileAsync, (err) =>
//     err ? console.log(err) : console.log(fileName))


// fs.writeFile('README.md', `${process.argv[2]}`, (error) =>
//     error ? console.error(error) : console.log(answers.title)
// )


// TODO: Create a function to write README file
function writeToFile(fileName, answers) {
    const data = inquirer.prompt(answers)
    console.log(data)
    fs.writeFile(answers, data, err =>
        err ? console.log(err) : console.log('Sucessfully writing file...')
    )




    fs.writeFile(fileName, data, err =>
        err ? console.log(err) : console.log('Sucessfully writing file...'))
    console.log(data)
    return data
}

//const writeFileAsync = util.promisify(writeToFile);




// fs.writeToFile(fileName, JSON.stringify(answers, null, '/t'), (err) =>
//     err ? console.log(err) : console.log('Successfully created README.md file!'))






// TODO: Create a function to initialize app
function init() {



}

// Function call to initialize app
init();
