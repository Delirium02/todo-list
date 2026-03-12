import { createTask, renderTask } from "./tasks.js";

const projectList = document.querySelector("#project-list");
const taskListContainer = document.querySelector(".task-list-container");

// this will hold all the projects
const projectManager = JSON.parse(localStorage.getItem("myTodoProjects")) || [];

// function to create a new project
function createProject(name) {
    return {
        name,
        tasks: [],
    };
}

// add project to the manager
const addProject = (project) => {
    projectManager.push(project);
    saveToLocalStorage();
};

if (projectManager.length === 0) {
    const defaultProject = createProject("Default Project");
    projectManager.push(defaultProject);
}

let currentProject = projectManager[0];

// push tasks to a project
const addTaskToProject = (project, task) => {
    project.tasks.push(task);
    saveToLocalStorage();
};

const renderProject = () => {
    projectList.innerHTML = "";

    projectManager.forEach((project) => {
        const projectFrame = document.createElement("div");
        projectFrame.classList.add("project-frame");

        projectFrame.innerHTML = `<h3>${project.name}</h3>`;

        projectFrame.addEventListener("click", () => {
            setCurrentProject(project);
            if (currentProject.tasks.length > 0) {
                taskListContainer.style.display = "block";
            } else {
                taskListContainer.style.display = "none";
            }
            renderTask();
        });

        projectList.appendChild(projectFrame);
    });
};

const setCurrentProject = (project) => {
    currentProject = project;
};

function saveToLocalStorage() {
    localStorage.setItem("myTodoProjects", JSON.stringify(projectManager));
}

renderProject();

export {
    projectManager,
    createProject,
    addProject,
    currentProject,
    addTaskToProject,
    renderProject,
    setCurrentProject,
    saveToLocalStorage
};
