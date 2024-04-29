import Layout from "../components/Layout";
import PosterWrapper from "../components/PosterWrapper";
import useMovieData from "../utils//hooks/useMovieData";

const PopularPage = () => {
  const { movieData } = useMovieData("popular");

  return (
    <Layout>
      <PosterWrapper movieData={movieData} />
    </Layout>
  );
};

export default PopularPage;
