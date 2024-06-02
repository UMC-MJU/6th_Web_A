import styled from "styled-components";

const Banner = styled.div`
  height: 50px;
  padding: 0 auto;
  background-color: black;
  display: grid;
  place-content: center;
  color: white;
  width: 100%;
`;

const MainBanner = () => {
  return (
    <Banner>
      <h2>환영합니다</h2>
    </Banner>
  );
};

export default MainBanner;
