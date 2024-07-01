import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Toggle from "./Toggle";
import { FaBars, FaTimes } from "react-icons/fa";

const CustomButton = styled.button`
  width: 110px;
  cursor: pointer;
  background: none;
  border: none;
  color: white;
  font-size: 16px;

  &:hover {
    transform: scale(1.1);
  }
`;

const Body = styled.nav`
  background-color: rgba(23, 27, 57, 1);
  height: 60px;
  display: flex;
  align-items: center;
  color: white;
  padding: 0 20px;
  justify-content: space-between;
  width: calc(100vw - 40px);
`;

const Tab = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenuIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
  }
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(23, 27, 57, 1);
  color: white;
  z-index: 1000;
  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0)" : "translateX(-100%)"};
  transition: transform 0.3s ease-in-out;
`;

const CloseIcon = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

const RouteButton = ({ path, text, onClick }) => (
  <Link to={path} onClick={onClick}>
    <CustomButton>{text}</CustomButton>
  </Link>
);

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <Body>
        <RouteButton path="/" text="UMC Movie" onClick={closeMobileMenu} />
        <Tab>
          <RouteButton path="/signup" text="회원가입" />
          <RouteButton path="/popular" text="Popular" />
          <RouteButton path="/now-playing" text="Now Playing" />
          <RouteButton path="/top-rated" text="Top Rated" />
          <RouteButton path="/upcoming" text="Upcoming" />
          <Toggle />
        </Tab>
        <MobileMenuIcon onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </MobileMenuIcon>
      </Body>
      <MobileMenu isOpen={isMobileMenuOpen}>
        <CloseIcon onClick={closeMobileMenu}>
          <FaTimes size={24} />
        </CloseIcon>
        <RouteButton path="/signup" text="회원가입" onClick={closeMobileMenu} />
        <RouteButton path="/popular" text="Popular" onClick={closeMobileMenu} />
        <RouteButton
          path="/now-playing"
          text="Now Playing"
          onClick={closeMobileMenu}
        />
        <RouteButton
          path="/top-rated"
          text="Top Rated"
          onClick={closeMobileMenu}
        />
        <RouteButton
          path="/upcoming"
          text="Upcoming"
          onClick={closeMobileMenu}
        />
        <Toggle />
      </MobileMenu>
    </>
  );
};

export default Header;
