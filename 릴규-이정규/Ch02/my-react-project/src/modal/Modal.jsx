import React, { useState } from "react";

function Modal() {
  const [isVisible, setIsVisible] = useState(false);
  const openModal = () => setIsVisible(true);
  const closeModal = () => setIsVisible(false);

  return (
    <div>
      <h1>안녕하세요!</h1>
      <h2>내용내용내용</h2>
      <button onClick={openModal}>버튼 열기</button>

      {/* 모달창 영역*/}
      {isVisible && (
        <div className="modal-wrapper">
          <div className="modal-content">
            <h3>안녕하세요</h3>
            <p>모달 내용은 어쩌고 저쩌고..</p>
            <div className="close-wrapper">
              <button onClick={closeModal}>닫기</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
