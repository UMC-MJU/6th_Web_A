import { useState } from "react";
import MovieInfor from "./MovieInfor";

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
        <h3>{movie.title}</h3>
        <div className="movie-info">
          {isHovered && <MovieInfor movie={movie} />}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
