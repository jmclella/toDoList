
let todoList = [
    {
        title: 'Run 3 miles',
        dueDate: '2023-01-14',
        completed: false,
        category: ['home'],
    },
    {
        title: 'Make Bed',
        dueDate: '2023-01-16',
        completed: true,
        category: ['home'],
    }
]
const mainContent = document.querySelector('.main-content');



function createTodo() {
    let title = document.getElementById('todo-title').value;
    let dueDate = document.getElementById('todo-dueDate').value;

    let tempTodo = new Todo(title, dueDate);
    addTodo(tempTodo);
}

function addTodo(todo) {
    todoList.push(todo);
    let navSelected = document.querySelector('.nav-selected');
    let sideBarChoice = navSelected.id;
    console.log(sideBarChoice);
    if (sideBarChoice === 'homeButton') {
        genHomeContent(todoList);
    } else {
        return;
    }
}

function clearMainContent() {
    mainContent.innerHTML = '';
}

function genHomeContent(todoList) {
    clearMainContent();

    for (let i = 0; i < todoList.length; i++) {
        let todoCard = document.createElement('div');
        todoCard.classList.add('todoCard');

        let rightCardDiv = document.createElement('div')
        rightCardDiv.classList.add('rightCardDiv');

        let todoTitle = document.createElement('p');
        todoTitle.textContent = todoList[i].title;

        let todoDueDate = document.createElement('p');
        todoDueDate.textContent = todoList[i].dueDate;

        let todoCompleted = document.createElement('button');
        if (todoList[i].completed === false) {
            todoCompleted.textContent = 'Not Completed';
        } else {
            todoCompleted.textContent = 'Complete';
            todoCompleted.classList.toggle('isCompleted')
        }

        todoCompleted.addEventListener('click', (e) => {
            if (todoList[i].completed === false) {
                todoList[i].completed = true;
                todoCompleted.classList.toggle('isCompleted');
                todoCompleted.textContent = 'Complete';
            } else {
                todoList[i].completed = false;
                todoCompleted.classList.toggle('isCompleted');
                todoCompleted.textContent = 'Not Completed';
            }
        })
        
        rightCardDiv.appendChild(todoDueDate);
        rightCardDiv.appendChild(todoCompleted);
        
        todoCard.appendChild(todoTitle);
        todoCard.appendChild(rightCardDiv);

        mainContent.appendChild(todoCard);
    }
}


class Todo {
    constructor(title, dueDate) {
        this.title = title;
        this.dueDate = dueDate;
        this.completed = false;
        this.category = ['home'];
    }

    getTitle() {
        return this.title;
    }

    getDueDate() {
        return this.dueDate;
    }

    getCompleted() {
        return this.completed;
    }

    getCategory() {
        return this.category;
    }
}

export {todoList, createTodo, genHomeContent, clearMainContent};