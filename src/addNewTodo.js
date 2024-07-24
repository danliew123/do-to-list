import { projects } from "./localStorage";

class Todo {
    constructor(title, dueDate, priority) {
        this.title = title;
        this.done = false;
        this.dueDate = dueDate || new Date();
        this.priority = priority;
    }

    changeTitle() {}

    changeDueDate() {}

    changePriority() {}
}


function createNewTodo() {
    let newTodoTitle = document.querySelector('#newTodo').value;
    let newTodoDate = document.querySelector('#dueDate').value
    const newTodo = new Todo(newTodoTitle, newTodoDate);
    return newTodo;
}

function addTodoToTodos(index, todo) {
    projects[index].todos.push(todo);
}

export {createNewTodo, addTodoToTodos}