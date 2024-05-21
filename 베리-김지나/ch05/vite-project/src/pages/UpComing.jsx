import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Movies from "../components/Movies";

const UpComingPage = () => {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const fetchMovieData = async () => {
      const data = await axios.get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${
          import.meta.env.VITE_API_KEY
        }`
      );
      setMovieData(data.data);
    };
    fetchMovieData();
  }, []);

  return (
    <MovieContainer>
      {movieData.results?.map((data, index) => (
        <Movies data={data} key={index} />
      ))}
    </MovieContainer>
  );
};

export default UpComingPage;

const MovieContainer = styled.div`
  display: flex;
  background-color: rgb(33, 35, 72);
  padding: 0 5px;
  width: 100%;
  height: auto;
  flex-wrap: wrap;
`;
