import MovieItem from "../../component/movie-item";
import Wrapper from "../../component/wrapper";
import moviesData from "./movie-data.json";

const MoviePosterPage = () => {
  return (
    <Wrapper
      style={{
        width: "calc(100vw-80px)",
        backgroundColor: "rgb(35 37 76)",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        padding: "40px",
        gap: "40px",
      }}
    >
      {moviesData.results.map((movieData, index) => {
        return (
          <MovieItem key={movieData.id} item={movieData} sequence={index} />
        );
      })}
    </Wrapper>
  );
};

export default MoviePosterPage;
