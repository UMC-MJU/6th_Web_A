import styled from "styled-components";

const MovieDetails = (props) => {
  const title = props.title;
  const detail = props.detail;

  return (
    <MovieDetail>
      <Title>{title}</Title>
      <Detail>{detail}</Detail>
    </MovieDetail>
  );
};

export default MovieDetails;

const MovieDetail = styled.div`
  position: absolute;
  display: flex;
  width: 240px;
  height: 430px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  flex-direction: column;
  align-items: center;
  border-radius: 6px;
`;

const Title = styled.div`
  margin: 50px auto 30px 20px;
  font-weight: bold;
  font-size: 17px;
`;

const Detail = styled.div`
  margin: 0 20px;
  line-height: 1.4;
  font-size: 17px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 10;
  -webkit-box-orient: vertical;
`;
