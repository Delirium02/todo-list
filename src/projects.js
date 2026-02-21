import { tasksList, newTask } from "./tasks.js";

// this will hold all the projects
const projectManager = [];

// add project to the manager
const addProject = (project) => {
    projectManager.push(project);
}

const defaultProject = createProject("Default Project");

addProject(defaultProject);


// function to create a new project
function createProject(name) {
    return {
        name,
        tasks: []
    }
}

// Create a new project and add it to the manager

// push tasks to a project
const addTaskToProject = (project, task) => {
    project.tasks.push(task);
}

export { createProject, defaultProject, projectManager, addTaskToProject };