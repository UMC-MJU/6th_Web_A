const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const modal = document.querySelector(".modal-wrapper");

openBtn.onclick = function () {
  modal.style.display = "flex";
};

closeBtn.onclick = function () {
  modal.style.display = "none";
};
