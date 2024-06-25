import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../App";

const LoginPage = () => {
  const [form, setForm] = useState({
    id: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    id: "",
    password: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);

  const validateForm = (form) => {
    const errors = {};

    if (form.id.trim() === "") {
      errors.id = "아이디를 입력해주세요!";
    }
    if (form.password.trim() === "") {
      errors.password = "비밀번호를 입력해주세요!";
    } else if (typeof form.password !== "string") {
      errors.password = "비밀번호는 문자열이어야 합니다.";
    } else if (form.password.length < 4) {
      errors.password = "비밀번호는 최소 4자리 이상이어야 합니다.";
    } else if (form.password.length > 12) {
      errors.password = "비밀번호는 최대 12자리까지 가능합니다.";
    } else if (
      !/[a-zA-Z]/.test(form.password) ||
      !/\d/.test(form.password) ||
      !/[!@#$%^&*(),.?":{}|<>]/.test(form.password)
    ) {
      errors.password =
        "비밀번호는 영어, 숫자, 특수문자를 모두 포함해야 합니다.";
    }

    return errors;
  };

  useEffect(() => {
    const validationErrors = validateForm(form);
    setErrors(validationErrors);
    setIsFormValid(Object.keys(validationErrors).length === 0);
  }, [form]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isFormValid) {
      try {
        const response = await axios.post("http://localhost:8080/auth/login", {
          username: form.id,
          password: form.password,
        });

        if (response.status === 200) {
          const { token, username } = response.data;
          localStorage.setItem("token", token);
          localStorage.setItem("username", username);
          setAuth({ token, username });
          alert("로그인 완료");
          navigate(`/`);
        }
      } catch (error) {
        if (error.response.status === 401) {
          alert("아이디 또는 비밀번호가 잘못되었습니다.");
        } else {
          alert("로그인 실패");
        }
      }
    }
  };

  return (
    <LoginContainer>
      <LoginWrapper>
        <Title>로그인 페이지</Title>
        <Input
          name="id"
          placeholder="아이디를 입력해주세요"
          value={form.id}
          onChange={handleChange}
        />
        {errors.id && <ErrorMessage>{errors.id}</ErrorMessage>}

        <Input
          name="password"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          value={form.password}
          onChange={handleChange}
        />
        {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}

        <LoginButton
          onClick={handleSubmit}
          disabled={!isFormValid}
          $isValid={isFormValid}
        >
          로그인
        </LoginButton>
      </LoginWrapper>
    </LoginContainer>
  );
};

export default LoginPage;

const LoginContainer = styled.div`
  background-color: rgb(38, 49, 90);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginWrapper = styled.div`
  width: 50vw;
  height: calc(100% - 15vh);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  color: white;
  margin-bottom: 30px;
`;

const Input = styled.input`
  background-color: white;
  width: 550px;
  height: 45px;
  border: none;
  border-radius: 20px;
  margin: 10px;
  padding-left: 20px;
  ::placeholder {
    color: rgb(202, 202, 202);
  }
`;

const LoginButton = styled.button.attrs((props) => ({
  $isValid: props.$isValid,
}))`
  background-color: ${(props) => (props.$isValid ? "#FFD700" : "white")};
  width: 570px;
  height: 45px;
  border: none;
  border-radius: 20px;
  margin: 10px;
  margin-top: 30px;
  cursor: ${(props) => (props.$isValid ? "pointer" : "not-allowed")};
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 0.9em;
  margin-top: 5px;
`;
