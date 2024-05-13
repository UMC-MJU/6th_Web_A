import { useState, useEffect } from "react";
import getSearchMovieData from "../axios/getSearchMovieData";

const useSearchMovieData = (query) => {
  const [searchMovieData, setSearchMovieData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getSearchMovieData(query);
        if (response) {
          setSearchMovieData(response.data);
        }
      } catch (error) {
        console.error("Error fetching movie data:", error);
      } finally {
      }
    };

    fetchData();
  }, [query]);

  return { searchMovieData };
};

export default useSearchMovieData;
