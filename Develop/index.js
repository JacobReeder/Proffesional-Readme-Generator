//const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const { writeFile } = require('./util/generateMarkdown');

////////// Questions Array /////////////////
///Liscense section on 'generate Markdown//
const readMeQuestions = () => {   
     
    return inquirer.prompt([
      {
          type: 'input',
          name: '### Title',
          message: 'What is the title of your project? (Required)',
          validate: titleInput => {
              if (titleInput) {
                  return true;
              } else {
                  console.log('Please enter your project title!');
                  return false;
              }
          }
      },
      {
         type: 'input',
         name: '## Description',
         message: 'What is your README description?(Required)', 
         validate: descripInput => {
          if (descripInput) {
              return true;
          } else {
              console.log('Please enter your README description!');
              return false;
          }
      }
      }, 
       {
          type: 'input',   //////Needs to include functional links to other parts of the readme
          name: '## Contents',
          message: 'What will your Table of Contents be? (Required)',
          validate: (confirmContents) => {
              if (confirmContents) {
                  return true;
              } else {
                  console.log('Please enter your Table of Contents!');
                  return false;
              }
          }
        },
      {
         type: 'input',
         name: '## Installation',
         message: '(Required)', 
         validate: installInput => {
          if (installInput) {
              return true;
          } else {
              console.log('Please enter your Installation description!');
              return false;
          }
      } 
      },
       {
          type: 'input',
          name: '## Usage',
          message: 'What is the READMEs Usage?(Required)',
          validate: (confirmUsage) => {
              if (confirmUsage) {
                  return true;
              } else {
                  console.log('Please enter the READMEs Usage section');
                  return false;
              }
          }
        },
          {
            type: 'input',
            name: '## Contributions',
            message: '?(Required)',
            validate: (confirm) => {
                if (confirm) {
                    return true;
                } else {
                    console.log('Please enter the READMEs Usage section');
                    return false;
                }
            },
       
       
       
          }

    ]);
  };
  ///////Use this for the 'Questions?' section?
  /*const questionsSection = portfolioData => { /////To add a new project.
      if (!portfolioData.projects) {
      portfolioData.projects = [];
      }
      return inquirer.prompt([
        {
          type: 'input',
          name: '',
          message: ''
        },
        {
          type: 'input',
          name: '',
          message: ''
        },
        {
          type: 'checkbox',
          name: 'languages',
          message: 'What did you build this project with? (Check all that apply)',
          choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
          type: 'input',
          name: '',
          message: ''
        },
        {
          type: 'confirm',
          name: 'feature',
          message: 'Would you like to feature this project?',
          default: false
        },
        {
          type: 'confirm',
          name: 'confirmAddProject',
          message: 'Would you like to enter another project?',
          default: false
        }
  
       
      ]);
    };*/

  const profileDataArgs = process.argv.slice(2);

  if (profileDataArgs.length === 0) {

  readMeQuestions() /////code is refactored, needs to be tested
  .then(questionSection)
  .then(answers => {
    console.log(answers)
    return generatePage(answers);
  })
  .then(portfolioData => {
    return writeFile(portfolioData); ///generatePage returns CSS in original project. Use README template form instead. //
  })
  .catch(err => {   ////what would be the equivalent of generatePage for this project?
    console.log(err);  ///was originally pageHTML 
  });
  
} else if (( profileDataArgs.length > 0) && (profileDataArgs[0].toLowerCase() === "test") ) {
   console.log(generatePage())
};
  


