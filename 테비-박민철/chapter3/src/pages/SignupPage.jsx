import styled from "styled-components";
import Layout from "../components/Layout";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import SignupInput from "../components/SignupInput";

const SignupForm = styled.form`
  display: grid;
  place-items: center;
  margin: auto;
  width: 300px;
  height: 600px;
  padding: 60px 0px;
  border-radius: 12px;
`;

const ErrorMessage = styled.p`
  color: red;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 600;
  color: black;
  background-color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #cccccc;
  }

  &:focus {
    outline: none;
    background-color: #cccccc;
  }
`;

const SignupPage = () => {
  const {
    handleSubmit, // form onSubmit에 들어가는 함수
    register, // onChange 등의 이벤트 객체 생성
    watch, // register를 통해 받은 모든 값 확인
    formState: { errors }, // errors: register의 에러 메세지 자동 출력
  } = useForm();

  const password = useRef(); // ref 생성
  password.current = watch("password");

  const onChangeFormLib = (data) => {
    console.log("회원가입 정보", data);
  };

  return (
    <Layout>
      <SignupForm onSubmit={handleSubmit(onChangeFormLib)}>
        <SignupInput
          label="이름"
          name="name"
          type="text"
          register={register}
          errors={errors}
          required={true}
        />
        <SignupInput
          label="아이디"
          name="username"
          type="text"
          register={register}
          errors={errors}
          required={true}
        />
        <SignupInput
          label="이메일"
          name="email"
          type="email"
          register={register}
          errors={errors}
          required={true}
          pattern={{
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: "유효한 이메일 주소를 입력해주세요",
          }}
        />
        <SignupInput
          label="나이"
          name="age"
          type="number"
          register={register}
          errors={errors}
          required={true}
          min={{ value: 0, message: "나이는 0보다 커야합니다" }}
        />
        <SignupInput
          label="비밀번호"
          name="password"
          type="password"
          register={register}
          errors={errors}
          required={true}
          minLength={{
            value: 8,
            message: "비밀번호 길이를 8자리 이상 입력해주세요",
          }}
        />
        <SignupInput
          label="비밀번호 확인"
          name="passwordConfirm"
          type="password"
          register={register}
          errors={errors}
          required={true}
          validate={(value) =>
            value === password.current || "비밀번호가 일치하지 않습니다"
          }
        />
        <Button type="submit">제출하기</Button>
      </SignupForm>
    </Layout>
  );
};

export default SignupPage;
