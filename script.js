
const taskInput = document.getElementById("js-task-input");
const taskDate = document.getElementById("js-task-date");
const addBtn = document.getElementById("js-todo-add-btn"); 
const taskList = document.getElementById("js-task-list");
let html = ``;

// add button work
addBtn.addEventListener("click", function(){
    addTask();
});

function addTask(){
    // check tasks are empty of fill
    if (taskInput.value === ""){
        alert("Enter a task");
        return;
    }
    if (taskDate.value === ""){
        alert("Enter a date");
        return;
    }

    // create a div where task name and date is presant 
    html +=`
        <div class="todo-item">
            <p>${taskInput.value}</p>
            <p>${taskDate.value}</p>
            <button>🗑 Delete</button>
        </div>
    `;

    // it reset the value when the old input value is added
    taskList.innerHTML = html;
    taskDate.value = '';
    taskInput.value = '';
}