// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license === "Zilb") {
    return `[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)`

  } else if (license === "The Artistic License 2.0") {
    return `[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`

  } else if (license === "Eclipse Public License 1.0") {
    return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`

  } else if (license === "The Perl License") {
    return `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`

  } else if (license !== "none") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    return `\n* [License](#license)\n`;
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return `
    ## License
      Using the ${license} license.
      `;
  }
  return "";
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

${renderLicenseBadge(data.license)}

## Table of Contents
* [Description](#projectDescription)
* [Installation](#installationInstructions)
* [Usage](#usageInformation)
* [Contact-Me](#contact-me)
* [Credits](#creditHelp)
* [Features](#features)
* [Contributors](#contributionGuidelines)
* [test](#testInstructions)

## Project Description
${data.projectDescription}

## Installation Instructions
${data.installationInstructions}

## Usage Information
${data.usageInformation}

## Contact-me
* Name - ${data.fullName}
* Email - ${data.emailAddress}
* GitHub - [${data.githubName}](https://github.com/${data.githubName}/)

## Credits
${data.creditHelp}

## Features
${data.features}

## Contributors
${data.contributorGuidelines}

## Test
${data.testInstructions}


${renderLicenseSection(data.license)}
`;
}


module.exports = generateMarkdown;
