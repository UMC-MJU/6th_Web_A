import { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import styled from "styled-components";
import Movies from "../components/Movies";

const NowPlayingPage = () => {
  const [movieData, setMovieData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const observer = useRef();

  useEffect(() => {
    const fetchMovieData = async () => {
      setLoading(true);
      const data = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${
          import.meta.env.VITE_API_KEY
        }&page=${currentPage}`
      );
      setMovieData((prevMovies) => [...prevMovies, ...data.data.results]);
      setLoading(false);
    };
    fetchMovieData();
  }, [currentPage]);

  const lastMovieElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setCurrentPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading]
  );

  return (
    <MovieContainer>
      {movieData.map((data, index) => {
        if (movieData.length === index + 1) {
          return (
            <div ref={lastMovieElementRef} key={data.id}>
              <Movies data={data} />
            </div>
          );
        } else {
          return <Movies data={data} key={data.id} />;
        }
      })}
      {loading && <Loading>로딩 중...</Loading>}
    </MovieContainer>
  );
};

export default NowPlayingPage;

const MovieContainer = styled.div`
  display: flex;
  background-color: rgb(33, 35, 72);
  padding: 0 5px;
  width: 100%;
  height: auto;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Loading = styled.div`
  color: white;
  text-align: center;
  width: 100%;
  margin: 20px 0;
`;
