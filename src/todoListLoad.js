import edit from './pencil-box-outline.svg';
import delet from './delete-outline.svg';
import {createNewTodo, addTodoToTodos} from './addNewTodo.js'
import { format } from 'date-fns';
import { projects, saveProjects } from './localStorage.js';


const content = document.querySelector('#content');

function todoListLoad(project) {
    console.log('loading to-do list');
    content.innerHTML = '';

    let projectIndex;
    for (let i = 0; i < projects.length; i++) {
        if (project === projects[i]) {
            projectIndex = i;
        }
    }

    const todoList = document.createElement('div');
    todoList.classList.add('todolist');
    content.appendChild(todoList);

    const listName = document.createElement('h2');
    listName.classList.add('listname');
    listName.innerHTML = project.name;
    listName.addEventListener('click', () => {
        let newName = prompt('New name:');
        if (newName === null || newName === '') 
            {
            return
        } else {
            project.name = newName;
            saveProjects()
            todoListLoad(project)
        } 
    })
    todoList.appendChild(listName);

    const list = document.createElement('ul');
    list.setAttribute('id','list')
    todoList.appendChild(list);

    const inputFormLi = document.createElement('li');
    list.appendChild(inputFormLi);

    const inputForm = document.createElement('form');
    inputForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newTodo = createNewTodo();
        addTodoToTodos(projectIndex, newTodo);
        saveProjects();
        todoListLoad(project);
    })
    inputFormLi.appendChild(inputForm);


    const input = document.createElement('input')
    input.name = 'newTodo';
    input.id = 'newTodo';
    inputForm.appendChild(input);

    const dateinput = document.createElement('input');
    dateinput.name = 'dueDate';
    dateinput.id = 'dueDate';
    dateinput.type = 'date';
    inputForm.appendChild(dateinput)

    const addtodo = document.createElement('button')
    addtodo.innerHTML = 'Add'
    inputForm.appendChild(addtodo)

    for (let i = 0; i < projects[projectIndex].todos.length; i++) {
        const li = document.createElement('li');
        list.appendChild(li);

        const title = document.createElement('div');
        title.classList.add('title');
        title.innerHTML = `<b>${projects[projectIndex].todos[i].title}</b> due by <em>${format(projects[projectIndex].todos[i].dueDate, "dd/MM/yyyy")}</em>`
        li.appendChild(title);

        if (projects[projectIndex].todos[i].done === false) {
            title.classList.remove('done')
        } else if (projects[projectIndex].todos[i].done === true) {
            title.classList.add('done')
        }

        title.addEventListener('click', () => {
                if (projects[projectIndex].todos[i].done === false) {
                    projects[projectIndex].todos[i].done = true;
                    title.classList.add('done');
                } else if (projects[projectIndex].todos[i].done === true) {
                    projects[projectIndex].todos[i].done = false;
                    title.classList.remove('done');
                }
                saveProjects()
            })

        const todobtns = document.createElement('div');
        todobtns.classList.add('todobtns');
        li.appendChild(todobtns);

        const editbtn = document.createElement('div');
        editbtn.classList.add('editbtn');
        editbtn.addEventListener('click', () => {
            let newTitle = prompt('New Title:')
            if (newTitle === null || newTitle === '') {
                return
            } else {
                projects[projectIndex].todos[i].title = newTitle;
                saveProjects();
                todoListLoad(projects[projectIndex]);
            }
        })
        todobtns.appendChild(editbtn);

        const editbtnimg = new Image();
        editbtnimg.src = edit
        editbtn.appendChild(editbtnimg)

        const deletebtn = document.createElement('div');
        deletebtn.classList.add('deletebtn');
        deletebtn.addEventListener('click', () => {
            removeTodoFromTodos(projectIndex, i)
            saveProjects()
            todoListLoad(projects[projectIndex])
        })
        todobtns.appendChild(deletebtn);

        const deletebtnimg = new Image();
        deletebtnimg.src = delet
        deletebtn.appendChild(deletebtnimg)
    }
}

function removeTodoFromTodos(projectIndex, todoIndex) {
    projects[projectIndex].todos.splice(todoIndex,1)
}


export {todoListLoad}