// Grabbing dependencies
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const api = require("./utils/api");
const generateMarkdown = require("./utils/generateMarkdown");
// Setting constant for asynchronously writing to file
const writeFileAsync = util.promisify(fs.writeFile);

// Prompt user for Github username and project details
function promptUser() {
    return inquirer.prompt([
        {
            // Prompt user for Github username
            type: "input",
            name: "ghUsername",
            message: "What is your GitHub username? "
        },
        {
            // Prompt user for Project Title
            type: "input",
            name: "projectTitle",
            message: "Enter a title for your project: "
        },
        {
            // Prompt user for Description
            type: "input",
            name: "description",
            message: "Enter a description for your project: "
        },
        // {
        //     // Prompt user for Table of Contents
        //     type: "input",
        //     name: "Table of Contents",
        //     message: "Enter a title for your project"
        // },
        {
            // Prompt user for Installation
            type: "input",
            name: "installation",
            message: "Enter required installations/dependencies for your project: "
        },
        {
            // Prompt user for Usage Details/rights
            type: "input",
            name: "usage",
            message: "Enter Usage details for your project: "
        },
        {
            // Prompt user for applicable Licenses
            type: "input",
            name: "license",
            message: "Enter applicable licenses for your project: "
        },
        {
            // Prompt user for Contributing entities
            type: "input",
            name: "contributing",
            message: "Enter contributing entities: "
        },
        {
            // Prompt user for related Tests
            type: "input",
            name: "tests",
            message: "Enter related tests for your project: "
        },
        {
            // Prompt user for questions
            type: "input",
            name: "questions",
            message: "Enter additional questions: "
        }

    ]);
};
// Using data from user's answers, create markdown for readme.pdf
promptUser()
    .then(function(answers) {
        // const gitHub = api.api.getUser(answers.ghUsername);
        const markdown = generateMarkdown(answers);
        // const gitHubURL = gitHub.data.url;

        console.log(answers);
        // console.log(gitHub);
        // console.log(gitHubURL);
        
        return writeFileAsync("test.md", markdown).then(writeFileAsync("test.pdf", markdown));
    })
    .catch(function(err) {
        console.log(err + "\n");
    })
    .finally(function() {
        console.log("test.md and test.pdf have been created successfully");
    });

// --initial code starting point below--
// const questions = [
// ];
// function writeToFile(fileName, data) {
// }
// function init() {
// }
// init();
