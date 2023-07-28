const inputTodo = document.getElementById("input-todo");
const todos = document.getElementById("todos");

const addTodo = () => {
  const todoText = inputTodo.value;
  if (todoText == "") {
    return false;
  }

  const todoItem = document.createElement("li");
  todoItem.classList.add("todo");
  todoItem.textContent = todoText;

  const deleteButton = document.createElement("button");
  deleteButton.onclick = () => {
    todos.removeChild(todoItem);
  };

  const icon = document.createElement("img");
  icon.src = "/img/delete.svg";

  deleteButton.appendChild(icon);
  todoItem.appendChild(deleteButton);
  todos.appendChild(todoItem);

  inputTodo.value = "";
};
