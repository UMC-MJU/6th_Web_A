import styled from "styled-components";
import Layout from "../components/Layout";
import { useLocation } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import getCreditData from "../utils/hooks/useCreditData";

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
  padding: 10vw 20vw;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  display: grid;
  place-items: center;
  gap: 5vw;
  overflow: scroll;
`;

const MovieImage = styled.img`
  width: 20vw;
  height: 100%;
`;

const MovieDescription = styled.div`
  width: 100%;
  padding: 3vw 0;
`;

const CastListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(105px, 1fr));
  gap: 2vw;
  width: 100%;
`;

const CastList = styled.div`
  width: 105px;
  height: 160px;
`;

const CastImage = styled.img`
  width: 87px;
  height: 98px;
  border-radius: 12px 12px 0px 0px;
  object-fit: cover;
`;

const CastDescription = styled.p`
  margin: 0;
`;

const MovieDetailPage = () => {
  const location = useLocation();
  const element = location.state?.element;
  const repeatStar = (count) => {
    return "⭐️".repeat(count);
  };

  // const credits = getCreditData(element?.id);
  // const casts = credits?.movieData?.cast;

  return (
    <>
      {element ? (
        <Layout>
          <BackGround>
            <BackgroundImage $imageUrl={element.backdrop_path}>
              <MovieDetailWrapper>
                <>
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
                </>
                <CastListWrapper>
                  {casts?.map((cast) => {
                    const imageSrc = cast?.profile_path
                      ? `https://image.tmdb.org/t/p/original/${cast?.profile_path}`
                      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7ztleRwzXhFdiwBYqZ8cib9RvEsukVVUS3niN1YQ&s";
                    return (
                      <CastList>
                        <CastImage src={imageSrc} />
                        <CastDescription>{cast?.character}</CastDescription>
                        <CastDescription>{cast?.name}</CastDescription>
                      </CastList>
                    );
                  })}
                </CastListWrapper>
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
