import styled from "styled-components";
import Layout from "../components/Layout";
import { useLocation } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";

const BackGround = styled.div`
  width: 100vw;
  height: calc(100vh - 120px);
`;

const BackgroundImage = styled.div`
  height: 100%;
  background-image: ${({ $imageUrl }) =>
    `url("https://image.tmdb.org/t/p/w1280/${$imageUrl}")`};
  background-size: cover;
  background-position: center;
`;

const MovieDetailWrapper = styled.div`
  width: 60vw;
  height: calc(100% - 20vw);
  padding: 10vw 25vw;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  display: flex;
  justify-content: space-between;
  gap: 5vw;
`;

const MovieImage = styled.img`
  width: 20vw;
  height: 100%;
`;

const MovieDescription = styled.div`
  width: 100%;
  padding: 3vw 0;
`;

const MovieDetailPage = () => {
  const location = useLocation();
  const element = location.state?.element;
  const repeatStar = (count) => {
    return "⭐️".repeat(count);
  };

  return (
    <>
      {element ? (
        <Layout>
          <BackGround>
            <BackgroundImage $imageUrl={element.backdrop_path}>
              <MovieDetailWrapper>
                <MovieImage
                  src={`https://image.tmdb.org/t/p/original/${element.poster_path}`}
                />
                <MovieDescription>
                  <h2>{element.title}</h2>
                  <p>
                    평점 :{" "}
                    {repeatStar(Math.floor(Number(element.vote_average)))}
                  </p>
                  <p>개봉일 : {element.release_date}</p>
                  <p>줄거리</p>
                  <article>{element.overview}</article>
                </MovieDescription>
              </MovieDetailWrapper>
            </BackgroundImage>
          </BackGround>
        </Layout>
      ) : (
        <NotFoundPage />
      )}
    </>
  );
};

export default MovieDetailPage;
