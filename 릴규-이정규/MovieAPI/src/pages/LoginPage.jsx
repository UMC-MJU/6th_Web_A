import React, { useState, useContext } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../contexts/LoginContext";

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
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: rgba(15, 9, 59, 0.856);
  padding: 20px;
`;

const Form = styled.form`
  background-color: rgba(15, 9, 59, 0.856);
  width: 500px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
    gap: 10px;
  }
`;

const Input = styled.input`
  padding: 15px;
  border-radius: 30px;
  border: 1px solid #ccc;
  font-size: 16px;

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 14px;
  }
`;

const Button = styled.button`
  background-color: #d3d3d3;
  color: black;
  padding: 15px;
  border-radius: 15px;
  border: none;
  font-weight: bold;
  margin-top: 30px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 16px;

  &:hover {
    background-color: #ffcc00;
    color: black;
  }

  &:disabled {
    background-color: #ccc;
    color: #666;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 14px;
    margin-top: 20px;
  }
`;

const Error = styled.div`
  color: red;
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Title = styled.h1`
  color: white;
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 10px;
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

const SidebarLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    color: #ffcc00;
  }
`;

const LoginPage = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [idError, setIdError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { setIsLoggedIn, userInfo } = useContext(LoginContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasError = false;

    if (id === "") {
      setIdError("아이디를 입력해주세요");
      hasError = true;
    } else {
      setIdError("");
    }

    if (password === "") {
      setPasswordError("비밀번호를 입력해주세요");
      hasError = true;
    } else {
      setPasswordError("");
    }

    if (hasError) {
      return;
    }

    if (userInfo && id === userInfo.id && password === userInfo.password) {
      setIsLoggedIn(true);
      navigate("/");
    } else {
      setPasswordError("로그인 정보가 일치하지 않습니다");
    }
  };

  const handleSidebarLinkClick = (path) => {
    navigate(path);
    setSidebarOpen(false);
  };

  return (
    <Container>
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
      <Form onSubmit={handleSubmit}>
        <Title>로그인 페이지</Title>
        <Input
          type="text"
          placeholder="아이디를 입력해주세요"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        {idError && <Error>{idError}</Error>}
        <Input
          type="password"
          placeholder="비밀번호를 입력해주세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && <Error>{passwordError}</Error>}
        <Button type="submit">로그인</Button>
      </Form>
    </Container>
  );
};

export default LoginPage;
