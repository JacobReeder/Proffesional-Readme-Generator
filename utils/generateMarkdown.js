const MDgenerate = (answers) => {
  
  

    const {
        title,
        description,
        installation,
        usage,
        credits,
        contributions,
        tests,
        gitRepo,
        email

    } = answers;
    

    return `
    # ${title}

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
${contributions}

## Tests
${tests}

## Questions
<a href="https://github.com/${gitRepo}">My github</a> 
<br>
<a href="mailto:${email}"> My Email </a>
    `;
};



module.exports = { MDgenerate };

