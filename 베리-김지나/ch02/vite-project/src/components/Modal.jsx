import PropTypes from "prop-types";

const Modal = ({ onClose }) => {
  return (
    <div className="modal-wrapper">
      <div className="modal">
        <h2 className="modal-title">안녕하세요!</h2>
        <p className="modal-content">모달 내용은 어쩌고 저쩌고...</p>
        <div className="btn-wrapper">
          <button id="close-btn" onClick={onClose}>
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Modal;
