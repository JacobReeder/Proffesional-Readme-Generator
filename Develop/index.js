//ADDED FROM MODULE PROJECT(keep in this order) //
//const inquirer = require('inquirer'); // Add descrip
//const fs = require('fs'); // Add descrip
//const generatePage = require(''); // Add descrip



// TODO: Create an array of questions for user input
//const questions = [
   // What is the title of your project? DONE
   //Edit title?
   //Does your README have a descrption? DONE
   //Edit Descrption?
   //Does your README have a table of contents? DONE
   //Edit table of contents?
   //Edit installation description? DONE
   //Edit usage section? DONE
   //Edit credits section?
   //edit license sectiion?

   //ALSO
   //Create a new README?

   /*const promptUser = () => {
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
          message: 'What is the README's Usage?(Required)',
          validate: ({confirmUsage}) => {
              if (confirmUsage) {
                  return true;
              } else {
                  console.log('Please enter the README's Usage section');
                  return false;
              }
          }
    ]);
  };
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  EXTRA CODE TO WORK WITH ----
  /*
  const promptProject = portfolioData => { /////To add a new project.
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
          name: 'name',
          message: 'What is the name of your project?'
        },
        {
          type: 'input',
          name: 'description',
          message: 'Provide a description of the project (Required)'
        },
        {
          type: 'checkbox',
          name: 'languages',
          message: 'What did you build this project with? (Check all that apply)',
          choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
          type: 'input',
          name: 'link',
          message: 'Enter the GitHub link to your project. (Required)'
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
  
    promptUser()
    .then(promptProject)
    .then(portfolioData => {
      const pageHTML = generatePage();
  
      // fs.writeFile('./index.html', pageHTML, err => {
      //   if (err) throw new Error(err);
  
      //   console.log('Page created! Check out index.html in this directory to see it!');
      // });
    });
  
  
    /*promptUser()
    .then(answers => console.log(answers))
    .then(promptProject)
    .then(projectAnswers => console.log(projectAnswers))
    .then(projectData => {
      portfolioData.projects.push(projectData);
      if (projectData.confirmAddProject) {
          return promptProject(portfolioData);
        } else {
          return portfolioData;
        }
  });*/
//];

///////////////////////////////////////////////////

/*NOTES ------

  // fs.writeFile('./index.html', pageHTML, err => { ///////////Reasearch fs.write --can it also write README's?


  Try this code block --
  const fs = require('fs')

fs.writeFile('README.md', 'Hello World', (err) => {
	// If there is any error in writing to the file, return
	if (err) {
		console.error(err)
		return
	}

	// Log this message if the file was written to successfully
	console.log('wrote to file successfully')
})
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      //   if (err) throw new Error(err);
  
      //   console.log('Page created! Check out index.html in this directory to see it!');
      // });
    });

// TODO: Create a function to write README file ///Reference earlier in module 9 - lesson 2 and 3 -
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();*/
