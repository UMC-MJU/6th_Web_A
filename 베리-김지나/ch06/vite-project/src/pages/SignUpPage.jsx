import { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: "",
    password: "",
    checkPassword: "",
  });

  const [errors, setErrors] = useState({
    name: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      console.log({
        name: form.name,
        email: form.email,
        age: Number(form.age),
        password: form.password,
        checkPassword: form.checkPassword,
      });

      alert("회원가입 완료");
      navigate(`/`);
    }
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
        <MoveToLogin>
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
`;

const SignUpWrapper = styled.div`
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
  height: 35px;
  border: none;
  border-radius: 20px;
  margin: 10px;
  padding-left: 20px;
  ::placeholder {
    color: rgb(202, 202, 202);
  }
`;

const SubmitButton = styled.button`
  background-color: white;
  width: 570px;
  height: 45px;
  border: none;
  border-radius: 20px;
  margin: 10px;
  margin-top: 30px;
  cursor: pointer;
`;

const MoveToLogin = styled.div`
  display: flex;
  color: white;
  p {
    margin: 20px 40px;
  }

  #GoToLogin {
    font-weight: bold;
    cursor: pointer;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 0.9em;
  margin-top: 5px;
`;
