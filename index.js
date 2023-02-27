import fs from 'fs/promises';
import inquirer from 'inquirer';

const promptUser = async () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a brief description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please provide installation instructions for your project:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please provide usage instructions for your project:',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Please provide contribution guidelines for your project:',
    },
    {
      type: 'input',
      name: 'test',
      message: 'Please provide test instructions for your project:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Please choose a license for your project:',
      choices: [
        'MIT',
        'Apache-2.0',
        'GPL-3.0',
        'BSD-3-Clause',
        'None',
      ],
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
  ]);
};

const generateREADME = (answers) => {
  return `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contribution Guidelines](#contribution-guidelines)
* [Test Instructions](#test-instructions)
* [License](#license)
* [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contribution Guidelines
${answers.contribution}

## Test Instructions
${answers.test}

## License
This project is licensed under the ${answers.license} license.

## Questions
If you have any questions about the repo, please contact me at ${
    answers.email
  }. You can find more of my work at https://github.com/${answers.github}/.
`;
};

promptUser()
  .then(async (answers) => {
    await fs.writeFile('README.md', generateREADME(answers));
    console.log('README.md file generated successfully!');
  })
  .catch((err) => console.error(err));