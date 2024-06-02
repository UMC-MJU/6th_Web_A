import React, { useEffect, useState } from "react";
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

const PosterWrapper = ({ movieData }) => {
  const { isToggled } = useToggle();
  const [showGreeting, setShowGreeting] = useState(false);

  useEffect(() => {
    if (isToggled) {
      setShowGreeting(true);
      const timer = setTimeout(() => {
        setShowGreeting(false);
      }, 1200);

      return () => clearTimeout(timer);
    }
  }, [isToggled]);

  return (
    <Wrapper>
      {showGreeting ? (
        <Spinner />
      ) : (
        movieData?.results.map((result) => {
          return <Poster key={result.id} element={result} />;
        })
      )}
    </Wrapper>
  );
};

export default PosterWrapper;
