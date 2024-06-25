import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Movies from "../components/Movies";
import Pagination from "../components/Pagination";

const PopularPage = () => {
  const [movieData, setMovieData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchMovieData = async () => {
      const data = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${
          import.meta.env.VITE_API_KEY
        }&page=${currentPage}`
      );
      setMovieData(data.data.results);
      setTotalPages(data.data.total_pages);
    };
    fetchMovieData();
  }, [currentPage]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <PageContainer>
      <MovieContainer>
        {movieData.map((data, index) => (
          <Movies data={data} key={index} />
        ))}
      </MovieContainer>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPrevPage={handlePrevPage}
        onNextPage={handleNextPage}
      />
    </PageContainer>
  );
};

export default PopularPage;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: rgb(33, 35, 72);
  min-height: 100vh;
`;

const MovieContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  width: 100%;
`;
