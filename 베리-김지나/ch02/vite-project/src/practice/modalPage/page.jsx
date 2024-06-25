import { useState } from "react";
import Modal from "../../components/Modal";

const ModalPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    console.log("모달이 켜짐");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    console.log("모달이 꺼짐");
    setIsModalOpen(false);
  };

  return (
    <div className="modal-page">
      <h1>안녕하세요!</h1>
      <p>내용내용내용</p>
      <button id="open-btn" onClick={openModal}>
        버튼 열기
      </button>

      {isModalOpen && <Modal onClose={closeModal} />}
    </div>
  );
};

export default ModalPage;
