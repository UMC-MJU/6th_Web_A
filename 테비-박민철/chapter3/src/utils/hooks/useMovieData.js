import { useState, useEffect } from "react";
import getMovieData from "../axios/getMovieData";

/**
  type : ["popular", "now_playing", "top_rated", "upcoming"]
 */
const useMovieData = (type) => {
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMovieData(type);
        if (response) {
          setMovieData(response.data);
        }
      } catch (error) {
        console.error("Error fetching movie data:", error);
      } finally {
      }
    };

    fetchData();
  }, [type]);

  return { movieData };
};

export default useMovieData;
