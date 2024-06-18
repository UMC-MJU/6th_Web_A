import axios from "axios";

const getMovieData = async (type, page) => {
  const data = await axios.get(
    `https://api.themoviedb.org/3/movie/${type}?page=${page}&api_key=${
      import.meta.env.VITE_APP_MOVIE_API_KEY
    }`
  );
  return data;
};

export default getMovieData;
