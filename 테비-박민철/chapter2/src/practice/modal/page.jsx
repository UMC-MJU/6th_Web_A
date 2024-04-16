import { useState } from "react";
import Modal from "../../component/modal";
import Wrapper from "../../component/wrapper";

const ModalPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
                                                                                                                               
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Wrapper>
      <h1>안녕하세요!</h1>
      <p>내용내용내용</p>
      <button
        type="button"
        style={{
          background: "white",
          borderRadius: "4px",
          border: "1px solid gray",
        }}
        onClick={openModal}
      >
        버튼 열기
      </button>
      {isModalOpen && <Modal onClose={closeModal} />}
    </Wrapper>
  );
};

export default ModalPage;
