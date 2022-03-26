//ADDED FROM MODULE PROJECT(keep in this order) //
//const inquirer = require('inquirer'); // Add descrip
//const fs = require('fs'); // The require statement is a built-in function that's globally available in Node.js. It allows the app.js file to access the fs module's functions through the fs assignment.
//const pageRead = require(''); // use this to define file path
//const [//questions input goes here?] =
//define 'fileName' and 'data'





/////////////////////////////////////////////////////////////////////////////////////////////////////////////

//SATURDAY: block out each code section and individually test code
  
////////////////////////////////////////////////////////////////////////////////////////////////////////////

//NOTES
//process.argv.slice(2, process.argv.length - 1);? It turns out .slice() returns everything from the first 
////zero-based index we provide as the first argument up to but not including the zero-based index 
//we provide as the second argument (9.1.5)

//when we use the const keyword instead of var to create a variable,
// we're locking down what that variable will be. Once we declare it, we can never reassign it. 

/////////////ARRAY EXAMPLE AND DESCRIP/////////////////////////////////////////////////////////////////

/*const animalArray = ['dog', 'cat', 'pig'];

animalArray.push('cow');

const personObj = {
  name: 'Lernantino',
  age: 99
};

personObj.age = 100;
personObj.occupation = 'Developer';
If we ran the preceding code, we wouldn't get an error, and the .push() method would work as expected. We could also add, edit, or remove properties from the personObj without an error. So what's the difference between this example and the previous one?

In the example with message and sum, we attempted to directly assign a brand-new value to the variables. In the second example, we didn't reassign the values of animalArray and personObj but rather edited the content inside those values.

The JavaScript engine sees those const variable values and just sees an array and an object. It has no idea what's going on between those square or curly brackets.

*/

//* Using function expression syntax
/*const addNums = function(numOne, numTwo) {
  return numOne + numTwo;
};

// Using new arrow function syntax
const addNums = (numOne, numTwo) => {
  return numOne + numTwo;
};*/
///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

// TODO: Create an array of questions for user input
//const questions = [
  
   //Edit credits section?
   //edit license sectiion?

   //ALSO
   //Create a new README?

   /*const questions = () => {
     
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
  });*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////


  
////////////////////////////////////////////////////////////////////////////////////////////////////////////


// TODO: Create a function to write README file ///Reference earlier in module 9 - lesson 2 and 3 -
//*function writeToFile(/*fileName,*/ data) { //equivalent of generatePage in 9.2.4
      
  //fs.writeToFile('./README.md', writeToFile, err => {
    // If there is any error in writing to the file, return
    //   if (err) throw new Error(err);
    //if (err) {
     // console.error(err)
    ///  return
    /*}
  
    // Log this message if the file was written to successfully
    console.log('wrote to file successfully')
  })
}

// TODO: Create a function to initialize app
//*function init() {}


// Function call to initialize app
//*init();
//*const pageRead = writeToFile();*/


