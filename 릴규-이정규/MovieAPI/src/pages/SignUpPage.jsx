import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
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

const InputConfirm = styled(Input)`
  margin-bottom: 30px;
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

const Message = styled.div`
  color: white;
  text-align: center;
  margin-top: 10px;
`;

const BoldLink = styled(Link)`
  font-weight: bold;
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { setUserInfo } = useContext(LoginContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      setUserInfo({ name, email, age, password });
      alert("회원가입이 성공적으로 완료되었습니다!");
      navigate("/login");
    } else {
      setErrors(newErrors);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!name) newErrors.name = "이름을 입력하세요.";
    if (!email) newErrors.email = "이메일을 입력하세요.";
    else if (!email.includes("@"))
      newErrors.email = "이메일 형식이 올바르지 않습니다.";
    if (!age) newErrors.age = "나이를 입력하세요.";
    else if (!Number.isInteger(parseFloat(age)))
      newErrors.age = "나이는 정수여야 합니다.";
    else if (parseInt(age) < 19) newErrors.age = "19살 이상만 가입 가능합니다.";
    else if (parseInt(age) < 0) newErrors.age = "나이는 음수가 될 수 없습니다.";
    if (!password) newErrors.password = "비밀번호를 입력하세요.";
    else if (password.length < 4 || password.length > 12)
      newErrors.password = "비밀번호는 4자리 이상 12자리 이하이어야 합니다.";
    else if (
      !/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,}$/.test(
        password
      )
    ) {
      newErrors.password = "영어, 숫자, 특수문자를 조합해야 합니다.";
    }
    if (password !== confirmPassword)
      newErrors.confirmPassword = "비밀번호가 일치하지 않습니다.";

    return newErrors;
  };

  const isFormValid =
    Object.keys(errors).length === 0 &&
    name &&
    email &&
    age &&
    password &&
    confirmPassword;

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>회원가입 페이지</Title>
        <Input
          type="text"
          id="name"
          name="name"
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <Error>{errors.name}</Error>}
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
          type="number"
          id="age"
          name="age"
          placeholder="나이"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        {errors.age && <Error>{errors.age}</Error>}
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <Error>{errors.password}</Error>}
        <InputConfirm
          type="password"
          id="confirm-password"
          name="confirm-password"
          placeholder="비밀번호 확인"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {errors.confirmPassword && <Error>{errors.confirmPassword}</Error>}
        <Button type="submit" disabled={!isFormValid}>
          제출하기
        </Button>
        <Message>
          <span>이미 아이디가 있으신가요?</span>
          <span style={{ marginLeft: "10px" }}>
            <BoldLink to="/login">로그인 페이지로 이동하기</BoldLink>
          </span>
        </Message>
      </Form>
    </Container>
  );
};

export default SignUpPage;
