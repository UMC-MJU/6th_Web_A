import getMovieData from "../axios/getMovieData";
import { useQuery } from "@tanstack/react-query";

/**
  type : ["popular", "now_playing", "top_rated", "upcoming"]
 */
const useMovieData = (type, page) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["movies", type, page],
    queryFn: () => {
      const response = getMovieData(type, page);
      return response;
    },
  });
  return { data, isLoading, error };
};

export default useMovieData;
