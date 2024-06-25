const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");
const modal = document.querySelector(".modal-wrapper");

openBtn.addEventListener('click', () => {
    modal.style.display="flex";
});
closeBtn.addEventListener('click', () => {
    modal.style.display="none";
});