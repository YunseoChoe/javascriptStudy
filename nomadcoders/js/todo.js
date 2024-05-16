const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = []; // 업데이트 가능

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // 배열을 문자열로 변환
}

function deleteToDo(event) {
    const li = event.target.parentElement; // 클릭된 button의 부모 요소 찾기 (target = button, parentElement = li)

    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text; // 입력 값
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button); 
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault(); // 새로고침 x
    const newTodo = toDoInput.value; // 값 복사
    toDoInput.value = ""; // text값 지우기 (newTodo와는 상관 없음)
    
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj); // 배열에 추가
    console.log(toDos);
    paintToDo(newTodoObj); 
    saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

// 페이지를 로드해도 없어지지 않음
if (savedToDos !== null) {
    // 문자열을 배열로 변환
    const parsedToDos = JSON.parse(savedToDos);
    console.log(toDos);
    toDos = parsedToDos; // Array 덮어쓰기 가능
    console.log(toDos);
    parsedToDos.forEach(paintToDo); // 각 요소에 대해서 쓰기
}