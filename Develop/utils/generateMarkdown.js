// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let table = ``;
  Object.entries(data).forEach(x =>{
    table += `- [${x[0]}](#${x[0]}) \n`;
  })


  return `
# README.md Project generator  

## Table of content
${table}
<a name="username"></a>
## User name
${data.username}
<a name="email"></a>
## User email
${data.email}
## Project Name
${data.title}
## Description of the project
${data.description}
## Type of licence required for the running the project
${data.license}
## To Install the application on your device, please run the below command 
${data.installation}
## To run testing on the applicaiton please run the below command 
${data.tests}
## Points to note before using the application 
${data.information}
  ## Important information that users need to be aware off before contributing to code 
${data.contributors}
  ## for any Questions or suggestions, please contact ${data.username} @ ${data.email}`
   ; 
}

module.exports = generateMarkdown;
