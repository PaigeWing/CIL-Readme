// Returns a license badge based on which license is passed in
// // If there is no license, returns an empty string
function renderLicenseBadge(license) {
    switch (license) {
    case 'Apache 2.0':
      return(
        '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
      )
      break;
    case 'MIT':
      return(
        '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
      )
      break;
    case 'GPL v3':
      return(
        '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
      )
      break; 
    case 'Other':
      return "" 
      break;
    case 'None':  
      return ""
      break;
    }
}

// Generates markdown for README
function generateMarkdown(responses) {

  return(
  `# ${responses.projectName}

  ## Description  


  ${responses.summary}


  ## Table of Contents
  -[Problem Solved](#solved)

  -[What I learned](#learn)

  -[Installation](#installation)

  -[Usage](#usage)

  -[Credits](#credits)

  -[License](#license)

  -[Features](#features)

  -[Contributing](#contributing)

  -[Tests](#tests)
  
  ## Problems Solved


  ${responses.solved}

  ## What I learned

  
  ${responses.learn}
  

  ## Installation

  ${responses.installation}

  
  ## Usage

  ${responses.usage}

  
  ## Credits

  ${responses.credits}

  
  ## License

  ${responses.license}
 
  ${renderLicenseBadge(responses.license)}
  

  ## Features

  ${responses.features}

  
  ## Contribution

  ${responses.contributions}

  
  ## Tests

  ${responses.testing}

 
  ## Demo

  ${responses.demo}

  
  ## Questions

  ${responses.userName}
  'https://github.com/${responses.userName}'

 
  Reach me with additional questions at ${responses.email}
  `);
}

module.exports = generateMarkdown;
