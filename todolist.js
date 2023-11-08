

const taskInput = document.getElementById("task");
const addButton = document.getElementById("add");
const taskList = document.getElementById("task-list");
const deleteAllTaskButton = document.getElementById("delete-all");

addButton.addEventListener("click", () => {
    const taskText = taskInput.value;

    if (taskText !== "") {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<span>${taskText} </span>
        <button class = "edit">Edit</button>
        <button class="delete">Delete</button>`
        

        
        taskList.appendChild(listItem);

        taskInput.value = "";
        const editButton = listItem.querySelector(".edit")
        const deleteButton = listItem.querySelector(".delete");

        editButton.addEventListener("click", () => {
                    const taskSpan = listItem.querySelector("span");
                    const updatedTaskText = prompt("Edit task:", taskSpan.textContent);
                    if (updatedTaskText !== null) {
                        taskSpan.textContent = updatedTaskText;
                    }
                });



        deleteButton.addEventListener("click", () => {
            taskList.removeChild(listItem);
        });
    }
});


deleteAllTaskButton.addEventListener("click" , () => {
if(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
}
})
















