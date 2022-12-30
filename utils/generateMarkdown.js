// TODO: Create a function that returns a license badge based on which license is passed in

// const color = ['lightblue', 'blue', 'orange']
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  console.log(license)
  if (!license) {
    return ''
  } else if (license == 'Apache_2.0' || license == 'BSD_3--Clause') { //blue
    const color = colors[0]
    const badge = `[![License](https://img.shields.io/badge/${license}-${color}.svg)]`
    console.log(badge)
    return badge
  } else if (license == 'Boost_1.0') { //light-blue
    const color = colors[1]
    const badge = `[![License](https://img.shields.io/badge/${license}-${color}.svg)]`
    console.log(badge)

    return badge
  } else if (license == 'BSD_2--Clause') { //orange
    const color = colors[2]
    const badge = `[![License](https://img.shields.io/badge/${license}-${color}.svg)]`
    console.log(badge)
    return badge
  } else if (license == 'EPL_1.0') {
    const color = colors[3]
    const badge = `[![License](https://img.shields.io/badge/${license}-${color}.svg)]`
    console.log(badge)
    return badge
  } else if (license == 'GPLv3') {
    const licenseShort = 'GPL v2'
    const color = colors[0]
    const badge = `[![License: ${licenseShort}](https://img.shields.io/badge/License-${license}-${color}.svg)]`
    console.log(badge)
    return badge
  }

}

const colors = ['blue', 'lightblue', 'orange', 'red']
// function chooseColor(license) {
//   // console.log(license)
//   if (license == 'Apache_2.0') {
//     console.log(colors[0])
//     const color = colors[0]

//     return color
//   }


// }

// TODO: Create a function that returns the license link


// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  // data = inquirer.prompt(answers)
  // data = `${process.argv[2]}`
  const { tableOfContents, title, description, installation, usage } = answers

  console.log(installation)


  console.log(answers)

  // return `# ${data.title}, ${data.description}, ${data.installation}
  return `answers


    `;
}

module.exports = {
  generateMarkdown,
  renderLicenseBadge,

}
