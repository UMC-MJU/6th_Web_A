import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const MovieDetailPage = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;

  const id = useParams().id;
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(id);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?query=${id}&api_key=${API_KEY}&language=ko-KR`
        );
        setMovie(response.data);
      } catch (error) {
        console.error("영화 정보를 가져오는 중 오류가 발생했습니다.", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading) {
    return <p>로딩 중...</p>;
  }

  if (!movie) {
    return <p>영화 정보를 불러올 수 없습니다.</p>;
  }

  const { title, overview, poster_path, vote_average, release_date } = movie;

  const repeatStar = (count) => {
    return "⭐️".repeat(count);
  };

  return (
    <Container>
      <BackgroundImage
        imageUrl={`https://image.tmdb.org/t/p/w500${poster_path}`}
      />
      <DetailWrapper>
        <MoviePoster src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
        <MovieDescription>
          <h3 className="movie-title">{title}</h3>
          <p className="vote-average">
            평점 {repeatStar(Math.floor(Number(vote_average)))}
          </p>
          <p className="release-date">개봉일 {release_date}</p>
          {overview ? (
            <>
              <p className="overview">줄거리</p>
              <p className="overview-content">{overview}</p>
            </>
          ) : (
            <p className="overview-content">
              TMDB에서 제공하는 API에 상세 줄거리 정보가 없습니다.
            </p>
          )}
        </MovieDescription>
      </DetailWrapper>
    </Container>
  );
};

export default MovieDetailPage;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
const BackgroundImage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;
`;

const DetailWrapper = styled.div`
  width: 800px;
  height: calc(100% - 20vw);
  padding: 10vw 25vw;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  display: flex;
  justify-content: space-between;
  gap: 5vw;
`;
const MoviePoster = styled.img`
  width: 450px;
`;

const MovieDescription = styled.div`
  width: 100%;
`;
