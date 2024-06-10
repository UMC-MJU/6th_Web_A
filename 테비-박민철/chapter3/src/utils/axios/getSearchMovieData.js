import axios from "axios";

const getSearchMovieData = async (query) => {
  const data = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${
      import.meta.env.VITE_APP_MOVIE_API_KEY
    }&query=${query}&include_adult=false`
  );

  return data;
};

export default getSearchMovieData;
