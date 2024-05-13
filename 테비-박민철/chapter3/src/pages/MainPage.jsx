import styled from "styled-components";
import MainBanner from "../components/MainBanner";
import Layout from "../components/Layout";
import SearchMovie from "../components/SearchMovie";

const Background = styled.div`
  width: 100%;
  height: calc(100% - 420px);
  color: white;
  display: grid;
  place-items: center;
`;

const MainPage = () => {
  return (
    <Layout>
      <MainBanner />
      <Background>
        <SearchMovie />
      </Background>
    </Layout>
  );
};

export default MainPage;
