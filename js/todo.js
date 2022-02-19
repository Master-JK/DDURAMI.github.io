const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDolist = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
  li.remove();
}

function strikethrough(event) {
  console.log("click");
  const li = event.target.parentElement;
  li.querySelector("span").classList.toggle("text-line");
}

function mouseEvent(event) {
  event.target.children[2].classList.toggle("toDoBtnColor");
  // button;
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  li.classList.add("li");
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.classList.add("check-box");
  checkBox.addEventListener("click", strikethrough);
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "X";
  button.classList.add("toDoButton");
  button.classList.add("toDoBtnColor");
  button.addEventListener("click", deleteTodo);
  li.appendChild(checkBox);
  li.appendChild(span);
  li.appendChild(button);
  toDolist.appendChild(li);
  li.addEventListener("mouseenter", mouseEvent);
  li.addEventListener("mouseleave", mouseEvent);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value; //입력받은 변수
  toDoInput.value = ""; // 입력창 초기화
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
