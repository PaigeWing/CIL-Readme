const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
    inquirer.prompt([
    {
         type: 'input',
         message: 'Enter your GitHub username',
         name: 'userName',
    },
    {
        type: 'input',
        message: 'Enter your GitHub repository name',
        name: 'projectName',
    },
    {
        type: 'input',
        message: 'Provide a summary for your project',
        name: 'summary',
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
        message: 'List any credits you have',
        name: 'credits',
    },
    {
        type: 'list',
        message: 'Select a license for your project.',
        name: 'license',
        choices: ['Apache 2.0', 'MIT', 'GPL v3', 'Other', 'None'],
    },
    {
        type: 'input',
        message: 'List any extra features your project has',
        name: 'features',
    },
    {
        type: 'input',
        message: 'Enter contribution guidelines if any',
        name: 'contributions',
    },
    {
        type: 'input',
        message: 'Enter testing instructions if any',
        name: 'testing',
    },
    {
        type: 'input',
        message: 'Provide link to demo if you have one',
        name: 'demo',
    }, 
    {
        type: 'input',
        message: 'Enter your email address',
        name: 'email',
    }, 
])
.then((responses) => {
        const filename = 'myREADME.md';
        const data = responses
       createFile(filename, data)
});

const createFile =  (filename, data) => {
    fs.writeFileSync(filename, generateMarkdown(data), err => err ? console.error 
        (err) : console.log('Completed')
        );
}

