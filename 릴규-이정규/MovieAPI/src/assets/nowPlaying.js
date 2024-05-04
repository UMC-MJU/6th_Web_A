import axios from "axios";

const options = {
  method: "GET",
  url: "https://api.themoviedb.org/3/movie/now_playing",
  params: { language: "ko", page: "1" },
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.REACT_APP_MOVIE_DB_TOKEN}`,
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
