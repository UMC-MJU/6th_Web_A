import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Poster from "../components/Poster";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const UpcomingPage = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    const fetchUpcomingMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/upcoming",
          {
            params: {
              language: "ko",
              page: "1",
            },
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MWUwYWU5YjczMmQ5NmIxNmE0NTkyNjE4NzQzNDc4OCIsInN1YiI6IjY2MzFlY2U2YWQ1OWI1MDEyYjZjYTEzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jt-7nM-82bQY3V5PX-re8U2MWWA0XnJ51tBVTlcr1jQ",
            },
          }
        );
        setUpcomingMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUpcomingMovies();
  }, []);

  return (
    <Container>
      {upcomingMovies.map((movie, index) => (
        <Poster
          key={index}
          title={movie.title}
          poster_path={movie.poster_path}
          vote_average={movie.vote_average}
          overview={movie.overview}
          index={index}
          movieId={movie.id}
        />
      ))}
    </Container>
  );
};

export default UpcomingPage;
