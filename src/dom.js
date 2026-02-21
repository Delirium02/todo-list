import { tasksList, newTask } from "./tasks.js";
import {
    createProject,
    defaultProject,
    projectManager,
    addTaskToProject,
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
    const desc = document.querySelector("#task-desc").value;
    const dueDate = document.querySelector("#task-due-date").value;
    const priority = document.querySelector("#priority-level").value;
    const notes = document.querySelector("#notes").value;
    const checkbox = document.querySelector("#task-checkbox").checked;

    const createdTask = newTask(
        title,
        desc,
        dueDate,
        priority,
        notes,
        checkbox,
    );

    addTaskToProject(defaultProject, createdTask);

    tasksList.push(createdTask);

    renderTask();

    todoForm.reset();
});

const renderTask = () => {
    todoList.innerHTML = "";

    tasksList.forEach((task) => {
        const taskFrame = document.createElement("div");
        taskFrame.classList.add("task-frame");
        
        taskFrame.textContent = task.title;

        todoList.appendChild(taskFrame);
    });
}

export { toggleBtnCreate };
