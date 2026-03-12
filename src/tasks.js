import { currentProject, saveToLocalStorage } from "./projects.js";

const taskList = document.querySelector("#task-list");
const taskListContainer = document.querySelector(".task-list-container");

function createTask(title, description, dueDate, priority, notes, checklist) {
    return {
        title,
        description,
        dueDate,
        priority,
        notes,
        checklist,
    };
}

const renderTask = () => {
    taskListContainer.style.display = currentProject.tasks.length > 0 ? "block" : "none";
    
    taskList.innerHTML = "";

    currentProject.tasks.forEach((task) => {
        const taskFrame = document.createElement("li");
        taskFrame.classList.add("task-frame");

        taskFrame.innerHTML = `
            <h3>${task.title}</h3><br>
            <p>${task.description}</p>
            <p>Due: ${task.dueDate}</p>
            <p>Priority: ${task.priority}</p>
            <p>Notes: ${task.notes}</p>
            <p>Checklist: ${task.checklist ? "Yes" : "No"}</p>`;

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-project-btn");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => {
            currentProject.tasks.splice(currentProject.tasks.indexOf(task), 1);
            saveToLocalStorage();
            renderTask();
        });

        taskFrame.appendChild(deleteBtn);
        taskList.appendChild(taskFrame);
    });
};

export { createTask, renderTask };
