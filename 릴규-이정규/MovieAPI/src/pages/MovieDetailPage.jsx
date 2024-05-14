import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";

const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 120px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BackgroundImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: ${({ imageUrl }) =>
    `url("https://image.tmdb.org/t/p/w1280/${imageUrl}")`};
  background-size: cover;
  background-position: center;
  filter: blur(8px);
`;

const MovieDetailWrapper = styled.div`
  position: relative;
  width: 60vw;
  max-width: 1000px;
  height: auto;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const MovieImage = styled.img`
  align-self: center;
  width: auto;
  height: 300px;
`;

const MovieDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

// API 요청 함수
async function fetchMovieDetails(movieId) {
  const apiKey = process.env.REACT_APP_MOVIE_API_KEY;
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
  );
  if (!response.ok) {
    throw new Error("Unable to fetch movie details.");
  }
  return response.json();
}

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMovieDetails(id)
      .then(setMovie)
      .catch((err) => {
        console.error(err);
        setError("Failed to load movie details.");
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error)
    return (
      <div>
        {error} <Link to="/">Go back</Link>
      </div>
    );
  if (!movie) return <NotFoundPage />;

  return (
    <Container>
      <BackgroundImage imageUrl={movie.backdrop_path || "default_image.jpg"} />
      <MovieDetailWrapper>
        <MovieImage
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt={movie.title}
        />
        <MovieDescription>
          <h1>{movie.title}</h1>
          <p>Rating: {"⭐️".repeat(Math.floor(Number(movie.vote_average)))}</p>
          <p>Release Date: {movie.release_date}</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
        </MovieDescription>
      </MovieDetailWrapper>
    </Container>
  );
};

export default MovieDetailPage;
