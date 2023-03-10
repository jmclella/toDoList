import genForm from './form';
import {noteList} from './note';
import {genNoteContent} from './note';
import {todoList} from './todo';
import {genHomeContent} from './todo';
import {clearMainContent} from './todo';


/* MAIN FUNCTIONALITY */

function navController() {
    /* ADD ITEM MODAL */
    const addTaskBtn = document.getElementById('addButton');
    const modal = document.getElementById('modal');

    addTaskBtn.addEventListener('click', () => {
        modal.style.display = "block";
        setActiveTask(modalSidebarButtons[0]);
        genForm(modalSidebarButtons[0].id);
    })

    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.style.display = "none";
        }
    })

    /* SIDEBAR BUTTON LISTENERS */
    const sidebarButtons = document.querySelectorAll('.sidebar-button')
    sidebarButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            if (e.target.classList.contains('nav-selected')) return;
            setActiveButton(button);
            let buttonTarget = e.target.id;
            console.log(buttonTarget);
            if (buttonTarget === 'homeButton') {
                genHomeContent(todoList);
            } else if (buttonTarget === 'notesButton') {
                genNoteContent(noteList);
            } else {
                clearMainContent();
            }
        })
    })

    function setActiveButton(button) {
        sidebarButtons.forEach((button) => {
            if (button !== this) {
                button.classList.remove('nav-selected');
            }
        })
        button.classList.add('nav-selected');
    }

    /* MODAL SIDEBAR BUTTON LISTENERS */
    const modalSidebarButtons = document.querySelectorAll('.modal-sidebar-button');
    modalSidebarButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal-nav-selected')) return;
            setActiveTask(button);
            genForm(button.id)
        })
    })

    function setActiveTask(button) {
        modalSidebarButtons.forEach((button) => {
            if (button !== this) {
                button.classList.remove('modal-nav-selected');
            }
        })
        button.classList.add('modal-nav-selected');
    }
}

navController();


