const generateHTML = require('./src/generateHTML');
const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs')

const teamArray = [];

// Collect employee information starting with the manager
const addManager = () => {

    console.log(`
================================================================================
Welcome to the team profile generator! Start with the team manager's information
================================================================================
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Manager name:",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else { 
                console.log("Please enter the manager's name");
                return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Manager ID:',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else { 
                    console.log("Please enter the manager's ID number");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Manager email:',
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)  // https://gist.github.com/Amitabh-K/ae073eea3d5207efaddffde19b1618e8
                if (valid) {
                    return true;
                } else {
                    console.log("Please enter the manager's email address");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Manager office phone number:',
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's office phone number");
                    return false;
                }
            }
        }
    ])
    .then(function (data) {
        const name = data.name
        const id = 1
        const email = data.email
        const officeNumber = data.officeNumber
        const manager = new Manager(name, id, email, officeNumber);
        teamArray.push(manager);
    });
};

// Collect information for the rest of the team
const addEmployee = () => {

    console.log(`
===========================================================
Now enter the employee information for the rest of the team
===========================================================
    `);

    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Employee role:',
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: 'Employee Name:',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else { 
                console.log("Please enter the employee's name");
                return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Employee ID:',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else { 
                    console.log("Please enter the employee's ID number");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Employee email:',
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log("Please enter the manager's email address");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Employee GitHub username:',
            when: (input) => input.role ==='Engineer', // https://stackoverflow.com/questions/56412516/conditional-prompt-rendering-in-inquirer
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else { 
                console.log("Please enter the employee's GitHub username");
                return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Employee School:',
            when: (input) => input.role === 'Intern',
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log("Please enter the employee's school");
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'additionalEmployee',
            message: 'Would you like to add another team member?',
            default: false
        }
    ])
    .then(function (data) {
        // let { name, id, email, role, github, school, additionalEmployee } = employeeData;
        const name = data.name
        const id = teamArray.length + 1
        const email = data.email
        const role = data.role
        const github = data.github
        const school = data.school
        const additionalEmployee = data.additionalEmployee
        let employee;
        if (role === 'Engineer') {
            employee = new Engineer(name, id, email, github);
        } else if (role === 'Intern') {
            employee = new Intern(name, id, email, school);
        }

        teamArray.push(employee);

        if (additionalEmployee) {
            return addEmployee(teamArray);
        } else {
            return teamArray;
        }
    })
};

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your team profile has been successfully generated");
        }
    })
};

addManager()
    .then(addEmployee)
    .then(teamArray => {
        return generateHTML(teamArray)
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });
    


        
        
    
