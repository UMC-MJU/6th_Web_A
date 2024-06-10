import styled from "styled-components";
import { useState, useEffect } from "react";
import useSearchMovieData from "../utils/hooks/useSearchMovieData";
import PosterWrapper from "./PosterWrapper";
import useDebounce from "../utils/hooks/useDebounce";

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
  text-align: center;
`;

const LoadingText = styled.div`
  margin-top: 200px;
`;

const SearchMovie = () => {
  const [value, setValue] = useState();
  const [searchData, setSearchData] = useState(null);
  const debouncedValue = useDebounce({ value, delay: 500 });

  const { searchMovieData } = useSearchMovieData(debouncedValue);

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (value === "") {
      setSearchData(null);
    } else {
      setSearchData(searchMovieData);
    }
  }, [value, searchMovieData]);

  return (
    <>
      <Title>🎬 Find your movies!</Title>
      <Input onChange={handleOnChange} value={value} />
      {value && (
        <MovieResult>
          {searchData?.total_results > 0 ? (
            <PosterWrapper movieData={searchData} />
          ) : (
            <LoadingText>데이터를 받아오는 중입니다.</LoadingText>
          )}
        </MovieResult>
      )}
    </>
  );
};

export default SearchMovie;
