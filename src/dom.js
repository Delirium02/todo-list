import { tasksList, newTask } from "./tasks.js";
import { createProject, defaultProject, projectManager, addTaskToProject } from "./projects.js"
import "./style.css";

const toggleBtnAdd = document.querySelector(".toggle-btn-add");
const toggleBtnCancel = document.querySelector(".toggle-btn-cancel");
const inputFieldToggle = document.querySelector(".input-field-toggle");

toggleBtnCancel.style.display = "none";

toggleBtnAdd.addEventListener("click", () => {
    toggleBtnAdd.style.display = "none";
    inputFieldToggle.style.display = "block";
    toggleBtnCancel.style.display = "block";
});

toggleBtnCancel.addEventListener("click", () => {
    toggleBtnAdd.style.display = "block";
    inputFieldToggle.style.display = "none";
    toggleBtnCancel.style.display = "none";
})



export { toggleBtnAdd };