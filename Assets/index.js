// External packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
// Inquirer prompts for userResponses

const questions = [
    // Name
    {
        type: 'input',
        name: 'fullName',
        message: "What is your name??",
        default: 'Full Name',
        validate: function (answer) {
            if (answer.length < 5) {
                return console.log("What's your full name?");
            }
            return true;
        }
    },
    // GitHub Username
    {
        type: 'input',
        name: 'githubName',
        message: "What is your GitHub username??",
        default: 'GitHub Username',
        validate: function (answer) {
            if (answer.length < 5) {
                return console.log("Please provide your GitHub username.");
            }
            return true;
        }
    },
    // User Email Address
    {
        type: 'input',
        name: 'emailAddress',
        message: "What is your email address?",
        default: 'Email Address',
        validate: function (answer) {
            if (answer.length < 5) {
                return console.log("Please enter in a valid email address.");
            }
            return true;
        }
    },
    // Project Title
    {
        type: 'input',
        name: 'projectTitle',
        message: "What would you like the name of your README.md to be called?",
        default: 'Project Title',
        validate: function (answer) {
            if (answer.length < 5) {
                return console.log("Our title needs to be at least 5 characters long.");
            }
            return true;
        }
    },
    // Project Description
    {
        type: 'input',
        name: 'projectDescription',
        message: "How would you best describe your project?",
        default: 'Project Description',
        validate: function (answer) {
            if (answer.length < 15) {
                return console.log("A proper description explains the who, what, when, where, or why of a problem and/or its solution.");
            }
            return true;
        }
    },
    // Installation Instructions
    {
        type: 'input',
        name: 'installationInstructions',
        message: "Explain instructions of how User is to install the application.",
        default: 'Installation Instructions',
        validate: function (answer) {
            if (answer.length < 15) {
                return console.log("Imagine you've never encountered your application - what is the best path to set-up its success?");
            }
            return true;
        }
    },
    // Usage Information
    {
        type: 'input',
        name: 'usageInformation',
        message: "If available, provide instructions for use.",
        default: 'Usage Information',
    },
    // Contribution Guidelines
    {
        type: 'input',
        name: 'contributionGuidelines',
        message: "Please list all contributors that assisted in creating the application.",
        default: 'Contribution Guidelines',
    },
    // Test Instructions
    {
        type: 'input',
        name: 'testInstructions',
        message: "What are the proper test instructions?",
        default: 'Test Instructions',
    },
    // Credit Help
    {
        type: 'input',
        name: 'creditHelp',
        message: "Attribute all those (people, videos, books, etc.) who have helped you complete your application.",
        default: 'Credit Help'
    },
    // License
    {
        type: 'list',
        name: 'license',
        message: "Choose a license for your project.",
        choices: ['Zilb', 'The Artistic License 2.0', 'Eclipse Public Lincense', 'The Perl License'],
        default: 'License',
    },
    // Features
    {
        type: 'list',
        name: 'features',
        message: "What features do you want to identify?",
        default: 'Features',
    },
];

// TODO: The final swing function to initialize the README app!

function init() {
    inquirer.prompt(questions).then((data) => {
        fs.writeFile("./output/README.md", generateMarkdown(data), () => {
        console.log("Yay! Your README has been created!")
        })
      }
    )}

   init();
