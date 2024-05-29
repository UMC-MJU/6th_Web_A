import styled from "styled-components";
import { useState, useEffect } from "react";
import useFormValidation from "../utils/hooks/useFormValidation";

const InputWrapper = styled.div`
  width: 400px;
  display: grid;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  height: 30px;
  border-radius: 8px;
  padding: 0px 10px;
`;

const WarningText = styled.span`
  color: rgb(235 87 88);
`;

const SignupInput = ({
  label,
  placeholder,
  validator,
  value,
  onChange,
  isValidated,
}) => {
  const [warning, setWarning] = useState("");
  // const { handleFormChange } = useFormValidation();

  useEffect(() => {
    if (validator && label !== "비밀번호 확인") {
      const validationResult = validator(value);
      setWarning(validationResult === true ? "" : validationResult);
    }

    if (validator && label === "비밀번호 확인") {
      const validationResult = validator();
      setWarning(
        validationResult === true ? "" : "비밀번호를 다시 확인해 주세요."
      );
    }
  }, [value, validator]);

  useEffect(() => {
    if (!warning) {
      isValidated(true);
    } else {
      isValidated(false);
    }
  }, [warning]);

  const handleChange = (e) => {
    onChange(e.target.value);
  };

  const isPasswordInput = label.includes("비밀번호");

  return (
    <InputWrapper>
      <label>{label}</label>
      <Input
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        type={isPasswordInput && "password"}
      />
      {value && warning && <WarningText>{warning}</WarningText>}
    </InputWrapper>
  );
};

export default SignupInput;
