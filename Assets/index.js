// External packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
// Inquirer prompts for userResponses

const questions = [
    // Name
    {
        type: 'input',
        message: "What is your name??",
        name: 'fullName',
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
        message: "What is your GitHub username??",
        name: 'githubName',
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
        message: "What is your email address?",
        name: 'emailAddress',
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
        message: "What would you like the name of your README.md to be called?",
        name: 'projectTitle',
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
        message: "How would you best describe your project?",
        name: 'projectDescription',
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
        message: "Explain instructions of how User is to install the application.",
        name: 'installationInstructions',
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
        message: "If available, provide instructions for use.",
        name: 'usageInformation',
        default: 'Usage Information',
    },
    // Contribution Guidelines
    {
        type: 'input',
        message: "Please list all contributors that assisted in creating the application.",
        name: 'contributionGuidelines',
        default: 'Contribution Guidelines',
    },
    // Test Instructions
    {
        type: 'input',
        message: "What are the proper test instructions?",
        name: 'testInstructions',
        default: 'Test Instructions',
    },
    // Credit Help
    {
        type: 'input',
        message: "Attribute all those (people, videos, books, etc.) who have helped you complete your application.",
        name: 'creditHelp',
        default: 'Credit Help'
    },
    // License
    {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['Zilb', 'The Artistic License 2.0', 'Eclipse Public Lincense', 'The Perl License'],
        name: 'license',
        default: 'License',
    },
    // Features
    {
        type: 'list',
        message: "What features do you want to identify?",
        name: 'features',
        default: 'Features',
    },
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     return fs.writeFile(fileName, data, err => {
//         if (err) {
//             return console.log(err);
//         }

//         console.log("Great news! You've created your README!")
//     });
// }

function writeToFile(data) {
    return fs.writeFile('../README.md', data, (err) => 
    err ? console.log(err) : console.log("Great news! You've created your README!"));
}

function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(JSON.stringify(data, null, " "));
        data.getLicense = getLicense(data.license);
        writeToFile("../README.md", data);
    });
}
// TODO: Create a function to initialize app
// function init() {
//     inquirer.prompt(questions).then((answers) => {
//         writeToFile("../script/README.md", generateMarkdown({...answers}));
//         console.log("Hold on just a moment, please");
//     });
// }

// Function call to initialize app
init();
