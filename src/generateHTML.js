const generateManger = function(manager) {
    return `
    <div class="col-4 mt-4>
        <div class="card>
            <div class="card-header">
                <h3>${manager.name}</h3>
                <h4>Manager</h4>
            </div>
            <div class="card-body">
                <p class="id">Employee ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office-number">ID: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    ` 
}

const generateEngineer = function(engineer) {
    return `
    <div class="col-4 mt-4>
        <div class="card>
            <div class="card-header">
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4>
            </div>
            <div class="card-body">
                <p class="id">Employee ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">GitHub Usernamee: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    ` 
}

const generateIntern = function(intern) {
    return `
    <div class="col-4 mt-4>
        <div class="card>
            <div class="card-header">
                <h3>${intern.name}</h3>
                <h4>Intern</h4>
            </div>
            <div class="card-body">
                <p class="id">Employee ID: ${intern.id}</p>
                <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School Attended: ${intern.school}</p>
            </div>
        </div>
    </div>
    ` 
}

generateHTML = (data) => {
    pageArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const managerCard = generateManager(employee);
            pageArray.push(managerCard);
        }

        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);
            pageArray.push(engineerCard);
        }
        
        if (role === 'Intern') {
            const internCard = generateIntern(employee);
            pageArray.push(internCard);
        }
    }

    const employeeCards = pageArray.join('');
    const generateTeam = generatePage(employeeCards);
    return generateTeam;
}

const generatePage = function(employeeCards) {
    return `
    
    `
}

module.exports = generateHTML;