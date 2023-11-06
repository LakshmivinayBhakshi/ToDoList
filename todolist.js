

const taskInput = document.getElementById("task");
const addButton = document.getElementById("add");
const taskList = document.getElementById("task-list");
const deleteAllTaskButton = document.getElementById("delete-all");

addButton.addEventListener("click", () => {
    const taskText = taskInput.value;

    if (taskText !== "") {
        const listItem = document.createElement("li");
        listItem.innerHTML = `${taskText} <button class="delete">Delete</button`;

        
        taskList.appendChild(listItem);

        taskInput.value = "";

        const deleteButton = listItem.querySelector(".delete");
        deleteButton.addEventListener("click", () => {
            taskList.removeChild(listItem);
        });
    }
});


deleteAllTaskButton.addEventListener("click" , () => {
while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
}
})
















