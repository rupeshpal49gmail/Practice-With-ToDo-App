const addTodo = document.getElementById("input-box");
const addedTodoList = document.getElementById("list-container");

function addTask() {
  if (addTodo.value === "") {
    alert("Please add your Todo");
  } else {
    let li = document.createElement("li");
    li.innerHTML = addTodo.value;
    addedTodoList.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  addTodo.value = "";
  saveData();
}

addedTodoList.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", addedTodoList.innerHTML);
}

function showToDoList() {
  addedTodoList.innerHTML = localStorage.getItem("data");
}
showToDoList();
