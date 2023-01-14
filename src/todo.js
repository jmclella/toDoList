
const todoList = []
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
        todoTitle.textContent = todoList[i].getTitle();

        let todoDueDate = document.createElement('p');
        todoDueDate.textContent = todoList[i].getDueDate();

        let todoCompleted = document.createElement('button');
        todoCompleted.textContent = 'Not Completed';

        todoCompleted.addEventListener('click', (e) => {
            e.target.classList.toggle('isCompleted');
            let tempTextContent = e.target.textContent;
            if (tempTextContent === 'Not Completed') {
                e.target.textContent = 'Complete';
            } else {
                e.target.textContent = 'Not Completed';
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