import { createTask, renderTask, deleteBtn } from "./tasks.js";
import {
    projectManager,
    createProject,
    addProject,
    currentProject,
    addTaskToProject,
    renderProject,
} from "./projects.js";
import "./style.css";

const sidebarIcon = document.querySelector(".sidebar-icon");
const sidebar = document.querySelector(".first-column");

sidebarIcon.addEventListener("click", () => {
    sidebar.classList.toggle("close-sidebar");
});

const projectForm = document.querySelector("#project-form");
const projectInputForm = document.querySelector(".project-input-form");
const createProjectBtn = document.querySelector(".create-project-btn");
const cancelProjectBtn = document.querySelector(".cancel-project-btn");

const taskForm = document.querySelector("#task-form");
const taskInputForm = document.querySelector(".task-input-form");
const createTaskBtn = document.querySelector(".create-task-btn");
const cancelTaskBtn = document.querySelector(".cancel-task-btn");

const taskListContainer = document.querySelector(".task-list-container");
taskListContainer.style.display = "none";

createProjectBtn.addEventListener("click", () => {
    createTaskBtn.style.display = "block";
    projectInputForm.style.display = "block";
    taskInputForm.style.display = "none";
});

cancelProjectBtn.addEventListener("click", (e) => {
    e.preventDefault();
    createProjectBtn.style.display = "block";
    createTaskBtn.style.display = "block";
    projectInputForm.style.display = "none";
});

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

// Create new project
projectForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const projTitle = document.querySelector("#project-title").value;

    const newProject = createProject(projTitle);

    addProject(newProject);

    renderProject();

    projectForm.reset();

    createProjectBtn.style.display = "block";
    projectInputForm.style.display = "none";
});

// Create new todo task
taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.querySelector("#task-title").value;
    const description = document.querySelector("#task-desc").value;
    const dueDate = document.querySelector("#task-due-date").value;
    const priority = document.querySelector("#priority-level").value;
    const notes = document.querySelector("#notes").value;
    const checkbox = document.querySelector("#task-checkbox").checked;

    const newTask = createTask(
        title,
        description,
        dueDate,
        priority,
        notes,
        checkbox,
    );

    addTaskToProject(currentProject, newTask);

    renderTask();

    taskForm.reset();

    createTaskBtn.style.display = "block";
    taskInputForm.style.display = "none";
    taskListContainer.style.display = "block";
});

export { createTaskBtn, cancelTaskBtn };
