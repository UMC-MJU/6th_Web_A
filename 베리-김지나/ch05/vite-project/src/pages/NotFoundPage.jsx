import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoMain = () => {
    navigate(`/`);
  };
  return (
    <MessageWrapper>
      <h1>Oops!</h1>
      <p>예상치 못한 에러가 발생했습니다; '~'</p>
      <p className="Not Found">Not Found</p>
      <h2 onClick={handleGoMain}>메인으로 이동하기</h2>
    </MessageWrapper>
  );
};

export default NotFoundPage;

const MessageWrapper = styled.div`
  background-color: rgb(38, 49, 90);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  color: white;

  h1 {
    font-size: 50px;
  }
  .Not.Found {
    font-style: italic;
  }
  h2 {
    cursor: pointer;
  }
`;
