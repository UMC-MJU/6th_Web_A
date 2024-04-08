import Modal from "../../component/modal";
import Wrapper from "../../component/wrapper";

const ModalPage = () => {
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
      >
        버튼 열기
      </button>
      <Modal />
    </Wrapper>
  );
};

export default ModalPage;
