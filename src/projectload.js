
import { addNewProjectForm } from './addNewProject';
import { todoListLoad } from './todoListLoad';
import edit from './pencil-box-outline.svg';
import delet from './delete-outline.svg';
import {projects} from './localStorage'


const content = document.querySelector('#content');

function projectLoad() {
    content.innerHTML = '';
    const myAdderDiv = document.createElement('div');
    myAdderDiv.classList.add('project');
    myAdderDiv.setAttribute('id','adder');
    const myAdderBtn = document.createElement('button');
    myAdderBtn.setAttribute('id','adderbtn');
    myAdderBtn.innerHTML = '+';
    myAdderBtn.addEventListener('click',
        addNewProjectForm
    )
    myAdderDiv.appendChild(myAdderBtn);
    content.appendChild(myAdderDiv);

    render()
}

function render() {
    for (let i = 0; i < projects.length; i++) {
        const myProject = document.createElement('div');
        myProject.innerHTML = `<h2>${projects[i].name}</h2>`;
        myProject.classList.add('project')
        const myTodoList = document.createElement('ul')


        for (let j = 0; j < projects[i].todos.length; j++) {
            const myTodo = document.createElement('li');
            myTodo.innerHTML = `${projects[i].todos[j].title}`;
            if (projects[i].todos[j].done === false) {
                myTodo.classList.remove('done')
            } else if (projects[i].todos[j].done === true) {
                myTodo.classList.add('done');
            }

            myTodo.addEventListener('click', () => {
                if (projects[i].todos[j].done === false) {
                    projects[i].todos[j].done = true;
                    console.log(projects[i].todos[j])
                    myTodo.classList.add('done');
                } else if (projects[i].todos[j].done === true) {
                    projects[i].todos[j].done = false;
                    console.log(projects[i].todos[j])
                    myTodo.classList.remove('done')
                }
                
            })
            myTodoList.appendChild(myTodo)
        }

        myProject.appendChild(myTodoList);      

        const myIcons = document.createElement('div');
        myIcons.classList.add('icons');

        const myEditBtnDiv = document.createElement('div');
        myEditBtnDiv.classList.add('editbtn');
        const myEditBtn = new Image();
        myEditBtn.src = edit;
        myEditBtnDiv.appendChild(myEditBtn);
        myEditBtnDiv.addEventListener('click',() => {
            todoListLoad(projects[i])
        })

        const myDeleteBtnDiv = document.createElement('div');
        myDeleteBtnDiv.classList.add('deletebtn');
        const myDeleteBtn = new Image();
        myDeleteBtn.src = delet;
        myDeleteBtn.addEventListener('click', () => {
            removeProjectfromProjects(i);
            projectLoad();
        })
        myDeleteBtnDiv.appendChild(myDeleteBtn);

        myIcons.appendChild(myEditBtnDiv);
        myIcons.appendChild(myDeleteBtnDiv);
        myProject.appendChild(myIcons)

        content.appendChild(myProject);  
    };
    
}


function removeProjectfromProjects(index) {
    projects.splice(index,1);
}





export {projectLoad} 