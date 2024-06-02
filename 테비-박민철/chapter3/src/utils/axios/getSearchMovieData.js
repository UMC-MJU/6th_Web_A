import axios from "axios";

const VITE_APP_MOVIE_API_KEY = "8e2d1e6d3637d6fb007d0df41e9c5ff5";

const getSearchMovieData = async (query) => {
  const data = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${VITE_APP_MOVIE_API_KEY}&query=${query}&include_adult=false`
  );

  return data;
};

export default getSearchMovieData;
