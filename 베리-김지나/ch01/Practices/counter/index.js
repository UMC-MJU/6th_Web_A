const num = document.getElementById("num");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");

console.log(num);
console.log(increase);
console.log(decrease);


increase.addEventListener('click', () => {
    const current = parseInt(num.innerText, 10);
    num.innerText = current + 1;
    console.log("increase가 클릭됨");
});

decrease.addEventListener('click', () => {
    const current = parseInt(num.innerText, 10);
    num.innerText = current - 1;
    console.log("decrease가 클릭됨");
});