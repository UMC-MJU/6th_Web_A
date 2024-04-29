import Layout from "../components/Layout";
import useMovieData from "../utils//hooks/useMovieData";
import PosterWrapper from "../components/PosterWrapper";

const UpcomingPage = () => {
  const { movieData } = useMovieData("upcoming");

  return (
    <Layout>
      <PosterWrapper movieData={movieData} />
    </Layout>
  );
};

export default UpcomingPage;
