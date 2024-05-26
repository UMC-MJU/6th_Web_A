import React, { useState, useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../contexts/LoginContext";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: rgba(15, 9, 59, 0.856);
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
`;

const Input = styled.input`
  padding: 15px;
  border-radius: 30px;
  border: 1px solid #ccc;
  font-size: 16px;
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
`;

const Error = styled.div`
  color: red;
  font-size: 14px;
`;

const Title = styled.h1`
  color: white;
  text-align: center;
  margin-bottom: 20px;
`;

const LoginPage = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [idError, setIdError] = useState("");
  const [passwordError, setPasswordError] = useState("");
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

  return (
    <Container>
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
