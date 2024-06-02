import React from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";

const Body = styled.div`
  border-radius: 8px;
  height: 32vw;
  margin: 40px auto;
  aspect-ratio: 2/3;
  background-color: #cccccc;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px 8px 0px 0px;
`;

const Description = styled.div`
  margin-top: -5px;
  height: 40px;
  background-color: rgb(184 198 235);
  border-radius: 0px 0px 8px 8px;
  display: flex;
  padding: 12px;
  width: calc(100% - 24px);
`;

const Title = styled.div`
  width: 70%;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Rate = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row-reverse;
`;

const Poster = ({ element }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClickPoster = () =>
    navigate(`${location.pathname}/${element.id}`, { state: { element } });

  return (
    <Body onClick={handleClickPoster}>
      <Image src={`https://image.tmdb.org/t/p/w300${element.poster_path}`} />
      <Description>
        <Title>
          <span>{element.title}</span>
        </Title>
        <Rate>
          <span>⭐️ {element.vote_average.toFixed(1)}</span>
        </Rate>
      </Description>
    </Body>
  );
};

export default Poster;
