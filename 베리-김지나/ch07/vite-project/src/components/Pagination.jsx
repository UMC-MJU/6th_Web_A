import React from "react";
import styled from "styled-components";

const Pagination = ({ currentPage, totalPages, onPrevPage, onNextPage }) => {
  return (
    <PaginationContainer>
      <Button onClick={onPrevPage} disabled={currentPage === 1}>
        이전
      </Button>
      <PageIndicator>
        페이지 {currentPage} / {totalPages}
      </PageIndicator>
      <Button onClick={onNextPage} disabled={currentPage === totalPages}>
        다음
      </Button>
    </PaginationContainer>
  );
};

export default Pagination;

const PaginationContainer = styled.div`
  background-color: rgb(33, 35, 72);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

const Button = styled.button`
  background-color: ${(props) => (props.disabled ? "#ccc" : "#007BFF")};
  color: ${(props) => (props.disabled ? "#666" : "white")};
  border: none;
  padding: 10px 20px;
  margin: 0 10px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  border-radius: 5px;
  font-size: 16px;

  &:hover {
    background-color: ${(props) => (props.disabled ? "#ccc" : "#0056b3")};
  }
`;

const PageIndicator = styled.span`
  font-size: 16px;
  color: white;
`;
