const inquirer = require('inquirer');
const fs= require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Enter your GitHub repository name.',
        name: 'projectName',
    },
    {
        type: 'input',
        message: 'Enter a summary that describes your project.',
        name: 'summary',
    },
    {
        type: 'input',
        message: 'What was the motivation behind creating this project?',
        name: 'motivation',
    },
    {
        type: 'input',
        message: 'What problem does your project solve?',
        name: 'solved',
    },
    {
        type: 'input',
        message: 'What did you learn from your project along the way?',
        name: 'learn',
    },
    {
        type: 'input',
        message: 'What makes your project unique?',
        name: 'unique',
    },
    {
        type: 'input',
        message: 'Enter the URL(s) for any screenshots and project demonstrations.',
        name: 'url',
    },
    {
        type: 'input',
        message: 'What are the steps to install your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What are the instructions to use your project?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'List any credits you have.',
        name: 'credits',
    },
    {
        type: 'input',
        message: 'Enter the license for your project if you have one.',
        name: 'license',
    },
    {
        type: 'input',
        message: 'List any extra features your project has.',
        name: 'features',
    },
    {
        type: 'input',
        message: 'Enter contribution guidelines if any.',
        name: 'contributions',
    },
    {
        type: 'input',
        message: 'Enter testing instructions if any.',
        name: 'testing',
    },
    {
        type: 'input',
        message: 'Enter your gitHub profile URL and any other contact info you would like to.',
        name: 'contactInfo',
    },   
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


