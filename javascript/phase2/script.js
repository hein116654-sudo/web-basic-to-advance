const taskInput = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const taskList = document.querySelector("#taskList");

let tasks = JSON.parse(localStorage.getItem("myTasks")) ?? [];

const renderTasks = () => {
    taskList.innerHTML = ""; 
    
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${task}</span>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(li);
    });

    localStorage.setItem("myTasks", JSON.stringify(tasks));
};

addBtn.addEventListener("click", () => {
    const text = taskInput.value.trim();
    if (text !== "") {
        tasks.push(text);
        taskInput.value = "";
        renderTasks();        
    }
});

window.deleteTask = (index) => {
    tasks.splice(index, 1);
    renderTasks();
};

renderTasks();