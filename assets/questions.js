const managerQuestions = [
    {
        type: "input",
        name: "name",
        message: "Eneter manager's name:"
    },
    {
        type: "input",
        name: "jobtitle",
        message: "What is their job title?"
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
    },
    { 
        type: "list",
        name: "add",
        message: "Add another team member?",
        choices: ["Yes, Engineer", "Yes, Intern",  "No"]
    },
]

const engineerQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is their name?"
    },
    {
        type: "input",
        name: "jobtitle",
        message: "What is their job title?"
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
    },
    { 
        type: "list",
        name: "add",
        message: "Add another team member?",
        choices: ["Yes, Engineer", "Yes, Intern",  "No"]
    },
]

const internQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is their name?"
    },
    {
        type: "input",
        name: "jobtitle",
        message: "What is their job title?"
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
    },
    { 
        type: "list",
        name: "add",
        message: "Add another team member?",
        choices: ["Yes, Engineer", "Yes, Intern",  "No"]
    },
]

module.exports = [managerQuestions, engineerQuestions, internQuestions]