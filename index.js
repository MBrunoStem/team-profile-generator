const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern.js');
const Engineer = require('./lib/Engineer.js');
const path = require('path');
const teamRender = require('./src/page-template')
let teamArr = [];

function buildTeam(arr) {
    fs.writeFileSync('./dist/index.html', teamRender(arr), "utf-8")
}

function init() {
    function addManager() {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Enter name:"
            },
            {
                type: "input",
                name: "jobid",
                message: "What is their employee id number?"
            },
            {
                type: "input",
                name: "email",
                message: "What is their email address?"
            },
            {
                type: "input",
                name: "office",
                message: "What is their office number?"
            }
        ]).then(answers => {
            const manager = new Manager(answers.name, answers.jobid, answers.email, answers.office);
            teamArr.push(manager);
            addTeammate()
        })
    }

    // TODO: Create Engineer and Intern Prompts - usemanager as reference
    function createEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Enter name:"
            },
            {
                type: "input",
                name: "jobid",
                message: "What is their employee id number?"
            },
            {
                type: "input",
                name: "email",
                message: "What is their email address?"
            },
            {
                type: "input",
                name: "github",
                message: "What is their their GitHub profile name?"
            }
        ]).then(answers => {
            const engineer = new Engineer(answers.name, answers.jobid, answers.email, answers.github);
            teamArr.push(engineer);
            addTeammate()
        })
    }

    function createIntern() {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Enter name:"
            },
            {
                type: "input",
                name: "jobid",
                message: "What is their employee id number?"
            },
            {
                type: "input",
                name: "email",
                message: "What is their email address?"
            },
            {
                type: "input",
                name: "school",
                message: "What is the name of their school?"
            }
        ]).then(answers => {
            const intern = new Intern(answers.name, answers.jobid, answers.email, answers.school);
            teamArr.push(intern);
            addTeammate()
        })
    }


    function addTeammate() {
        inquirer.prompt([
            {
                type: "list",
                name: 'choice',
                message: 'would like to add another team member?',
                choices: [
                    'Yes, Engineer',
                    'Yes, Intern',
                    'No'
                ]
            }
        ]).then((choice) => {
            switch (choice.choice) {
                case "Yes, Engineer":
                    createEngineer()
                    break;
                case "Yes, Intern":
                    createIntern()
                    break;
                default:
                    buildTeam(teamArr);

            }
        })
    }

    function buildTeam(arr) {
        fs.writeFileSync('./dist/index.html', teamRender(arr), "utf-8")
    }
    
    addManager()

}

init();