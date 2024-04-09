const Modal = ({ onClose }) => {
  return (
    <div
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "grid",
        placeContent: "center",
      }}
    >
      <div
        style={{
          width: "340px",
          height: "140px",
          padding: "30px",
          backgroundColor: "white",
          borderRadius: "4px",
        }}
      >
        <h2>안녕하세요</h2>
        <p style={{ marginTop: "20px" }}>모달 내용은 어쩌고 저쩌고..</p>
        <button
          style={{ float: "right", marginTop: "50px" }}
          type="button"
          onClick={onClose}
        >
          닫기
        </button>
      </div>
    </div>
  );
};

export default Modal;
