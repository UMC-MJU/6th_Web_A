import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import axios from "axios";
import Poster from "../components/Poster";
import { useNavigate } from "react-router-dom";

// Sidebar slide-in animation
const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

// Sidebar slide-out animation
const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;

  @media (max-width: 768px) {
    gap: 10px;
    padding: 10px;
  }

  @media (max-width: 480px) {
    gap: 5px;
    padding: 5px;
  }
`;

const MenuIcon = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  width: 30px;
  height: 30px;
  background-color: white;
  display: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: rgba(15, 9, 59, 0.856);
  padding: 20px;
  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0)" : "translateX(-100%)"};
  animation: ${({ isOpen }) => (isOpen ? slideIn : slideOut)} 0.3s forwards;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SidebarLink = styled.div`
  color: white;
  text-decoration: none;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    color: #ffcc00;
  }
`;

const TopRatedPage = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/top_rated",
          {
            params: {
              language: "ko",
              page: "1",
            },
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MWUwYWU5YjczMmQ5NmIxNmE0NTkyNjE4NzQzNDc4OCIsInN1YiI6IjY2MzFlY2U2YWQ1OWI1MDEyYjZjYTEzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jt-7nM-82bQY3V5PX-re8U2MWWA0XnJ51tBVTlcr1jQ",
            },
          }
        );
        setTopRatedMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTopRatedMovies();
  }, []);

  const handleSidebarLinkClick = (path) => {
    navigate(path);
    setSidebarOpen(false); // Close the sidebar when a link is clicked
  };

  return (
    <>
      <MenuIcon onClick={() => setSidebarOpen(!sidebarOpen)}>
        <div>☰</div>
      </MenuIcon>
      <Sidebar isOpen={sidebarOpen}>
        <SidebarLink onClick={() => handleSidebarLinkClick("/")}>
          Home
        </SidebarLink>
        <SidebarLink onClick={() => handleSidebarLinkClick("/popular")}>
          Popular
        </SidebarLink>
        <SidebarLink onClick={() => handleSidebarLinkClick("/now-playing")}>
          Now Playing
        </SidebarLink>
        <SidebarLink onClick={() => handleSidebarLinkClick("/top-rated")}>
          Top Rated
        </SidebarLink>
        <SidebarLink onClick={() => handleSidebarLinkClick("/upcoming")}>
          Upcoming
        </SidebarLink>
      </Sidebar>
      <Container>
        {topRatedMovies.map((movie, index) => (
          <Poster
            key={index}
            title={movie.title}
            poster_path={movie.poster_path}
            vote_average={movie.vote_average}
            overview={movie.overview}
            index={index}
            movieId={movie.id}
          />
        ))}
      </Container>
    </>
  );
};

export default TopRatedPage;
