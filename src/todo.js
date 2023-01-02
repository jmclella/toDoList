
export const todoList = []


function createTodo() {
    let title = document.getElementById('todo-title').value;
    let dueDate = document.getElementById('todo-dueDate').value;

    let tempTodo = new Todo(title, dueDate);
    addTodo(tempTodo);
}

function addTodo(todo) {
    todoList.push(todo);
}

class Todo {
    constructor(title, dueDate) {
        this.title = title;
        this.dueDate = dueDate;
    }

    getTitle() {
        return this.title;
    }

    getDueDate() {
        return this.dueDate;
    }
}


export default createTodo;