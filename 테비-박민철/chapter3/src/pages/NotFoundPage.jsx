import styled from "styled-components";
import Layout from "../components/Layout";

const Background = styled.div`
  width: 100%;
  height: calc(100vh - 120px);
  color: white;
  display: grid;
  place-items: center;
`;

const NotFoundPage = () => {
  return (
    <Layout>
      <Background>잘못된 주소입니다.</Background>
    </Layout>
  );
};

export default NotFoundPage;
