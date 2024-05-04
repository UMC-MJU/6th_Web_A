import React, { useState } from "react";
import styled from "styled-components";

const StyledPoster = styled.div`
  border-radius: 10px;
  width: 250px;
  margin: 16px;
  background-color: #33366d;
  color: white;
  position: relative;
  display: inline-block;

  img {
    max-width: 100%;
    max-height: 100%;
  }

  .overview {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    opacity: 0;
    transition: opacity 0.5s ease;
    box-sizing: border-box;
    padding: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &:hover .overview {
    opacity: 1;
  }

  .overview p {
    margin-top: 15px;
  }

  .overview h2,
  p {
    margin: 0;
    font-size: 16px;
    white-space: pre-line;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .info {
    display: flex;
    padding: 20px;
    justify-content: space-between;
    align-items: center;
  }

  .info h5 {
    margin: 0;
  }

  .info span {
    margin-left: 3px;
  }
`;

const Poster = ({ title, poster_path, vote_average, overview, index }) => {
  const [isHovered, setIsHovered] = useState(false); // hover 상태를 관리하는 상태 변수
  const roundedRating = vote_average.toFixed(1); // 별점 반올림

  return (
    <StyledPoster
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
      {isHovered && (
        <div className="overview">
          <h2>{title}</h2>
          <p>{overview}</p>
        </div>
      )}
      <div className="info">
        <h5>{title}</h5>
        <span>{roundedRating}</span>
      </div>
    </StyledPoster>
  );
};

export default Poster;
