import Layout from "../components/Layout";
import { useSearchParams } from "react-router-dom";
import useMovieData from "../utils//hooks/useMovieData";
import PosterWrapper from "../components/PosterWrapper";

const NowPlayingPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page")) || 1;

  const {
    data: movieData,
    isLoading,
    error,
  } = useMovieData("now_playing", currentPage);

  const handlePageChange = (page) => {
    setSearchParams({ page });
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading movies</div>;
  return (
    <Layout>
      <PosterWrapper
        movieData={movieData}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
    </Layout>
  );
};

export default NowPlayingPage;
