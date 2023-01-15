/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _note__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./note */ \"./src/note.js\");\n\n\n\n\nconst formSection = document.getElementById('modal-main');\nconst modal = document.getElementById('modal');\n\nfunction genForm(formVar) {\n    checkActiveModal(formVar);\n}\n\nfunction checkActiveModal(formVar) {\n    if (formVar === 'modal-todo') {\n        genTodoForm();\n    } else if (formVar === 'modal-project') {\n        genProjectForm();\n    } else {\n        genNoteForm();\n    }\n}\n\nfunction genTodoForm() {\n    formSection.innerHTML = '';\n    formSection.innerHTML = `\n    <form class=\"todo-form\" id=\"todo-form\" >\n        <input type=\"text\" placeholder=\"Title: Pay Bills\" id=\"todo-title\" name=\"todo-title\" required>\n        <div class=\"todo-bottom-container\">\n            <div class=\"todo-duedateContainer\">\n                <label for=\"todo-dueDate\">Due Date: </label>\n                <input type=\"date\" id=\"todo-dueDate\" name=\"todo-dueDate\"\n                    value=\"2023-01-14\" min=\"2022-12-01\" max=\"2023-12-31\" required>\n            </div>\n            <button class=\"submit\" id=\"todo-submit\">Add To-Do</button>\n        </div>\n    </form>\n    `\n\n    let todoForm = document.getElementById('todo-form');\n    todoForm.addEventListener('submit', (event) => {\n        event.preventDefault();\n        (0,_todo__WEBPACK_IMPORTED_MODULE_0__.createTodo)();\n        modal.style.display = \"none\";\n    })\n}\n\nfunction genProjectForm() {\n    formSection.innerHTML = '';\n    formSection.innerHTML = `\n    <form class=\"project-form\" id=\"project-form\" >\n        <input type=\"text\" placeholder=\"Project Name: Gym\" id=\"project-title\" name=\"project-title\" required>\n        <div class=\"project-bottom-container\">\n            <button class=\"submit\" id=\"project-submit\">Add Project</button>\n        </div>\n    </form>\n    `\n\n    let projectForm = document.getElementById('project-form');\n    projectForm.addEventListener('submit', (event) => {\n        event.preventDefault();\n        (0,_project__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    })\n}\n\nfunction genNoteForm() {\n    formSection.innerHTML = '';\n    formSection.innerHTML = `\n    <form class=\"note-form\" id=\"note-form\" >\n        <input type=\"textarea\" placeholder=\"Note:\" id=\"note-title\" name=\"note-title\" required>\n        <div class=\"note-bottom-container\">\n            <button class=\"submit\" id=\"note-submit\">Add Note</button>\n        </div>\n    </form>\n    `\n\n    /* SUBMIT BUTTON FUCTIONALITY*/\n    let noteForm = document.getElementById('note-form');\n    noteForm.addEventListener('submit', (event) => {\n        event.preventDefault();\n        (0,_note__WEBPACK_IMPORTED_MODULE_2__.createNote)();\n        modal.style.display = \"none\";\n        console.log('submittedNote');\n    })\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (genForm);\n\n//# sourceURL=webpack://todolist/./src/form.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ \"./src/form.js\");\n/* harmony import */ var _note__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./note */ \"./src/note.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n\n\n\n\n\n\n\n\n/* MAIN FUNCTIONALITY */\n\nfunction navController() {\n    /* ADD ITEM MODAL */\n    const addTaskBtn = document.getElementById('addButton');\n    const modal = document.getElementById('modal');\n\n    addTaskBtn.addEventListener('click', () => {\n        modal.style.display = \"block\";\n        setActiveTask(modalSidebarButtons[0]);\n        (0,_form__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(modalSidebarButtons[0].id);\n    })\n\n    window.addEventListener('click', (e) => {\n        if (e.target == modal) {\n            modal.style.display = \"none\";\n        }\n    })\n\n    /* SIDEBAR BUTTON LISTENERS */\n    const sidebarButtons = document.querySelectorAll('.sidebar-button')\n    sidebarButtons.forEach(button => {\n        button.addEventListener('click', (e) => {\n            if (e.target.classList.contains('nav-selected')) return;\n            setActiveButton(button);\n            let buttonTarget = e.target.id;\n            console.log(buttonTarget);\n            if (buttonTarget === 'homeButton') {\n                (0,_todo__WEBPACK_IMPORTED_MODULE_2__.genHomeContent)(_todo__WEBPACK_IMPORTED_MODULE_2__.todoList);\n            } else if (buttonTarget === 'notesButton') {\n                (0,_note__WEBPACK_IMPORTED_MODULE_1__.genNoteContent)(_note__WEBPACK_IMPORTED_MODULE_1__.noteList);\n            } else {\n                (0,_todo__WEBPACK_IMPORTED_MODULE_2__.clearMainContent)();\n            }\n        })\n    })\n\n    function setActiveButton(button) {\n        sidebarButtons.forEach((button) => {\n            if (button !== this) {\n                button.classList.remove('nav-selected');\n            }\n        })\n        button.classList.add('nav-selected');\n    }\n\n    /* MODAL SIDEBAR BUTTON LISTENERS */\n    const modalSidebarButtons = document.querySelectorAll('.modal-sidebar-button');\n    modalSidebarButtons.forEach(button => {\n        button.addEventListener('click', (e) => {\n            if (e.target.classList.contains('modal-nav-selected')) return;\n            setActiveTask(button);\n            (0,_form__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(button.id)\n        })\n    })\n\n    function setActiveTask(button) {\n        modalSidebarButtons.forEach((button) => {\n            if (button !== this) {\n                button.classList.remove('modal-nav-selected');\n            }\n        })\n        button.classList.add('modal-nav-selected');\n    }\n}\n\nnavController();\n\n\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./src/note.js":
/*!*********************!*\
  !*** ./src/note.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createNote\": () => (/* binding */ createNote),\n/* harmony export */   \"genNoteContent\": () => (/* binding */ genNoteContent),\n/* harmony export */   \"noteList\": () => (/* binding */ noteList)\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n\n\nlet noteList = [\n    {\n        noteText: 'Need apples, bananas, blueberries and more fruit for peanut butter banana smoothies',\n        category: ['note'],\n    },\n    {\n        noteText: 'Continue developing project functionality on toDoList project in order to finish this once and for all!',\n        category: ['note'],\n    }\n];\nconst mainContent = document.querySelector('.main-content');\n\nfunction createNote() {\n    let noteText = document.getElementById('note-title').value;\n    console.log('Creating', noteText);\n    let tempNote = new Note(noteText);\n    addNote(tempNote);\n}\n\nfunction addNote(note) {\n    noteList.push(note);\n    let navSelected = document.querySelector('.nav-selected');\n    let sideBarChoice = navSelected.id;\n    console.log(sideBarChoice);\n    if (sideBarChoice === 'notesButton') {\n        genNoteContent(noteList);\n    } else {\n        return;\n    }\n}\n\nfunction genNoteContent(noteList) {\n    (0,_todo__WEBPACK_IMPORTED_MODULE_0__.clearMainContent)();\n    \n    for (let i = 0; i < noteList.length; i++) {\n        let noteCard = document.createElement('div');\n        noteCard.classList.add('noteCard');\n\n        let noteText = document.createElement('p');\n        noteText.classList.add('noteText');\n        noteText.textContent = noteList[i].noteText;\n\n        noteCard.appendChild(noteText);\n        mainContent.appendChild(noteCard);\n    }\n}\n\nclass Note {\n    constructor(noteText) {\n        this.noteText = noteText;\n        this.category = ['note'];\n    }\n\n    getNoteText() {\n        return this.noteText;\n    }\n\n    getCategory() {\n        return this.category;\n    }\n}\n\n\n\n//# sourceURL=webpack://todolist/./src/note.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nfunction createProject(idVar) {\n    console.log(idVar);\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createProject);\n\n//# sourceURL=webpack://todolist/./src/project.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearMainContent\": () => (/* binding */ clearMainContent),\n/* harmony export */   \"createTodo\": () => (/* binding */ createTodo),\n/* harmony export */   \"genHomeContent\": () => (/* binding */ genHomeContent),\n/* harmony export */   \"todoList\": () => (/* binding */ todoList)\n/* harmony export */ });\n\nlet todoList = [\n    {\n        title: 'Run 3 miles',\n        dueDate: '2023-01-14',\n        completed: false,\n        category: ['home'],\n    },\n    {\n        title: 'Make Bed',\n        dueDate: '2023-01-16',\n        completed: true,\n        category: ['home'],\n    }\n]\nconst mainContent = document.querySelector('.main-content');\n\n\n\nfunction createTodo() {\n    let title = document.getElementById('todo-title').value;\n    let dueDate = document.getElementById('todo-dueDate').value;\n\n    let tempTodo = new Todo(title, dueDate);\n    addTodo(tempTodo);\n}\n\nfunction addTodo(todo) {\n    todoList.push(todo);\n    let navSelected = document.querySelector('.nav-selected');\n    let sideBarChoice = navSelected.id;\n    console.log(sideBarChoice);\n    if (sideBarChoice === 'homeButton') {\n        genHomeContent(todoList);\n    } else {\n        return;\n    }\n}\n\nfunction clearMainContent() {\n    mainContent.innerHTML = '';\n}\n\nfunction genHomeContent(todoList) {\n    clearMainContent();\n\n    for (let i = 0; i < todoList.length; i++) {\n        let todoCard = document.createElement('div');\n        todoCard.classList.add('todoCard');\n\n        let rightCardDiv = document.createElement('div')\n        rightCardDiv.classList.add('rightCardDiv');\n\n        let todoTitle = document.createElement('p');\n        todoTitle.textContent = todoList[i].title;\n\n        let todoDueDate = document.createElement('p');\n        todoDueDate.textContent = todoList[i].dueDate;\n\n        let todoCompleted = document.createElement('button');\n        if (todoList[i].completed === false) {\n            todoCompleted.textContent = 'Not Completed';\n        } else {\n            todoCompleted.textContent = 'Complete';\n            todoCompleted.classList.toggle('isCompleted')\n        }\n\n        todoCompleted.addEventListener('click', (e) => {\n            if (todoList[i].completed === false) {\n                todoList[i].completed = true;\n                todoCompleted.classList.toggle('isCompleted');\n                todoCompleted.textContent = 'Complete';\n            } else {\n                todoList[i].completed = false;\n                todoCompleted.classList.toggle('isCompleted');\n                todoCompleted.textContent = 'Not Completed';\n            }\n        })\n        \n        rightCardDiv.appendChild(todoDueDate);\n        rightCardDiv.appendChild(todoCompleted);\n        \n        todoCard.appendChild(todoTitle);\n        todoCard.appendChild(rightCardDiv);\n\n        mainContent.appendChild(todoCard);\n    }\n}\n\n\nclass Todo {\n    constructor(title, dueDate) {\n        this.title = title;\n        this.dueDate = dueDate;\n        this.completed = false;\n        this.category = ['home'];\n    }\n\n    getTitle() {\n        return this.title;\n    }\n\n    getDueDate() {\n        return this.dueDate;\n    }\n\n    getCompleted() {\n        return this.completed;\n    }\n\n    getCategory() {\n        return this.category;\n    }\n}\n\n\n\n//# sourceURL=webpack://todolist/./src/todo.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;