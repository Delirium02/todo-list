let tasksList = [];

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

export { tasksList, newTask };