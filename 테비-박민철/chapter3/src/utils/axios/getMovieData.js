import axios from "axios";

const VITE_APP_MOVIE_API_KEY = "8e2d1e6d3637d6fb007d0df41e9c5ff5";

const getMovieData = async (type) => {
  const data = await axios.get(
    `https://api.themoviedb.org/3/movie/${type}?api_key=${VITE_APP_MOVIE_API_KEY}`
  );

  return data;
};

export default getMovieData;
