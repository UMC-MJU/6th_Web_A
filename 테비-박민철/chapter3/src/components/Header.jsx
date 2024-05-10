import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Toggle from "./Toggle";
import useLogin from "../utils/hooks/useLogin";

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
`;

const Header = () => {
  const { isLoggedIn, handleLogin } = useLogin();
  const RouteButton = ({ path, text }) => {
    return (
      <Link to={path}>
        <CustomButton>{text}</CustomButton>
      </Link>
    );
  };
  return (
    <Body>
      <RouteButton path="/" text="UMC Movie" />
      <Tab>
        <CustomButton
          onClick={handleLogin}
          style={{ color: isLoggedIn ? "yellow" : "white" }}
        >
          {isLoggedIn ? "로그아웃" : "로그인"}
        </CustomButton>
        <RouteButton path="/popular" text="Popular" />
        <RouteButton path="/now-playing" text="Now Playing" />
        <RouteButton path="/top-rated" text="Top Rated" />
        <RouteButton path="/upcoming" text="Upcoming" />
        <Toggle />
      </Tab>
    </Body>
  );
};

export default Header;
