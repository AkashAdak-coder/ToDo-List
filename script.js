const inputBox = document.querySelector('.todo-input-box');
const addToDoBtn = document.querySelector('.add-todo-btn');
const todoList = document.querySelector('.todo-list-container');
let tasks = [];

function addTodo(){
    let taskText = inputBox.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    let newObject = {
        todoName : taskText,
        id : Date.now()
    }

    tasks.push(newObject);
    inputBox.value = '';
    displayTodo();
}

function displayTodo(){
 let taskList = '';

 tasks.forEach( task => {
    taskList += `
    <div class="todo-list" data-id="${task.id}">
        <input type="checkbox" data-id="${task.id}" class="js-checkbox">
        <div class="todo">${task.todoName}</div>
        <img src="xmark-solid-full.svg" alt="xmark icon" class="js-delete-btn">
    </div>
    `;
 });

 todoList.innerHTML = taskList;
}

function deleteTodo(todoId){
    tasks = tasks.filter(task => task.id !== Number(todoId));
    displayTodo();   
}

addToDoBtn.addEventListener('click', addTodo);

inputBox.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addTodo();
    }
});

todoList.addEventListener('click', (event) =>{
    let todoItem = event.target.closest('.todo-list');
    if(!todoItem) return;

    let todoId = todoItem.dataset.id;
    if (event.target.classList.contains('js-delete-btn')) {
        deleteTodo(todoId);
    }
    if(!(event.target.classList.contains('.js-checkbox'))){
        todoItem.querySelector('.todo').classList.toggle('complete');
    }
});