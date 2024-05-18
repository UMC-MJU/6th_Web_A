import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: rgba(15, 9, 59, 0.856);
`;

const Form = styled.form`
  background-color: rgba(15, 9, 59, 0.856);
  width: 400px;
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
  background-color: white;
  color: black;
  padding: 15px;
  border-radius: 15px;
  border: none;
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      console.log("Form is valid! Logging in...");
      navigate("/"); // Navigate to the homepage or another page after successful login
    } else {
      setErrors(newErrors);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Email validation
    if (!email) {
      newErrors.email = "이메일을 입력하세요.";
    } else if (!email.includes("@")) {
      newErrors.email = "이메일 형식이 올바르지 않습니다.";
    }

    // Password validation
    if (!password) {
      newErrors.password = "비밀번호를 입력하세요.";
    }

    return newErrors;
  };

  const isFormValid = Object.keys(errors).length === 0 && email && password;

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>로그인 페이지</Title>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <Error>{errors.email}</Error>}
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <Error>{errors.password}</Error>}
        <Button type="submit" disabled={!isFormValid}>
          로그인
        </Button>
      </Form>
    </Container>
  );
};

export default LoginPage;
