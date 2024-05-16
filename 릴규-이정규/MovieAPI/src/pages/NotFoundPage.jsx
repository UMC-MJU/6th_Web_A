import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 120px);
  color: white;
  display: grid;
  place-items: center;
`;

const NotFoundPage = () => {
  return (
    <Container>{/*<Background>잘못된 주소입니다.</Background>*/}</Container>
  );
};

export default NotFoundPage;
