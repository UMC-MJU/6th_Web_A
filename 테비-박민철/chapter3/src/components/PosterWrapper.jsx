import React, { useEffect, useState, useRef, useCallback } from "react";
import styled from "styled-components";
import Poster from "./Poster";
import useToggle from "../utils/hooks/useToggle";
import Spinner from "./Spinner";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20vw, 1fr));
  gap: 20px;
  margin-bottom: 70px;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PageButton = styled.button`
  padding: 10px;
  margin: 0 5px;
  background-color: ${({ isActive }) => (isActive ? "#007bff" : "#fff")};
  color: ${({ isActive }) => (isActive ? "#fff" : "#000")};
  border: 1px solid #007bff;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
    color: #fff;
  }
`;

const ArrowButton = styled.button`
  padding: 10px;
  margin: 0 5px;
  background-color: #fff;
  color: #000;
  border: 1px solid #007bff;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
    color: #fff;
  }
`;

const PosterWrapper = ({ movieData, onPageChange, currentPage }) => {
  const { isToggled } = useToggle();
  const [page, setPage] = useState(currentPage);
  const [infiniteData, setInfiniteData] = useState([]);
  const loaderRef = useRef(null);

  const totalPages = Math.min(movieData?.data.total_pages || 1, 100);
  const itemsPerPage = 10;
  const totalButtonPages = Math.ceil(totalPages / itemsPerPage);

  useEffect(() => {
    if (!isToggled) {
      setInfiniteData(movieData.data.results);
    }
  }, [movieData, isToggled]);

  const currentButtonPage = Math.ceil(page / itemsPerPage);
  const startPage = (currentButtonPage - 1) * itemsPerPage + 1;
  const endPage = Math.min(startPage + itemsPerPage - 1, totalPages);

  const loadMore = useCallback(() => {
    if (page < totalPages) {
      const nextPage = page + 1;
      onPageChange(nextPage);
      setPage(nextPage);
    }
  }, [page, totalPages, onPageChange]);

  useEffect(() => {
    if (!isToggled && loaderRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            loadMore();
          }
        },
        { threshold: 1.0 }
      );

      observer.observe(loaderRef.current);

      return () => {
        if (loaderRef.current) {
          observer.unobserve(loaderRef.current);
        }
      };
    }
  }, [loaderRef, loadMore, isToggled]);

  return (
    <>
      <Wrapper>
        {isToggled
          ? movieData.data.results.map((result) => (
              <Poster key={result.id} element={result} />
            ))
          : infiniteData.map((result) => (
              <Poster key={result.id} element={result} />
            ))}
      </Wrapper>
      {isToggled ? (
        <Pagination>
          {currentButtonPage > 1 && (
            <ArrowButton
              onClick={() =>
                onPageChange((currentButtonPage - 2) * itemsPerPage + 1)
              }
            >
              {"<<"}
            </ArrowButton>
          )}
          {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
            <PageButton
              key={startPage + index}
              isActive={startPage + index === page}
              onClick={() => onPageChange(startPage + index)}
            >
              {startPage + index}
            </PageButton>
          ))}
          {currentButtonPage < totalButtonPages && (
            <ArrowButton
              onClick={() => onPageChange(currentButtonPage * itemsPerPage + 1)}
            >
              {">>"}
            </ArrowButton>
          )}
        </Pagination>
      ) : (
        <div ref={loaderRef}>{page < totalPages && <Spinner />}</div>
      )}
    </>
  );
};

export default PosterWrapper;
