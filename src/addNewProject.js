import { projectLoad } from "./projectload";

import { saveProjects } from "./localStorage";
import { retriveData, projects } from "./localStorage";

class Project {
    constructor(name) {
        this.name = name;
        this.todos = [];
    }
    changeName() {}
}

function addNewProjectForm() {
    const content = document.querySelector('#content');
    const adder = document.querySelector('#adder');

    const newProjectForm = document.createElement('form');
    newProjectForm.setAttribute('id','new-project-form');
    newProjectForm.classList.add('project');
    adder.insertAdjacentElement("afterend", newProjectForm);

    const formLabel = document.createElement('label');
    formLabel.innerHTML = '<h2>Name of new project</h2>';
    formLabel.setAttribute('for', 'project-name');
    newProjectForm.appendChild(formLabel);

    const formInput = document.createElement('input');
    formInput.setAttribute('name', 'project-name');
    formInput.setAttribute('id','project-name');
    newProjectForm.appendChild(formInput);

    const formBtn = document.createElement('button');
    formBtn.innerHTML = 'Add project'
    newProjectForm.appendChild(formBtn)

    newProjectForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const newProject = createNewProject()
        addProjectToProjects(newProject);
        saveProjects()
        retriveData()
        console.log(projects)
    }) 
}

function createNewProject() {
    let projectName = document.querySelector('#project-name').value;
    const newProject = new Project(projectName);
    return newProject
}

function addProjectToProjects(project) {
    projects.push(project)
}

export {addNewProjectForm}