
const fs = require('fs');
const inquirer = require('inquirer');
const generateMD = require('./src/page-template');


////////// Questions Array /////////////////
///////////////////////////////////////////
const readMeQuestions = () => {   
     
    return inquirer.prompt([
      {
          type: 'input',
          name: 'Title',
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
         name: 'Description',
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
        type: 'input',
        name: 'Installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.'
      },
      {
        type: 'input',
        name: 'Usage',
        message: 'Provide instructions and examples for use.'
      },
      {
        type: 'input',
        name: 'Credits',
        message: 'List your collaborators, if any, with links to their GitHub profiles.'
      },
      {
        type: 'list',
        name: 'License',
        message: 'Let other developers know what they can and cannot do with your project.',
        choices: ['Apache', 'GNU', 'MIT'] 
    },
    
     
    {
        type: 'input',
        name: 'Contributions',
        message: 'List contributions, if any, to this project.',
        
    },
   
    {
        type: 'input',
        name: 'Tests',
        message: 'Tests for the application.',
        
    },  
    {
        type: "input",
        name: 'GitHub',
        message: "Include your github repository link."
    },
    {
        type: "input",
        name: "email",
        message: "Include your email address."
    }

    ]);
   
  };

  ///////////////////fs.writeFile/////////////////////////////////

    readMeQuestions()
.then(answers => {
    console.log(answers);
    const fileContent = generateMD(answers);
        fs.writeFile('./dist/readme.md', fileContent, err=>{
            if(err) throw new Error(err);
            console.log('Readme file created!');
        });
});


