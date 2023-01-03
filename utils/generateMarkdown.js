// TODO: Create a function that returns a license badge based on which license is passed in
//* map function to loop through each element in sections array for table of contents so sections are separate by line and not only by comma (along with other adjustments to each element)
//* starts at index=1 to skip display of table of contents as clickable value
var map = (arr, cb) => {
  //let contents;
  var result = [];
  for (var index = 1; index < arr.length; index++) {
    var currentElement = arr[index];
    result.push(cb(currentElement, index));
  }
  //console.log(result)
  return result
}
function renderTableOfContents(sections) {
  //console.log(sections)
  var spaces = map(sections, (elements) => {
    return '\n * ' + `[${elements}](#${elements})`
  })
  console.log(spaces)
  return spaces

}
function renderTitle(title) {
  let renderer = `#` + title
  return `#` + renderer
  // # title
  // # ${title}
  // # [${title}](#${title})`
}
// console.log(renderer)
//return renderer


// const color = ['lightblue', 'blue', 'orange']
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseWords = `
  ## License`

  console.log(license)
  if (!license) {
    return ''
  } else if (license == 'Apache_2.0' || license == 'BSD_3--Clause') { //blue
    const color = colors[0]
    const badge = `
    [![License](https://img.shields.io/badge/${license}-${color}.svg)]`
    console.log(badge)
    return badge
  } else if (license == 'Boost_1.0') { //light-blue
    const color = colors[1]
    const badge = `
    [![License](https://img.shields.io/badge/${license}-${color}.svg)]`
    console.log(badge)

    return badge
  } else if (license == 'BSD_2--Clause') { //orange
    const color = colors[2]
    const badge = `
    [![License](https://img.shields.io/badge/${license}-${color}.svg)]`
    console.log(badge)
    return badge
  } else if (license == 'EPL_1.0') {
    const color = colors[3]
    const badge = `
    [![License](https://img.shields.io/badge/${license}-${color}.svg)]`
    console.log(badge)
    return badge
  } else if (license == 'GPLv3') {
    let licenseShort = 'GPL v3'
    const color = colors[0]
    seeLicense(licenseShort, color)
    //return licenseShort
  } else if (license == 'GPL_v2') {
    let licenseShort = 'GPL v2'
    const color = colors[0]
    seeLicense(licenseShort, color)
    // return licenseShort
  }
  //console.log(this.licenseShort)
  const color = colors[0]
  const badge = `
    [![License: ${this.licenseShort}](https://img.shields.io/badge/License-${license}-${color}.svg)]`
  console.log(badge)
  return badge
  // return `
  // ## Licence

  // *Badges are often meaningful and productive - and boost the readability of your readme files. 😎 *

  // \n * + ${badge}`
}

function seeLicense(license, licenseShort, color) {
  console.log(licenseShort)

  const badge = `
    [![License: ${licenseShort}](https://img.shields.io/badge/License-${license}-${color}.svg)]`
  console.log(badge)
  return badge +
    `

    *Badges are often meaningful and productive - and boost the readability of your README files. 😎 *`


}



const colors = ['blue', 'lightblue', 'orange', 'red']

//* function to render title, but can just pass from index.js function to .then promise (i think?) since not manipulating title
function seeTitle(markTitle) {
  console.log(markTitle)
  return `
  # ` + markTitle

}
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
  // data = `${ process.argv[2] } `
  // const { tableOfContents, title, description, installation, usage } = answers

  //console.log(installation)


  //console.log(answers)

  // return `# ${ data.title }, ${ data.description }, ${ data.installation }
  //return `answers


  // `;
}

module.exports = {
  generateMarkdown,
  renderLicenseBadge,
  renderTableOfContents,
  renderTitle,
  seeLicense,
  seeTitle


}


  //console.log(spaces)
  //console.log(renderLicenseBadge())
  // var map = (arr, cb) => {
  //   //let contents;
  //   var result = [];
  //   for (var index = 0; index < contents.length; index++) {
  //     var currentElement = arr[index];
  //     result.push(cb(currentElement, index));
  //   }
  //   console.log(result)
  //   return result
  // }