


const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown  =  require('./utils/generateMarkdown');


var pattern = /[^a-zA-Z0-9]+/g;


const questions = [ 
  {
    type: 'input',
    name: 'username',
    message: "Enter your username: ",
  },
  {
    type: 'input',
    name: 'email',
    message: "Enter your email: ",
  },
  {
    type: 'input',
    name: 'title',
    message: "What's the name of the project?",
    validate(value) {
      const pass = value.match(pattern);
      if (!pass) {
        return true;
      }

      return 'Please enter a valid project name!';
    },
  }, {
    type: 'input',
    name: 'description',
    message: "Write a short description of your project?",
  },
  {
        type: 'list',
        name: 'licence',
        message: 'What kind of Licence the project requires?',
        choices: ['MIT', 'APACHE 2.0' ,'GPL 3.0' , 'BDS 3' , 'Open Source Software Licence' ,'PDL' , 'Proprietary Licence', 'User Licensing', 'None' ],
        when(answers) {
          return answers.licence !== 'Nope, all good!';
        },
      },
      {
        type: 'input',
        name: 'installation',
        message: "What commands should be run  to install dependancies?",
      },
      {
        type: 'input',
        name: 'tests',
        message: "What commands should be run  to run tests?",
      },
      {
        type: 'input',
        name: 'information',
        message: "What does the user need to know about using the repository?",
      },
 
      {
        type: 'input',
        name: 'contributors',
        message: "What does the user need to know about contributing to the repository?",
      },
      {
        type: 'list',
        name: 'confirm',
        message: 'Generate README file: ',
        choices: ['Yes', 'No'],
      },


//   {
//     type: 'list',
//     name: 'size',
//     message: 'What size do you need?',
//     choices: ['Large', 'Medium', 'Small'],
//     filter(val) {
//       return val.toLowerCase();
//     },
//   },
//   {
//     type: 'input',
//     name: 'quantity',
//     message: 'How many do you need?',
//     validate(value) {
//       const valid = !isNaN(parseFloat(value));
//       return valid || 'Please enter a number';
//     },
//     filter: Number,
//   },
//   {
//     type: 'expand',
//     name: 'toppings',
//     message: 'What about the toppings?',
//     choices: [
//       {
//         key: 'p',
//         name: 'Pepperoni and cheese',
//         value: 'PepperoniCheese',
//       },
//       {
//         key: 'a',
//         name: 'All dressed',
//         value: 'alldressed',
//       },
//       {
//         key: 'w',
//         name: 'Hawaiian',
//         value: 'hawaiian',
//       },
//     ],
//   },
//   {
//     type: 'rawlist',
//     name: 'beverage',
//     message: 'You also get a free 2L beverage',
//     choices: ['Pepsi', '7up', 'Coke'],
//   },
//   {
//     type: 'input',
//     name: 'contents',
//     message: 'Table of Contents',
//     default: 'Nope, all good!',
//   },
//   {
//     type: 'input',
//     name: 'installation',
//     message: 'Installation:',
//     default: 'npm install',
//   },
//   {
//     type: 'input',
//     name: 'usage',
//     message: 'Usage: ',
//     default: 'Nope, all good!',
//   },
//   {
//     type: 'list',
//     name: 'licence',
//     message: 'Licence',
//     choices: ['cake', 'fries'],
//     when(answers) {
//       return answers.licence !== 'Nope, all good!';
//     },
//   },
//   {
//     type: 'input',
//     name: 'contirbuting',
//     message: 'contirbuting',
//     default: 'Nope, all good!',
//   },
//   {
//     type: 'input',
//     name: 'test',
//     message: 'tests',
//     default: 'Nope, all good!',
//   },
//   {
//     type: 'input',
//     name: 'questions',
//     message: 'Questions: ',
//     default: 'Nope, all good!',
//   },
  // {
  //   type: 'list',
  //   name: 'confirm',
  //   message: 'Generate README file: ',
  //   choices: ['Yes', 'No'],
  // },
//   {
//     type: 'list',
//     name: 'prize',
//     message: 'For leaving a comment, you get a freebie',
//     choices: ['cake', 'fries'],
//     when(answers) {
//       return answers.comments !== 'Nope, all good!';
//     },
//   },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log('int');
    console.log(data);
    fs.appendFile(`./${fileName}`, data, (err) =>{
        console.error(err);
    }); 
}

// TODO: Create a function to initialize app
function init() {

      inquirer.prompt(questions).then((answers) => {
         console.log(answers.confirm);
        // console.log(JSON.stringify(answers, null, '  '));
        if(answers.confirm === 'Yes')
        { 
            const data = generateMarkdown(answers);
            writeToFile('README.md', data);
        }
      });
}



// Function call to initialize app
init();
