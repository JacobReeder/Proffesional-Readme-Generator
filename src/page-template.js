const generateMD = (answers) => {

    const {
        title,
        description,
        installation,
        usage,
        credits,
        license,
        contributing,
        tests,
        gitRepo,
        email

    } = answers;
    

    return `
    # ${title}
${license}
## Description 
${description}
## Table of Contents (Optional)

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License/Badges](#license)
* [Contributing](#contributing)
* [Tests](#tests)

## Installation
${installation}

## Usage 
${usage}

## Credits
${credits}

## Contributing
${contributing}

## Tests
${tests}

## Questions
<a href="https://github.com/${gitRepo}">My github</a> 
<br>
<a href="mailto:${email}"> My Email </a>
    `;
};

module.exports = generateMD;