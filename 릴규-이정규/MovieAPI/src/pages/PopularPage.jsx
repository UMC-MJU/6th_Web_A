import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Poster from "../components/Poster";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const PopularPage = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const navigate = useNavigate(); // 네비게이션 훅 사용

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/popular",
          {
            params: {
              language: "ko",
              page: "1",
            },
            headers: {
              accept: "application/json",
              Authorization: "Bearer YOUR_API_KEY",
            },
          }
        );
        setPopularMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPopularMovies();
  }, []);

  const handlePosterClick = (movieId) => {
    console.log(movieId, "ㅎㅇ");
    navigate(`/movie/${movieId}`); // 동적 라우팅을 이용하여 상세 페이지로 이동
  };

  return (
    <Container>
      {popularMovies.map((movie, index) => (
        <Poster
          key={index}
          title={movie.title}
          poster_path={movie.poster_path}
          vote_average={movie.vote_average}
          overview={movie.overview}
          index={index}
          onClick={() => handlePosterClick(movie.id)} // 클릭 이벤트 추가
        />
      ))}
    </Container>
  );
};

export default PopularPage;
