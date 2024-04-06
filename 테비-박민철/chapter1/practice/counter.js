const counterStatus = document.querySelector("#counter-status");
const plusButton = document.querySelector("#plus-button");
const minusButton = document.querySelector("#minus-button");

const handleClickPlusButton = () => {
  console.log("plus-button이 클릭됨");
};

const handleClickMinusButton = () => {
  console.log("minus-button이 클릭됨");
};

plusButton.addEventListener("click", handleClickPlusButton);
minusButton.addEventListener("click", handleClickMinusButton);
