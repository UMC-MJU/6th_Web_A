const input = document.getElementById("input");
const todoList = document.getElementById("todo");
const doneList = document.getElementById("done");

input.addEventListener("keyup", (event) => {
  if (event.key === "Enter" && input.value.trim() !== "") {
    const listItem = document.createElement("li");
    listItem.textContent = input.value;

    const completeButton = document.createElement("button");
    completeButton.textContent = "완료";
    completeButton.classList.add("complete-btn");
    completeButton.onclick = function () {
      doneList.appendChild(listItem);

      listItem.removeChild(completeButton);
      listItem.appendChild(deleteButton);
    };

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "삭제";
    deleteButton.classList.add("delete-btn");
    deleteButton.onclick = function () {
      this.parentElement.remove();
    };

    listItem.appendChild(completeButton);
    todoList.appendChild(listItem);
    input.value = "";
  }
});
