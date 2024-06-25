function MovieInfo({ movie }) {
  return (
    <div className="movie-details">
      <p>{movie.title}</p>
      <p>{movie.overview}</p>
    </div>
  );
}

export default MovieInfo;
