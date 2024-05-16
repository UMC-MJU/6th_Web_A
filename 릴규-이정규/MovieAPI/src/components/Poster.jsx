import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";

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

const Poster = ({ title, poster_path, vote_average, overview, movieId }) => {
  const [isHovered, setIsHovered] = useState(false);
  const roundedRating = vote_average.toFixed(1);
  const navigate = useNavigate();
  const location = useLocation();

  const handleOnClick = () => {
    navigate(`${location.pathname}/${movieId}`);
  };

  return (
    <StyledPoster
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleOnClick}
    >
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : "/path/to/default.jpg"
        }
        alt={title || "Default Title"}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/path/to/default.jpg";
        }}
      />
      {isHovered && (
        <div className="overview">
          <h2>{title || "Default Title"}</h2>
          <p>{overview || "No overview available."}</p>
        </div>
      )}
      <div className="info">
        <h5>{title || "Default Title"}</h5>
        <span>{roundedRating}</span>
      </div>
    </StyledPoster>
  );
};

Poster.defaultProps = {
  title: "Unknown Title",
  poster_path: null,
  vote_average: 0,
  overview: "No overview available.",
};

Poster.propTypes = {
  title: PropTypes.string,
  poster_path: PropTypes.string,
  vote_average: PropTypes.number,
  overview: PropTypes.string,
  index: PropTypes.number,
  movieId: PropTypes.number,
};

export default Poster;
