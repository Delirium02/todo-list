import { newTask, renderTask } from "./tasks.js";
import {
    createProject,
    defaultProject,
    projectManager,
    addTaskToProject,
    currentProject,
} from "./projects.js";
import "./style.css";

const todoForm = document.querySelector("#todo-form");
const toggleBtnCreate = document.querySelector(".toggle-btn-create");
const toggleBtnCancel = document.querySelector(".toggle-btn-cancel");
const inputFieldToggle = document.querySelector(".input-field-toggle");
const todoList = document.querySelector("#todo-list");

toggleBtnCancel.style.display = "none";

toggleBtnCreate.addEventListener("click", () => {
    toggleBtnCreate.style.display = "none";
    inputFieldToggle.style.display = "block";
    toggleBtnCancel.style.display = "block";
});

toggleBtnCancel.addEventListener("click", (e) => {
    e.preventDefault();
    toggleBtnCreate.style.display = "block";
    inputFieldToggle.style.display = "none";
    toggleBtnCancel.style.display = "none";
});

todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.querySelector("#task-title").value;
    const description = document.querySelector("#task-desc").value;
    const dueDate = document.querySelector("#task-due-date").value;
    const priority = document.querySelector("#priority-level").value;
    const notes = document.querySelector("#notes").value;
    const checkbox = document.querySelector("#task-checkbox").checked;

    const createdTask = newTask(
        title,
        description,
        dueDate,
        priority,
        notes,
        checkbox,
    );

    addTaskToProject(currentProject, createdTask);

    renderTask();

    todoForm.reset();

    toggleBtnCreate.style.display = "block";
    inputFieldToggle.style.display = "none";
    toggleBtnCancel.style.display = "none";
});

export { toggleBtnCreate, toggleBtnCancel, todoList };
