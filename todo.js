const todoform = document.querySelector(".js-todoForm");
const todoinput = todoform.querySelector("input");
const todolist = document.querySelector(".js-toDoList");

const Todos_Ls = 'toDos';

function filterFn(toDo){
    return toDo.id === 1;
}

let toDos = [];

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    todolist.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(Todos_Ls, JSON.stringify(toDos));
}

function paintTodo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newID = toDos.length + 1;
    delBtn.innerText = "X";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newID;
    todolist.appendChild(li);
    const ToDoObj = {
        text: text,
        id: newID
    }
    toDos.push(ToDoObj);
    saveToDos();
}

function handleSunmit(event){
    event.preventDefault();
    const currentValue = todoinput.value;
    paintTodo(currentValue);
    todoinput.value = "";
}

function loadTodos(){
    const loadTodos = localStorage.getItem(Todos_Ls);
    if(loadTodos !==null){
        const parsedTodos = JSON.parse(loadTodos);
        parsedTodos.forEach(function(toDo) {
            paintTodo(toDo.text);
        });
    }
}

function init(){
    loadTodos();
    todoform.addEventListener("submit", handleSunmit);
}

init();