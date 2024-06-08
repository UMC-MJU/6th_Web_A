import axios from "axios";

const getCreditData = async (movieId) => {
  const data = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${
      import.meta.env.VITE_APP_MOVIE_API_KEY
    }`
  );

  return data;
};

export default getCreditData;
