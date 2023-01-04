// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

//console.log(generateMarkdown)
//console.log(generateMarkdown.renderLicenseBadge)

//* generate list items for table of contents
//* see if you could do choices/options for tableofContents
//* answers is the object that holds all the answers to the input questions
//* destructured object 'answers' so I could just refer to each answer by name (e.g. tableOfContents, title, etc.)

//* LICENSE: create a template
//const colors = ['lightblue', 'blue', 'orange']
//const color = []



// TODO: Create an array of questions for user input
const generateREADME = (answers) = ({ title, description, installation, usage, license, badges, contributing, tests, questions }) =>
    ``
// const generateREADME = (answers) = ({ tOc, title, description, installation, usage, license, badges, contributing, tests, questions }) =>
//     `
//     ## Table of Contents: ${tOc}

//     # Title: ${title}

//     ## Description: ${description}

//     ## Installation: ${installation}

//     ## Usage: ${usage}

//     ## License: ${license}

//     ## Badge: ${badges}`


//* inquirer.prompt takea an array of objects where each object is a question
inquirer
    // .confirm([
    //     {
    //         type: 'confirm',
    //         message: ' 🙋‍♀️ I think of a README like a recipe for a dish you are making at home. 🥞🔖 🍝🔖🔖. ' +
    //             'Good recipes allow you to gauge what ingredients you need, how much time you should spent, and give access to other sources or content with more information if desired.' +

    //             'And I believe the urgency that the universally given default name for JavaScript users -  README - elicits shows why these files should be quick and engaging!'

    //     },

    // ])
    .prompt([
        {
            type: 'checkbox',
            message: ' 🙋‍♀️ I think of a README like a recipe for a dish you are making at home. \n 🥞🔖 🍝🔖🔖. ' +
                'Good recipes allow you to gauge what ingredients you need, how much time you should spent, and give access to other sources or content with more information if desired.' +

                '\n And I believe the urgency that the universally given default name for JavaScript users -  **README** - elicits shows why these files should be quick and engaging!' +

                '\n Do you think you understand why READMEs are important?',
            name: 'about',
            choices: ['yes', 'no']

        },
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
        {
            type: 'input',
            message: 'The following question will prompt you to choose a Markdown license. This list includes the most common open source and open data licenses.' + '\n' +
                'Badges are emblems specific to README files that represent the license chosen, so users can see the selected license at first glance.' + '\n' +
                'Badges are often meaningful and productive - and boost the readability of your README files. 😎 ' + '\n' +
                'Press **Enter** to be directed to the following question where you will select an appropriate License for your project.',
            name: 'licenseContext'
        },
        {
            type: 'list',
            message: 'Choose a license for your application.',
            choices: ['Apache_2.0', 'Boost_1.0', 'BSD_3--Clause', 'BSD_2--Clause', 'EPL_1.0', 'GPLv3', 'GPL_v2'],
            name: 'license',
        },
        {
            type: 'input',
            message: 'Please provide contribution guidelines if application',
            name: 'contributing',
        },
        {
            type: 'input',
            message: 'Please describe any test instructions that apply to your project.',
            name: 'tests',
        },
        {
            type: 'input',
            message: 'Please enter your GitHub username.',
            name: 'gitHub',
        },
        {
            type: 'input',
            message: 'Please enter your desired email as contact information that will be displayed on your README file.',
            name: 'email',
        },



    ])

    //* answers will have a name property equal to whatever the user inputs

    .then((answers) => {
        console.log(answers.sections)
        // console.log(answers.title)
        //const contents = answers.sections
        //generateMarkdown.renderTableOfContents(contents)
        const tOc = generateMarkdown.renderTableOfContents(answers.sections)

        const badges = generateMarkdown.renderLicenseBadge(answers.license)

        // const seeBadge = generateMarkdown.seeLicense(answers.license)

        let contentREADME = generateREADME(answers);

        // const title = generateMarkdown.renderTitle(answers.title)

        const markTitle2 = generateMarkdown.seeTitle(answers.title)

        let badgeText = generateMarkdown.renderLicenseBadge(answers.license)
        console.log(badgeText)
        let color = generateMarkdown.findColor(answers.license)


        let badge = `
        [![License](https://img.shields.io/badge/License-${answers.license}-${color}.svg)](https://opensource.org/licenses/${badgeText})`
        console.log(badge)

        let badgeText2 = generateMarkdown.renderLicenseBadge2(answers.license)
        console.log(badgeText2, 'hey')
        let badge2 = `
        [![License: ${badgeText}](https://img.shields.io/badge/License-${answers.license}-${color}.svg)](https://www.gnu.org/licenses/${badgeText2})`
        console.log(badge2)

        let badgeText3 = generateMarkdown.renderLicenseBadge3(answers.license)
        console.log(badgeText3)
        let badge3 = `
        [![License](https://img.shields.io/badge/License-${answers.license}-${color}.svg)](${badgeText3})`
        console.log(badge3)
        // if (answers.title !== '') {
        //     contentREADME += `

        //     ## ${answers.title}`
        // }

        // contentREADME += `** 🙋‍♀️ I think of a README like a recipe for a dish you are making at home. 🥞🔖 🍝🔖🔖

        // Good recipes allow you to gauge what ingredients you need, how much time you should spent, and give access to other sources or content with more information if desired.

        // And I believe the urgency that the universally given default name for JavaScript users -  "README" - elicits shows why these files should be quick and engaging!`

        //* need to figure out how to correctly put ##Licrnse title with associated badge icon
        contentREADME += markTitle2;

        //* to add Table of Contents label and spaces before and after
        contentREADME += '\n' + `## Table of Contents` + '\n'
        // contentREADME += `#` + title;
        contentREADME += tOc;
        // contentREADME += '\n' + badges;
        // contentREADME += `\n## License` + badges
        // contentREADME += `
        // \n License` + badges
        // contentREADME += `
        // \n License` +
        //     seeBadge;
        contentREADME += '\n' + `## License` + '\n';

        // contentREADME += `
        // \n License` +
        //     seeBadge;
        //* if then statement to decide which link accepts values and adds to README content 
        if (answers.license == 'Apache_2.0' || answers.license == 'BSD_3--Clause' || answers.license == 'BSD_2--Clause' || answers.license == 'EPL_1.0') {
            contentREADME += `
        \n License` +
                badge;
        } else if (answers.license == 'GPLv3' || answers.license == 'GPL_v2') {
            contentREADME += `
        \n License` +
                badge2;

        } else if (answers.license == 'Boost_1.0') {
            contentREADME += `
            \n License` +
                badge3;
        }

        // contentREADME += `\n 
        // *Badges are often meaningful and productive - and boost the readability of your README files. 😎 * 
        // \n`;

        contentREADME += '\n' + `## Description
        ` +
            '\n';
        // contentREADME += '[Go to Description Section](#Description)'
        contentREADME += answers.description;


        contentREADME += '\n' + `## Installation
        ` +
            '\n';
        contentREADME += answers.installation;


        contentREADME += '\n' + `## Usage
        ` +
            '\n';
        contentREADME += answers.usage;


        contentREADME += '\n' + `## Contributions
        ` +
            '\n';
        contentREADME += answers.contributing;


        contentREADME += '\n' + `## Tests
        ` +
            '\n';
        contentREADME += answers.tests;
        // contentREADME += '\n' +
        //     seeBadge;
        // contentREADME += markTitle2;
        //contentREADME += `##License`

        // contentREADME += `

        // ## Badge
        // ` + badges
        //contentREADME += `${generateMarkdown.badge}`

        //console.log(answers.color)

        // if (answers.license == 'Apache_2.0') {
        //     console.log(colors[0])
        // }


        //* call Octokat function to pass value
        // getLicenseAPI(answers.license)

        generateMarkdown.renderTableOfContents(answers.sections);
        generateMarkdown.findColor(answers.license);

        // generateMarkdown.renderLicenseBadge(answers.license)
        generateMarkdown.renderLicenseBadge(answers.license)
        //generateMarkdown.seeLicense(answers.license)
        generateMarkdown.renderLicenseBadge2(answers.license)
        generateMarkdown.renderLicenseBadge3(answers.license)

        //* pass title input to seeTitle function in generateMarkdown.js
        generateMarkdown.seeTitle(answers.title)
        // console.log(generateMarkdown.renderLicenseBadge)
        //console.log(generateMarkdown.renderLicenseBadge(answers.license))
        // const badges = generateMarkdown.renderLicenseBadge(answers.license)
        console.log(tOc)
        console.log(badges)
        console.log(generateMarkdown.generateMarkdown.spaces)
        //generateMarkdown.chooseColor(answers.license)
        //* pass gitHub user input into function for fetching git API
        //* pass email user input into API fetch function to display value under Questions section
        getGitAPI(answers.gitHub, answers.email)


        // contentREADME += '\n'
        // contentREADME += answers.email



        // const fileName = `${answers.name.toLowerCase().split(' ').join('')}.json`;

        fs.writeFile('README.md', contentREADME, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md file!')) //title text = underined
        console.log(answers)
        console.log(`${answers.usage}`)
        console.log(badges)



    })


//* fetch GitHub user info using 'answer.gitHub' and 'answer.email' input passed from promise above and use to display GitHub info under Questions section in README file

function getGitAPI(gitHub, email) {
    var requestAPI = `https://api.github.com/users/${gitHub}`
    let gitHubContent = ``
    // let gitHubContent = (data) = ({ gitHubURL }) => `
    // GitHub URL: ${gitHubURL}`

    fetch(requestAPI)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data)
            console.log(data.html_url)

            console.log(data.avatar_url)

            gitHubContent += '\n' + `## Questions
            ` +
                '\n';

            const gitHubURL = data.html_url
            gitHubContent += '**GitHub URL:** ' + gitHubURL

            gitHubContent += '\n' +
                '\n';
            gitHubContent += '**Email:** ' + email
            //const id = data.id

            //* finally figured out how to incorporate the avatar into the README file :)
            //* as of this year, you can fetch from the index.js file
            const gitHubAvatar = `![Screenshot](${data.avatar_url})`
            console.log(gitHubAvatar)
            gitHubContent += '\n' +
                '\n'
            gitHubContent += '**My Avatar:**' + '\n'
            gitHubContent += gitHubAvatar


            // let gitHubContent = (data) = ({ gitHubURL }) => `
            // GitHub URL: ${gitHubURL}`
            console.log(gitHubContent)

            gitHubContent += '\n' +
                '\n'

            gitHubContent += '\n' + `## Tutorial` + '\n'

            gitHubContent += ('https://drive.google.com/file/d/1Tf3gtrHdXYZnseZlDLZct2naHEC2kHUO/view')

            gitHubContent += '\n' +
                '\n'

            // gitHubContent += `![alt text]('README-generator/Mockup.mp4')`

            fs.appendFile('README.md', gitHubContent, (err) =>
                err ? console.log(err) : console.log('Successfully authorized and added GitHub info!'))

        })


}
// const writeFileAsync = generateMarkdown(writeToFile)
//console.log(`${process.argv[1]}`)
// .then((data) => {
//     const fileName = `${data.title.toLowerCase().split(' ').join(' ')}.json`

//     fs.writeToFile(fileName, JSON.stringify(data), (err) => {
//         err ? console.log(err) : console.log(data)
//     })
// })
// )
//* installed Octokit/core from URL (https://github.com/octokit/core.js#readme) by  entering 'npm install @octokit/core' in the command-line

// function getLicenseAPI(license) {
//     var requestAPI = ``

//     fetch(requestAPI)
//         .then(function (response) {
//             return response.json()
//         })
//         .then(function (data) {
//             console.log(data)
//         })
// }
// Octokit.js
// https://github.com/octokit/core.js#readme
// const octokit = new Octokit({
//     auth: 'YOUR-TOKEN'
// })

// fs.generateMarkdown(writeFileAsync, (err) =>
//     err ? console.log(err) : console.log(fileName))


// fs.writeFile('README.md', `${process.argv[2]}`, (error) =>
//     error ? console.error(error) : console.log(answers.title)
// )


// TODO: Create a function to write README file
// function writeToFile(fileName, answers) {
//     //const answers = inquirer.prompt(answers)
//     console.log(data)

//     fs.writeToFile(answers, data, err =>
//         err ? console.log(err) : console.log('Sucessfully writing file...')
//     )




//     fs.writeFile(fileName, data, err =>
//         err ? console.log(err) : console.log('Sucessfully writing file...'))
//     console.log(data)
//     const markdown = generateMarkdown(answers)
//     // return data
// }
// //const write = generateMarkdown(writeToFile)
// const writeFileAsync = generateMarkdown.promisify(writeToFile);




// fs.writeToFile(fileName, JSON.stringify(answers, null, '/t'), (err) =>
//     err ? console.log(err) : console.log('Successfully created README.md file!'))






// TODO: Create a function to initialize app
function init() {



}

// Function call to initialize app
init();
