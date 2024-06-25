import styled from "styled-components";

const MainPage = () => {
  return (
    <MainContainer>
      <TextContainer>
        <WelcomeText>환영합니다</WelcomeText>
      </TextContainer>

      <SearchContainer>
        <SearchText>📽 Find your movies️ !</SearchText>
        <Search>
          <SearchInput />
          <SearchButton>🔍</SearchButton>
        </Search>
      </SearchContainer>
    </MainContainer>
  );
};

export default MainPage;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
  background-color: rgb(9, 18, 31);
`;

const WelcomeText = styled.h2`
  color: white;
  font-weight: bold;
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 60vh;
  background-color: rgb(38, 49, 90);
`;

const SearchText = styled.h1`
  color: white;
  font-weight: bold;
  margin: 50px;
`;

const Search = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const SearchInput = styled.input`
  width: 350px;
  height: 30px;
  border: none;
  border-radius: 20px;
`;

const SearchButton = styled.button`
  width: 25px;
  height: 25px;
  border: none;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: rgb(220, 194, 99);
`;
