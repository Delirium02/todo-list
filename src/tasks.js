import { currentProject } from "./projects.js";

const taskList = document.querySelector("#task-list");

function createTask(title, description, dueDate, priority, notes, checklist) {
    return {
        title,
        description,
        dueDate,
        priority, 
        notes, 
        checklist
    }
};

const renderTask = () => {
    taskList.innerHTML = "";

    currentProject.tasks.forEach((task) => {
        const taskFrame = document.createElement("div");
        taskFrame.classList.add("task-frame");
        
        taskFrame.innerHTML = `
            <h3>${task.title}</h3><br>
            <p>${task.description}</p>
            <p>Due: ${task.dueDate}</p>`

        taskList.appendChild(taskFrame);
    });
}

export { createTask, renderTask };