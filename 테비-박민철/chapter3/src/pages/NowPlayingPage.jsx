import Layout from "../components/Layout";
import useMovieData from "../utils//hooks/useMovieData";
import PosterWrapper from "../components/PosterWrapper";

const NowPlayingPage = () => {
  const { movieData } = useMovieData("now_playing");

  return (
    <Layout>
      <PosterWrapper movieData={movieData} />
    </Layout>
  );
};

export default NowPlayingPage;
