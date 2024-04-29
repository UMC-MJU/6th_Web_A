import axios from "axios";

const getMovieData = async (type) => {
  const data = await axios.get(
    `https://api.themoviedb.org/3/movie/${type}?api_key=${
      import.meta.env.VITE_APP_MOVIE_API_KEY
    }`
  );

  return data;
};

export default getMovieData;
