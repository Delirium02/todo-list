import { currentProject } from "./projects.js";
import { todoList } from "./dom.js";

function newTask(title, description, dueDate, priority, notes, checklist) {
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
    todoList.innerHTML = "";

    currentProject.tasks.forEach((task) => {
        const taskFrame = document.createElement("div");
        taskFrame.classList.add("task-frame");
        
        taskFrame.innerHTML = `
            <h3>${task.title}</h3><br>
            <p>${task.description}</p>
            <p>Due: ${task.dueDate}</p>`

        todoList.appendChild(taskFrame);
    });
}

export { newTask, renderTask };