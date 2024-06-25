import { useState } from "react";
import MovieInfo from "./MovieInfo";

function MovieCard({ movie }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="card">
      <div
        className="movie-card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="description">
          <span id="movie-title">{movie.title}</span>
          <span id="movie-average">{movie.vote_average}</span>
        </div>

        <div className="movie-info">
          {isHovered && <MovieInfo movie={movie} />}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
