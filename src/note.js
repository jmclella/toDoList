import {clearMainContent} from "./todo";

let noteList = [
    {
        noteText: 'Need apples, bananas, blueberries and more fruit for peanut butter banana smoothies',
        category: ['note'],
    },
    {
        noteText: 'Continue developing project functionality on toDoList project in order to finish this once and for all!',
        category: ['note'],
    }
];
const mainContent = document.querySelector('.main-content');

function createNote() {
    let noteText = document.getElementById('note-title').value;
    console.log('Creating', noteText);
    let tempNote = new Note(noteText);
    addNote(tempNote);
}

function addNote(note) {
    noteList.push(note);
    let navSelected = document.querySelector('.nav-selected');
    let sideBarChoice = navSelected.id;
    console.log(sideBarChoice);
    if (sideBarChoice === 'notesButton') {
        genNoteContent(noteList);
    } else {
        return;
    }
}

function genNoteContent(noteList) {
    clearMainContent();
    
    for (let i = 0; i < noteList.length; i++) {
        let noteCard = document.createElement('div');
        noteCard.classList.add('noteCard');

        let noteText = document.createElement('p');
        noteText.classList.add('noteText');
        noteText.textContent = noteList[i].noteText;

        noteCard.appendChild(noteText);
        mainContent.appendChild(noteCard);
    }
}

class Note {
    constructor(noteText) {
        this.noteText = noteText;
        this.category = ['note'];
    }

    getNoteText() {
        return this.noteText;
    }

    getCategory() {
        return this.category;
    }
}

export {noteList, createNote, genNoteContent}