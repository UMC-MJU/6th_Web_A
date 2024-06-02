import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
`;

const Content = styled.div`
  flex: 1;
`;

const Background = styled.div`
  gap: 20px;
`;

const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <Content>
        <Background>{children}</Background>
      </Content>
      <Footer />
    </Container>
  );
};

export default Layout;
