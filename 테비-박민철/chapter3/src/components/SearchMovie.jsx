import styled from "styled-components";
import { useState } from "react";
import useSearchMovieData from "../utils/hooks/useSearchMovieData";
import PosterWrapper from "./PosterWrapper";

const Title = styled.h1`
  color: white;
`;

const Input = styled.input`
  width: 25vw;
  height: 25px;
  border-radius: 8px;
  padding: 5px 15px;
  background-image: url("/search.png");
  background-repeat: no-repeat;
  background-size: 25px;
  background-position: right 10px top 5px;
`;

const MovieResult = styled.div`
  margin-top: 2rem;
  overflow-y: scroll;
  background-color: rgb(23 27 57);
  width: 75vw;
  height: 600px;
  margin-bottom: 100px;
`;

const SearchMovie = () => {
  const [value, setValue] = useState();
  const { searchMovieData } = useSearchMovieData(value);

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <Title>🎬 Find your movies!</Title>
      <Input onChange={handleOnChange} value={value} />
      {value && (
        <MovieResult>
          <PosterWrapper movieData={searchMovieData} />
        </MovieResult>
      )}
    </>
  );
};

export default SearchMovie;
