import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const MovieDetails = (props) => {
  const title = props.title;
  const detail = props.detail;
  const poster_path = props.poster_path;
  const vote_average = props.vote_average;
  const release_date = props.release_date;

  const navigate = useNavigate();

  const handleMovieClick = () => {
    navigate(`${title}`, {
      state: {
        title,
        overview: detail,
        poster_path,
        vote_average,
        release_date,
      },
    });
  };

  return (
    <MovieDetail onClick={handleMovieClick}>
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
  cursor: pointer;
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
