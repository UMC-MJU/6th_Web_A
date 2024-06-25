import React from "react";
import styled from "styled-components";

const Pagination = ({ currentPage, totalPages, onPrevPage, onNextPage }) => {
  return (
    <PaginationContainer>
      <PageButton onClick={onPrevPage} disabled={currentPage === 1}>
        이전
      </PageButton>
      <PageInfo>
        {currentPage} / {totalPages}
      </PageInfo>
      <PageButton onClick={onNextPage} disabled={currentPage === totalPages}>
        다음
      </PageButton>
    </PaginationContainer>
  );
};

export default Pagination;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 10px;
  flex-wrap: wrap;
`;

const PageButton = styled.button`
  background-color: ${(props) => (props.disabled ? "#ccc" : "#FFD700")};
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  &:hover {
    background-color: ${(props) => (props.disabled ? "#ccc" : "#FFA500")};
  }
`;

const PageInfo = styled.span`
  color: white;
  font-size: 1rem;
`;
