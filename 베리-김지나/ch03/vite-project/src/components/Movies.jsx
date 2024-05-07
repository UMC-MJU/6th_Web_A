import { useState } from "react";
import styled from "styled-components";
import MovieDetails from "./MovieDetails";

const Movies = (props) => {
  const { original_title, overview, poster_path, vote_average } = props.data;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Movie
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && <MovieDetails title={original_title} detail={overview} />}
      <MoviePoster src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
      <MovieInfo>
        <MovieTitle>{original_title}</MovieTitle>
        <MovieTitle>{vote_average}</MovieTitle>
      </MovieInfo>
    </Movie>
  );
};

export default Movies;

const Movie = styled.div`
  background-color: rgb(35, 38, 73);
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 250px;
  height: 430px;
`;

const MoviePoster = styled.img`
  width: 240px;
  height: 350px;
  border-radius: 6px 6px 0 0;
`;

const MovieInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  margin: 0;
`;

const MovieTitle = styled.p`
  font-size: 15px;
  font-weight: 700;
  color: white;
`;
