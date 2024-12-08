const addTodo = document.getElementById("input-box");
const addedTodoList = document.getElementById("list-container");

function addTask() {
  if (addTodo.value === "") {
    alert("Please add your Todo");
  } else {
    let li = document.createElement("li");
    li.innerHTML = addTodo.value;
    addedTodoList.appendChild(li);
  }
  addTodo.value = "";
}
