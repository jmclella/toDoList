import createTodo from './todo';
import createProject from './project';
import createNote from './note';

const formSection = document.getElementById('modal-main');
const modal = document.getElementById('modal');

function genForm(formVar) {
    checkActiveModal(formVar);
}

function checkActiveModal(formVar) {
    if (formVar === 'modal-todo') {
        genTodoForm();
    } else if (formVar === 'modal-project') {
        genProjectForm();
    } else {
        genNoteForm();
    }
}

function genTodoForm() {
    formSection.innerHTML = '';
    formSection.innerHTML = `
    <form class="todo-form" id="todo-form" >
        <input type="text" placeholder="Title: Pay Bills" id="todo-title" name="todo-title" required>
        <div class="todo-bottom-container">
            <div class="todo-duedateContainer">
                <label for="todo-dueDate">Due Date: </label>
                <input type="date" id="todo-dueDate" name="todo-dueDate"
                    value="2022-12-29" min="2022-12-01" max="2023-12-31" required>
            </div>
            <button class="submit" id="todo-submit">Add To-Do</button>
        </div>
    </form>
    `

    let todoForm = document.getElementById('todo-form');
    todoForm.addEventListener('submit', (event) => {
        event.preventDefault();
        createTodo();
        modal.style.display = "none";
    })
}

function genProjectForm() {
    formSection.innerHTML = '';
    formSection.innerHTML = `
    <form class="project-form" id="project-form" >
        <input type="text" placeholder="Project Name: Gym" id="project-title" name="project-title" required>
        <div class="project-bottom-container">
            <button class="submit" id="project-submit">Add Project</button>
        </div>
    </form>
    `

    let projectForm = document.getElementById('project-form');
    projectForm.addEventListener('submit', (event) => {
        event.preventDefault();
        createProject();
    })
}

function genNoteForm() {
    formSection.innerHTML = '';
    formSection.innerHTML = `
    <form class="note-form" id="note-form" >
        <input type="textarea" placeholder="Note:" id="note-title" name="note-title" required>
        <div class="note-bottom-container">
            <button class="submit" id="note-submit">Add Note</button>
        </div>
    </form>
    `

    /* SUBMIT BUTTON FUCTIONALITY*/
    let noteForm = document.getElementById('note-form');
    noteForm.addEventListener('submit', (event) => {
        event.preventDefault();
        createNote();
    })
}


export default genForm;