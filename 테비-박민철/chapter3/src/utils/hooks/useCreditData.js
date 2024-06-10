import { useState, useEffect } from "react";
import getCreditData from "../axios/getCreditData";

/**
  movieId : ["popular", "now_playing", "top_rated", "upcoming"]
 */
const useCreditData = (movieId) => {
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getCreditData(movieId);
        if (response) {
          setMovieData(response.data);
        }
      } catch (error) {
        console.error("잘못돤 요청압니다.");
      }
    };

    fetchData();
  }, [movieId]);

  return { movieData };
};

export default useCreditData;
