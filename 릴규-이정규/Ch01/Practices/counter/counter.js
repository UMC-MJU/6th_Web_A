const numberElement = document.getElementById("number");
const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");

function increase() {
  // 10진수 사용해야 오류를 막을 수 있음
  let currentValue = parseInt(numberElement.textContent, 10);
  numberElement.textContent = currentValue + 1;
}

function decrease() {
  // 10진수 사용해야 오류를 막을 수 있음
  let currentValue = parseInt(numberElement.textContent, 10);
  numberElement.textContent = currentValue - 1;
}

increaseButton.addEventListener("click", increase);
decreaseButton.addEventListener("click", decrease);
