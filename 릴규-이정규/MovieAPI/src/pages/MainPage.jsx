import React, { useContext, useState, useCallback } from "react";
import styled, { createGlobalStyle } from "styled-components";
import axios from "axios";
import { UserContext } from "../contexts/UserContext";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: rgba(15, 9, 59, 0.856);
  }
`;

const MainPageContainer = styled.div`
  background-color: black;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WelcomeMessage = styled.h2`
  color: #fff;
`;

const LowerSection = styled.div`
  width: 100%;
  padding: 50px;
  box-sizing: border-box;
  text-align: center;
  background-color: rgba(15, 9, 59, 0.856);
`;

const Text = styled.p`
  color: white;
  font-size: 30px;
  font-weight: bold;
`;

const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 10px;
`;

const SearchInput = styled.input`
  padding: 10px;
  width: 40%;
  border: 1px solid #333;
  border-radius: 50px;
`;

const SearchButton = styled.button`
  width: 50px;
  height: 42px;
  border: none;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: rgb(220, 194, 99);
`;

const SearchResultContainer = styled.div`
  color: white;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Movie = styled.div`
  margin: 5px;
  padding: 10px;
  width: 90%;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  display: flex;
  align-items: center;
`;

const MoviePoster = styled.img`
  width: 100px;
  height: 150px;
  margin-right: 20px;
`;

function debounce(func, delay) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

function MainPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const { user } = useContext(UserContext);

  const fetchMovies = useCallback(async () => {
    if (!searchTerm) return;
    const apiKey = "8e2d1e6d3637d6fb007d0df41e9c5ff5";
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(
      searchTerm
    )}`;

    try {
      const response = await axios.get(url);
      setMovies(response.data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  }, [searchTerm]);

  const debouncedFetchMovies = useCallback(debounce(fetchMovies, 300), [
    fetchMovies,
  ]);

  return (
    <div>
      <GlobalStyle />
      <MainPageContainer>
        <WelcomeMessage>
          {user ? `${user.name}님 환영합니다!` : "환영합니다!"}
        </WelcomeMessage>
      </MainPageContainer>
      <LowerSection>
        <Text> 🎥 Find your movies !</Text>
        <SearchWrapper>
          <SearchInput
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              debouncedFetchMovies();
            }}
          />
          <SearchButton onClick={debouncedFetchMovies}>🔍</SearchButton>
        </SearchWrapper>
        <SearchResultContainer>
          {movies.map((movie) => (
            <Movie key={movie.id}>
              <MoviePoster
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt="Movie Poster"
              />
              <div>
                <strong>{movie.title}</strong> (
                {movie.release_date && movie.release_date.split("-")[0]})
              </div>
            </Movie>
          ))}
        </SearchResultContainer>
      </LowerSection>
    </div>
  );
}

export default MainPage;
