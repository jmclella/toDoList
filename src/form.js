const formSection = document.getElementById('modal-main');

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
        <input type="text" placeholder="Title: Pay Bills" id="todo-title" name="todo-title">
        <div class="todo-bottom-container">
            <div class="todo-duedateContainer">
                <label for="todo-dueDate">Due Date: </label>
                <input type="date" id="todo-dueDate" name="todo-dueDate"
                    value="2022-12-29" min="2022-12-01" max="2023-12-31">
            </div>
            <button id="todo-submit">Add To-Do</button>
        </div>
    </form>
    `
}

function genProjectForm() {
    formSection.innerHTML = '';
    formSection.innerHTML = `
    <form class="project-form" id="project-form" >
        <input type="text" placeholder="Project Name: Gym" id="project-title" name="project-title">
        <div class="project-bottom-container">
            <button id="project-submit">Add Project</button>
        </div>
    </form>
    `
}

function genNoteForm() {
    formSection.innerHTML = '';
    formSection.innerHTML = `
    <form class="note-form" id="note-form" >
        <input type="textarea" placeholder="Note:" id="note-title" name="note-title">
        <div class="note-bottom-container">
            <button id="note-submit">Add Note</button>
        </div>
    </form>
    `
}


export default genForm;