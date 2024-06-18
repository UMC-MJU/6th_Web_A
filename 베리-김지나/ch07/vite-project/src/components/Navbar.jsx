import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../App";

const Navbar = () => {
  const navigate = useNavigate();
  const { auth, setAuth } = useContext(AuthContext);

  const handleLogout = () => {
    setAuth({ token: null, username: null });
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate(`/login`);
  };

  const toMain = () => {
    navigate(`/`);
  };

  return (
    <Header>
      <Logo onClick={toMain}>UMC Movie</Logo>
      <MenuBar>
        {auth.token ? (
          <>
            <Menu onClick={handleLogout}>로그아웃</Menu>
          </>
        ) : (
          <>
            <Menu onClick={() => navigate(`/login`)}>로그인</Menu>
            <Menu onClick={() => navigate(`/signup`)}>회원가입</Menu>
          </>
        )}
        <Menu onClick={() => navigate(`/popular`)}>Popular</Menu>
        <Menu onClick={() => navigate(`/nowplaying`)}>Now Playing</Menu>
        <Menu onClick={() => navigate(`/toprated`)}>Top Rated</Menu>
        <Menu onClick={() => navigate(`/upcoming`)}>Upcoming</Menu>
      </MenuBar>
    </Header>
  );
};

export default Navbar;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(21, 30, 63);
  width: 100%;
  height: 40px;
  position: fixed;
  top: 0;
  left: 0;
`;

const Logo = styled.p`
  color: white;
  margin-left: 10px;
  cursor: pointer;
`;

const MenuBar = styled.div`
  display: flex;
`;

const Menu = styled.button`
  color: white;
  margin: 0 10px;
  font-size: 13px;
  cursor: pointer;
  background: transparent;
  border: none;

  &:hover {
    font-size: 15px;
    font-weight: bold;
  }
`;
