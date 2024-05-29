import styled from "styled-components";
import Layout from "../components/Layout";
import SignupInput from "../components/SignupInput";
import {
  ageValidator,
  emailValidator,
  nameValidator,
  passwordValidator,
} from "../utils/validator";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Background = styled.div`
  width: 100%;
  height: calc(100% - 420px);
  color: white;
  display: grid;
  place-items: center;
`;

const Button = styled.button`
  width: 25vw;
  height: 40px;
  border-radius: 8px;
  margin-top: 24px;
  text-align: center;
`;

const SignupPage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isNameValidated, setIsNameValidated] = useState(false);
  const [isEmailValidated, setIsEmailValidated] = useState(false);
  const [isAgeValidated, setIsAgeValidated] = useState(false);
  const [isPasswordValidated, setIsPasswordValidated] = useState(false);
  const [isConfirmPasswordValidated, setIsConfirmPasswordValidated] =
    useState(false);

  const confirmPasswordValidator = () => {
    if (password === confirmPassword) {
      return true;
    } else {
      return false;
    }
  };

  const isFormValidated =
    isNameValidated &&
    isEmailValidated &&
    isAgeValidated &&
    isPasswordValidated &&
    isConfirmPasswordValidated;

  const handleClick = () => {
    console.log({ name, age, email, password });
    alert("회원가입이 성공했습니다!");
    navigate("/");
  };

  return (
    <Layout>
      <Background>
        <h2>회원가입 페이지</h2>
        <form>
          <SignupInput
            id="name"
            label={"이름"}
            placeholder={"이름을 입력해 주세요."}
            validator={nameValidator}
            value={name}
            onChange={setName}
            isValidated={setIsNameValidated}
          />
          <SignupInput
            label={"이메일"}
            placeholder={"이메일을 입력해 주세요."}
            validator={emailValidator}
            value={email}
            onChange={setEmail}
            isValidated={setIsEmailValidated}
          />
          <SignupInput
            label={"나이"}
            placeholder={"나이를 입력해 주세요."}
            validator={ageValidator}
            value={age}
            onChange={setAge}
            isValidated={setIsAgeValidated}
          />
          <SignupInput
            label={"비밀번호"}
            placeholder={"비밀번호를 입력해 주세요."}
            validator={passwordValidator}
            value={password}
            onChange={setPassword}
            isValidated={setIsPasswordValidated}
          />
          <SignupInput
            label={"비밀번호 확인"}
            placeholder={"비밀번호를 확인해 주세요."}
            validator={confirmPasswordValidator}
            value={confirmPassword}
            onChange={setConfirmPassword}
            isValidated={setIsConfirmPasswordValidated}
          />
        </form>
        <Button disabled={!isFormValidated} onClick={handleClick}>
          제출하기
        </Button>
      </Background>
    </Layout>
  );
};

export default SignupPage;
