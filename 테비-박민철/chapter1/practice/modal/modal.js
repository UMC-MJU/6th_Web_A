const openModal = document.querySelector("#open-modal-button");
const closeModal = document.querySelector("#close-modal-button");
const modal = document.querySelector("#modal-wrapper");

const handleOpenModal = () => {
  modal.style.visibility = "visible";
};

const handleCloseModal = () => {
  modal.style.visibility = "hidden";
};

openModal.addEventListener("click", handleOpenModal);
closeModal.addEventListener("click", handleCloseModal);
