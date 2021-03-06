const teamRender = teamArr => {
    console.log(teamArr)
    //  TODO: Add Manager Data to Render Manager.
    const renderManager = manager => {
        return ` 
        <section class='team-card'>
        <div class='card-header'>
        <h2>${manager.getName()}</h2>
        <h3><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sunglasses" viewBox="0 0 16 16">
        <path d="M3 5a2 2 0 0 0-2 2v.5H.5a.5.5 0 0 0 0 1H1V9a2 2 0 0 0 2 2h1a3 3 0 0 0 3-3 1 1 0 1 1 2 0 3 3 0 0 0 3 3h1a2 2 0 0 0 2-2v-.5h.5a.5.5 0 0 0 0-1H15V7a2 2 0 0 0-2-2h-2a2 2 0 0 0-1.888 1.338A1.99 1.99 0 0 0 8 6a1.99 1.99 0 0 0-1.112.338A2 2 0 0 0 5 5H3zm0 1h.941c.264 0 .348.356.112.474l-.457.228a2 2 0 0 0-.894.894l-.228.457C2.356 8.289 2 8.205 2 7.94V7a1 1 0 0 1 1-1z"/>
      </svg> ${manager.getRole()}</h3>
        </div>
        <ul>
        <li>Employee ID: ${manager.getId()}</li>
        <li>Email: ${manager.getEmail()}</li>
        <li>Office Number: ${manager.getOfficeNumber()}</li>
        </ul>
        </section>
        `;
    };

    const renderEngineer = engineer => {
        return ` 
        <section class='team-card'>
        <div class='card-header'>
        <h2>${engineer.getName()}</h2>
        <h3><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tools" viewBox="0 0 16 16">
        <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.356 3.356a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 0 0 0-1.414l-3.356-3.356a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0zm9.646 10.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708zM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11z"/>
      </svg> ${engineer.getRole()}</h3>
        </div>
        <ul>
        <li>Employee ID: ${engineer.getId()}</li>
        <li>Email: ${engineer.getEmail()}</li>
        <li>GitHub: ${engineer.getGitHub()}</li>
        </ul>
        </section>
        `;
    };

    const renderIntern = intern => {
        return ` 
        <section class='team-card'>
        <div class='card-header'>
        <h2>${intern.getName()}</h2>
        <h3><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-book-half" viewBox="0 0 16 16">
        <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
      </svg> ${intern.getRole()}</h3>
        </div>
        <ul>
        <li>Employee ID: ${intern.getId()}</li>
        <li>Email: ${intern.getEmail()}</li>
        <li>School: ${intern.getSchool()}</li>
        </ul>
        </section>
        `;
    };

    // TODO: Add render intern and engineer use render manager as reference.
    const teamCards = [];
    teamCards.push(teamArr.
        filter(employee => employee.getRole() === 'Manager')
        .map(manager=>renderManager(manager))
    )
    teamCards.push(teamArr.
        filter(employee => employee.getRole() === 'Engineer')
        .map(engineer=>renderEngineer(engineer))
        .join('')
    )
    teamCards.push(teamArr.
        filter(employee => employee.getRole() === 'Intern')
        .map(intern=>renderIntern(intern))
        .join('')
    )
    return teamCards.join('');
}

module.exports = teamCards => {
    return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>CSS Box Styling</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" type="text/css" href="../assets/style.css" />
      </head>
      <body>
    <header>
        <h1>My Team</h1>
    </header>
    <main>
       ${teamRender(teamCards)}
    </main>
    </body>
    </html>
    `;

};