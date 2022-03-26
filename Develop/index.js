//ADDED FROM MODULE PROJECT(keep in this order) //
const inquirer = require('inquirer'); // Add descrip
const fs = require('fs'); // Add descrip
const pageRead = require(''); // Add descrip // should this be defined as pageRead instead?






/////////////////////////////////////////////////////////////////////////////////////////////////////////////

//SATURDAY: block out each code section and individually test code
  
////////////////////////////////////////////////////////////////////////////////////////////////////////////


// TODO: Create an array of questions for user input
//const questions = [
  
   //Edit credits section?
   //edit license sectiion?

   //ALSO
   //Create a new README?

   const questions = () => {
    return inquirer.prompt([
      {
          type: 'input',
          name: 'title',
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
         name: 'description',
         message: 'What if your README description?(Required)', 
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
          type: 'input',
          name: 'Contents',
          message: 'What will your Table of Contents be? (Required)',
          validate: ({confirmContents}) => {
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
         name: 'installation',
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
          name: 'usage',
          message: 'What is the READMEs Usage?(Required)',
          validate: ({confirmUsage}) => {
              if (confirmUsage) {
                  return true;
              } else {
                  console.log('Please enter the READMEs Usage section');
                  return false;
              }
          }
        }
    ]);
  };
  
  const newProject = portfolioData => { /////To add a new project.
      if (!portfolioData.projects) {
      portfolioData.projects = [];
      }
      console.log(`
    =================
    Add a New Project
    =================
    `);
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
    };
  
    questions()
    .then(newProject)
    .then(projectData => {
      portfolioData.projects.push(projectData);
      if (projectData.confirmAddProject) {
          return promptProject(portfolioData);
        } else {
          return portfolioData;
        }
  });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////


  
////////////////////////////////////////////////////////////////////////////////////////////////////////////


// TODO: Create a function to write README file ///Reference earlier in module 9 - lesson 2 and 3 -
function writeToFile(fileName, data) {

  fs.writeFile('./README.md', pageRead, err => {
    // If there is any error in writing to the file, return
    //   if (err) throw new Error(err);
    if (err) {
      console.error(err)
      return
    }
  
    // Log this message if the file was written to successfully
    console.log('wrote to file successfully')
  })
}

// TODO: Create a function to initialize app
function init() {}


// Function call to initialize app
init();
const pageRead = writeToFile();
