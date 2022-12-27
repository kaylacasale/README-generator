// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license)
  if (!license) {
    return ''
  } else {
    const badge = `[![License](https://img.shields.io/badge/${license}-lightblue.svg)]`
    console.log(badge)
  } return badge

}

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
  renderLicenseBadge
}
