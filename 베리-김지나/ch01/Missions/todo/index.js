const input = document.getElementById("input");
const todoList = document.querySelector(".todo-list");
const doneList = document.querySelector(".done-list");

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const newTodo = document.createElement("p");
    newTodo.textContent = input.value;

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "완료";

    completeBtn.addEventListener("click", function () {
      moveToDone(newTodo, completeBtn);
    });

    newTodo.appendChild(completeBtn);
    todoList.appendChild(newTodo);
    input.value = "";
  }
});

function moveToDone(todoItem, completeBtn) {
  doneList.appendChild(todoItem);
  todoItem.removeChild(completeBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "삭제";
  deleteBtn.addEventListener("click", function () {
    doneList.removeChild(todoItem);
  });

  todoItem.appendChild(deleteBtn);
}
