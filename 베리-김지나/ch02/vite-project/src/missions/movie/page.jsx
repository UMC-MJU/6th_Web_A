import MovieCard from "../../components/MovieCard";
import { movies } from "./movies";

function MovieList() {
  return (
    <div className="movie-list">
      {movies.results.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
