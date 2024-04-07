document.addEventListener("DOMContentLoaded", function () {
  const numberElement = document.getElementById("number");
  const increaseButton = document.getElementById("increase");
  const decreaseButton = document.getElementById("decrease");

  function increase() {
    let currentValue = parseInt(numberElement.textContent, 10);
    numberElement.textContent = currentValue + 1;
  }

  function decrease() {
    let currentValue = parseInt(numberElement.textContent, 10);
    numberElement.textContent = currentValue - 1;
  }

  increaseButton.addEventListener("click", increase);
  decreaseButton.addEventListener("click", decrease);
});
