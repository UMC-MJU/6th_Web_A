import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(15, 9, 59, 1);
`;

const Button = styled.button`
  background-color: transparent;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    font-weight: bold;
    transform: scale(1.1);
    color: yellow;
  }
`;

const LeftButton = styled(Button)``;

const RightButton = styled(Button)`
  margin-left: 5px;
`;

const RightButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

function Navbar() {
  return (
    <NavbarContainer>
      <LeftButton as={Link} to="/">
        UMC Movie
      </LeftButton>
      <RightButtonContainer>
        <Button as={Link} to="/signup">
          회원가입
        </Button>
        <Button as={Link} to="/popular">
          Popular
        </Button>
        <Button as={Link} to="/nowplaying">
          Now Playing
        </Button>
        <Button as={Link} to="/toprated">
          Top Rated
        </Button>
        <Button as={Link} to="/upcoming">
          Upcoming
        </Button>
      </RightButtonContainer>
    </NavbarContainer>
  );
}

export default Navbar;
