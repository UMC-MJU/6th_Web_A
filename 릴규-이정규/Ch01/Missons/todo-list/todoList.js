// Add to your todoList.js file
const input = document.getElementById("input");
const todoList = document.getElementById("todo");

input.addEventListener("keyup", (event) => {
  if (event.key === "Enter" && input.value.trim() !== "") {
    // Create the list item
    const listItem = document.createElement("li");
    listItem.textContent = input.value;

    // Create the 'Complete' button
    const completeButton = document.createElement("button");
    completeButton.textContent = "완료";
    completeButton.classList.add("complete-btn");
    completeButton.onclick = function () {
      this.parentElement.remove(); // Remove the todo item
      // Here you can also add functionality to append it to the 'done' list
    };

    // Append the button to the list item
    listItem.appendChild(completeButton);

    // Append the list item to the todo list
    todoList.appendChild(listItem);

    // Clear the input
    input.value = "";
  }
});
