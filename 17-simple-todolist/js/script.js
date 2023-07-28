const inputTodo = document.getElementById("input-todo");
const todos = document.getElementById("todos");

const addTodo = () => {
  const todoText = inputTodo.value.trim();
  if (!todoText) {
    return;
  }

  const todoItem = createTodoElement(todoText);
  todos.appendChild(todoItem);

  inputTodo.value = "";
};

const createTodoElement = (todoText) => {
  const todoItem = document.createElement("li");
  todoItem.classList.add("todo");
  todoItem.textContent = todoText;

  const deleteButton = createDeleteButton();
  deleteButton.onclick = () => {
    todos.removeChild(todoItem);
  };

  todoItem.appendChild(deleteButton);
  return todoItem;
};

const createDeleteButton = () => {
  const deleteButton = document.createElement("button");
  const icon = document.createElement("img");
  icon.src = "/img/delete.svg";
  deleteButton.appendChild(icon);
  return deleteButton;
};

inputTodo.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    addTodo();
  }
});
