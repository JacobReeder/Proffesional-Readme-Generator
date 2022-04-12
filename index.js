
const fs = require('fs');
const inquirer = require('inquirer');
const { MDgenerate } = require('./utils/generateMarkdown');


////////// Questions Array /////////////////
///////////////////////////////////////////


const readMeQuestions = () => {
  return inquirer.prompt([
      {
          type: 'input',
          name: 'sample',
          message: 'Wlecome to the Readme generator.'
      }
           ]);
};

const questionsMD = (readmeData) => {
  console.log(`
      
      New README
      
  `);
console.log(readmeData);
  
  if (!readmeData.projects) {
      readmeData.projects = [];
  }
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
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.'
      },
      {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, if any, with links to their GitHub profiles.'
      },
      
    
     
    {
        type: 'input',
        name: 'contributions',
        message: 'List contributions, if any, to this project.',
        
    },
   
    {
        type: 'input',
        name: 'tests',
        message: 'Tests for the application.',
        
    },  
    {
        type: "input",
        name: 'github',
        message: "Include your github repository link."
    },
    {
        type: "input",
        name: "email",
        message: "Include your email address."
    }

    ]);

};

const writeFile = fileContent => {
 
return new Promise ((resolve, reject) => {
    
    fs.writeFile('./dist/README.md', fileContent, err => {
        if(err) {
            reject(err);
            return;
        }
        resolve({
            ok:true,
            message: 'README.MD ready!'
        });
    });
});
};


readMeQuestions()
  .then(questionsMD)
  .then(readmeData => {
      console.log("readmeData", readmeData);
  const readMe = MDgenerate(readmeData);
  console.log('Readme', readMe);
  return writeFile(readMe);
  })
   .catch(err => {
      console.log(err);
  });
   

  
  


