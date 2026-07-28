
const taskInput = document.getElementById("js-task-input");
const taskDate = document.getElementById("js-task-date");
const addBtn = document.getElementById("js-todo-add-btn"); 
const taskList = document.getElementById("js-task-list");
const taskItems = [];

// add button work
addBtn.addEventListener("click", function(){
    addTask();
});

function addTask(){
    // check tasks are empty of fill
    if(!validation()){
        return;
    }

    // add items in a object and put it in an array
    const item = {
        taskName : taskInput.value,
        taskDate : taskDate.value
    }

    taskItems.push(item);
    console.log(taskItems);

    // reset the value
    taskDate.value = '';
    taskInput.value = '';

    renderPage();
}

function validation(){
    if (taskInput.value === ""){
        alert("Enter a task");
        return false;
    }
    if (taskDate.value === ""){
        alert("Enter a date");
        return false;
    }
    return true;
}

function renderPage(){ 
    let html = ``;
    for(let i = 0; i < taskItems.length; i++){
        html += `
            <div class="todo-item">
                <p>${taskItems[i].taskName}</p>
                <p>${taskItems[i].taskDate}</p>
                <button onclick="deleteTask(${i})">🗑 Delete</button>
            </div>
        `;
    }
    taskList.innerHTML = html;
}

function deleteTask(index){
    taskItems.splice(index,1);
    renderPage();
}