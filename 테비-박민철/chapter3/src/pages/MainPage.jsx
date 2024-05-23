import styled from "styled-components";
import MainBanner from "../components/MainBanner";
import Layout from "../components/Layout";

const Background = styled.div`
  width: 100%;
  height: calc(100% - 420px);
  color: white;
  display: flex;
  justify-content: center;
`;

const MainPage = () => {
  return (
    <Layout>
      <MainBanner />
      <Background>{/* There's something gonna be happen.. */}</Background>
    </Layout>
  );
};

export default MainPage;
