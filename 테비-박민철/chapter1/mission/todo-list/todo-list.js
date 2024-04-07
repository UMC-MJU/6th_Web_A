const input = document.querySelector("#todo-input");
const todoSection = document.querySelector("#todo");
const doneSection = document.querySelector("#done");

const createTodoItem = (value) => {
  const todoDiv = document.createElement("div");
  todoDiv.textContent = value;
  todoDiv.style.padding = "10px 0px";
  todoDiv.style.display = "flex";
  todoDiv.style.justifyContent = "space-around";
  todoDiv.style.marginBottom = "10px";

  const completeButton = document.createElement("button");
  completeButton.textContent = "완료";
  completeButton.onclick = () => completeTodo(completeButton);
  todoDiv.appendChild(completeButton);

  todoSection.appendChild(todoDiv);

  return todoDiv;
};

const completeTodo = (button) => {
  button.textContent = "삭제";
  button.onclick = () => deleteTodo(button);
  doneSection.appendChild(button.parentElement);
};

const deleteTodo = (button) => {
  button.parentElement.remove();
};

const addTodoOnEnter = (e) => {
  if (e.key === "Enter" && input.value.trim() !== "") {
    const todoItem = createTodoItem(input.value);
    todoSection.appendChild(todoItem);
    input.value = "";
  }
};

input.addEventListener("keypress", addTodoOnEnter);
