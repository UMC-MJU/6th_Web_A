import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

const MainPageContainer = styled.div`
  background-color: rgba(15, 9, 59, 0.856);
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

const WelcomeMessage = styled.h2`
  color: #fff;
`;

const LowerSection = styled.div`
  width: 100%;
  padding: 50px;
  box-sizing: border-box;
  text-align: center;
  background-color: rgba(15, 9, 59, 0.856);
`;

const Text = styled.p`
  color: white;
  font-size: 30px;
  font-weight: bold;
`;

const SearchInput = styled.input`
  padding: 10px;
  margin-top: 10px;
  width: 40%;
  border: 1px solid #333;
  border-radius: 50px;
`;

function MainPage() {
  return (
    <div>
      <GlobalStyle />
      <MainPageContainer>
        <WelcomeMessage>환영합니다!</WelcomeMessage>
      </MainPageContainer>
      <LowerSection>
        <Text> 🎥 Find your movies !</Text>
        <SearchInput type="text" />
      </LowerSection>
    </div>
  );
}

export default MainPage;
