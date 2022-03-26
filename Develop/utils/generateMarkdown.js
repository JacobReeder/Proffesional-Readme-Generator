const fs = require('fs');
const profileDataArgs = process.argv.slice(2, process.argv.length);
const [data] = profileDataArgs;

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// A function to generate markdown for README
const generateMarkdown = (data) => {
    return `
    Foobar is a Python library for dealing with word pluralization.

    ## Installation
    ${data}
     `;
};

console.log(generateMarkdown('README BITCH!'));

fs.writeFile('README.MD', generateMarkdown(data), err => {
    if (err) throw err;
  
    console.log('README complete! Check out README.MD to see the output!');
  });


/*module.exports = generateMarkdown;*/
