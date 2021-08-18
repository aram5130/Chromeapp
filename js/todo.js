const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "ToDos"

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));   // JSON.stringify -> string으로 변경
}

function deleteToDo(event) {
    const li = event.target.parentElement;  // evnet 는 target -> click된 대상을 찾아 부모요소 li를 찾음
    li.remove();    //부모 li 삭제
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}


function paintToDo(newToDo) {
    const li = document.createElement("li");    // html li를 만듦
    li.id =newToDo.id;
    const span = document.createElement("span");    // html span을 만듦
    span.innerText = newToDo.text;   // span안에 넣은 새로운 텍스트는 사용자가 form에 입력한 newToDo값
    const button = document.createElement("button");
    button.innerText = "✖";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);   // span을 li에 넣음
    li.appendChild(button); 
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo =toDoInput.value;     //input의 현재 value를  새로운 변수에 복사하는 것
    toDoInput.value = "";
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
} 

