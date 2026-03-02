import { newTask, renderTask } from "./tasks.js";
import {
    createProject,
    defaultProject,
    projectManager,
    addTaskToProject,
    currentProject,
} from "./projects.js";
import "./style.css";

const projectForm = document.querySelector("#project-form");
const projectInputForm = document.querySelector(".project-input-form");
const createProjectBtn = document.querySelector(".create-project-btn");
const cancelProjectBtn = document.querySelector(".cancel-project-btn");

const taskForm = document.querySelector("#task-form");
const taskInputForm = document.querySelector(".task-input-form");
const createTaskBtn = document.querySelector(".create-task-btn");
const cancelTaskBtn = document.querySelector(".cancel-task-btn");

createProjectBtn.addEventListener("click", () => {
    createProjectBtn.style.display = "none";
    createTaskBtn.style.display = "block";
    projectInputForm.style.display = "block";
    taskInputForm.style.display = "none";
})

cancelProjectBtn.addEventListener("click", (e) => {
    e.preventDefault();
    createProjectBtn.style.display = "block";
    createTaskBtn.style.display = "block";
    projectInputForm.style.display = "none";
})

createTaskBtn.addEventListener("click", () => {
    createProjectBtn.style.display = "block";
    projectInputForm.style.display = "none";
    taskInputForm.style.display = "block";
});

cancelTaskBtn.addEventListener("click", (e) => {
    e.preventDefault();
    createTaskBtn.style.display = "block";
    taskInputForm.style.display = "none";
});

taskForm.addEventListener("submit", (e) => {
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

    taskForm.reset();

    createTaskBtn.style.display = "block";
    taskInputForm.style.display = "none";
    cancelTaskBtn.style.display = "none";
});

export { createTaskBtn, cancelTaskBtn };
