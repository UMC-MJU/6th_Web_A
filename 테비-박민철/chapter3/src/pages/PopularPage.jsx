import React from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "../components/Layout";
import PosterWrapper from "../components/PosterWrapper";
import useMovieData from "../utils/hooks/useMovieData";

const PopularPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page")) || 1;

  const {
    data: movieData,
    isLoading,
    error,
  } = useMovieData("popular", currentPage);

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

export default PopularPage;
