const counterStatus = document.querySelector("#counter-status");
const plusButton = document.querySelector("#plus-button");
const minusButton = document.querySelector("#minus-button");

const handleClickPlusButton = () => {
  let currentStatus = parseInt(counterStatus.innerHTML);
  currentStatus += 1;
  counterStatus.innerHTML = currentStatus;
};

const handleClickMinusButton = () => {
  let currentStatus = parseInt(counterStatus.innerHTML);
  currentStatus -= 1;
  counterStatus.innerHTML = currentStatus;
};

plusButton.addEventListener("click", handleClickPlusButton);
minusButton.addEventListener("click", handleClickMinusButton);
