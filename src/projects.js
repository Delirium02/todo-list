import { newTask } from "./tasks.js";

// this will hold all the projects
const projectManager = [];

// function to create a new project
function createProject(name) {
    return {
        name,
        tasks: []
    }
}

// add project to the manager
const addProject = (project) => {
    projectManager.push(project);
}

const defaultProject = createProject("Default Project");
addProject(defaultProject);

let currentProject = defaultProject;

// Create a new project and add it to the manager

// push tasks to a project
const addTaskToProject = (project, task) => {
    project.tasks.push(task);
}

export { projectManager, createProject, defaultProject, currentProject, addTaskToProject };