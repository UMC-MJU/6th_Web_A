import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [form, setForm] = useState({
    name: "",
    id: "",
    email: "",
    age: "",
    password: "",
    checkPassword: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    id: "",
    email: "",
    age: "",
    password: "",
    checkPassword: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();

  const validateForm = (form) => {
    const errors = {};

    if (form.name.trim() === "") {
      errors.name = "이름을 입력해주세요!";
    }
    if (form.id.trim() === "") {
      errors.id = "아이디를 입력해주세요!";
    }

    if (form.email.trim() === "") {
      errors.email = "이메일을 입력해주세요!";
    } else if (!form.email.includes("@")) {
      errors.email = "이메일 형식에 맞게 다시 입력해주세요!";
    }

    if (form.age.trim() === "") {
      errors.age = "나이를 입력해주세요!";
    } else if (isNaN(form.age)) {
      errors.age = "나이는 숫자로 입력해주세요!";
    } else if (parseInt(form.age) !== parseFloat(form.age)) {
      errors.age = "나이를 실수로 입력할 수 없습니다.";
    } else if (parseInt(form.age) <= 18) {
      errors.age = "19세 이상만 사용 가능합니다!";
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

    if (form.checkPassword.trim() === "") {
      errors.checkPassword = "비밀번호를 다시 입력해 주세요!";
    } else if (typeof form.checkPassword !== "string") {
      errors.checkPassword = "비밀번호 확인은 문자열이어야 합니다.";
    } else if (form.password !== form.checkPassword) {
      errors.checkPassword = "비밀번호가 일치하지 않습니다.";
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
        const response = await axios.post("http://localhost:8080/auth/signup", {
          name: form.name,
          username: form.id,
          email: form.email,
          age: Number(form.age),
          password: form.password,
          passwordCheck: form.checkPassword,
        });

        if (response.status === 201) {
          alert("회원가입 완료");
          navigate(`/login`);
        }
      } catch (error) {
        if (error.response.status === 409) {
          alert("아이디가 이미 존재합니다.");
        } else if (error.response.status === 400) {
          alert("비밀번호가 일치하지 않습니다.");
        } else {
          alert("회원가입 실패");
        }
      }
    }
  };

  const handleGoLogin = () => {
    navigate(`/login`);
  };

  return (
    <SignUpContainer>
      <SignUpWrapper>
        <Title>회원가입 페이지</Title>
        <Input
          name="name"
          placeholder="이름을 입력해주세요"
          value={form.name}
          onChange={handleChange}
        />
        {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
        <Input
          name="id"
          placeholder="아이디를 입력해주세요"
          value={form.id}
          onChange={handleChange}
        />
        {errors.id && <ErrorMessage>{errors.id}</ErrorMessage>}
        <Input
          type="email"
          name="email"
          placeholder="이메일을 입력해주세요"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        <Input
          name="age"
          placeholder="나이를 입력해주세요"
          value={form.age}
          onChange={handleChange}
        />
        {errors.age && <ErrorMessage>{errors.age}</ErrorMessage>}
        <Input
          type="password"
          name="password"
          placeholder="비밀번호를 입력해주세요"
          value={form.password}
          onChange={handleChange}
        />
        {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
        <Input
          type="password"
          name="checkPassword"
          placeholder="비밀번호 확인"
          value={form.checkPassword}
          onChange={handleChange}
        />
        {errors.checkPassword && (
          <ErrorMessage>{errors.checkPassword}</ErrorMessage>
        )}
        <SubmitButton onClick={handleSubmit} disabled={!isFormValid}>
          제출하기
        </SubmitButton>
        <MoveToLogin onClick={handleGoLogin}>
          <p>이미 아이디가 있으신가요?</p>
          <p id="GoToLogin">로그인 페이지로 이동하기</p>
        </MoveToLogin>
      </SignUpWrapper>
    </SignUpContainer>
  );
};

export default SignUpPage;

const SignUpContainer = styled.div`
  background-color: rgb(38, 49, 90);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
`;

const SignUpWrapper = styled.div`
  width: 50vw;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    width: 90vw;
  }
`;

const Title = styled.h2`
  color: white;
  margin-bottom: 30px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
`;

const Input = styled.input`
  background-color: white;
  width: 550px;
  height: 35px;
  border: none;
  border-radius: 20px;
  margin: 10px;
  padding-left: 20px;
  ::placeholder {
    color: rgb(202, 202, 202);
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 30px;
    margin: 8px;
  }
`;

const SubmitButton = styled.button`
  background-color: ${(props) => (props.disabled ? "#ccc" : "#FFD700")};
  width: 570px;
  height: 45px;
  border: none;
  border-radius: 20px;
  margin: 10px;
  margin-top: 30px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  @media (max-width: 768px) {
    width: 100%;
    height: 40px;
    margin: 8px;
  }
`;

const MoveToLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  color: white;
  p {
    margin: 10px;
    text-align: center;
  }

  #GoToLogin {
    font-weight: bold;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    p {
      font-size: 0.9rem;
    }
  }
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 0.9em;
  margin-top: 5px;
  @media (max-width: 768px) {
    font-size: 0.8em;
  }
`;
