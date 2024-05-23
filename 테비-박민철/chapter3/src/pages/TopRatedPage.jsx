import Layout from "../components/Layout";
import useMovieData from "../utils//hooks/useMovieData";
import PosterWrapper from "../components/PosterWrapper";

const TopRatedPage = () => {
  const { movieData } = useMovieData("top_rated");

  return (
    <Layout>
      <PosterWrapper movieData={movieData} />
    </Layout>
  );
};

export default TopRatedPage;
