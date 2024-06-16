import styled from "styled-components";

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 10px 15px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

const SignupInput = ({ register, errors, ...props }) => (
  <InputWrapper>
    <Label>{props.label}</Label>
    <Input
      name={props.name}
      type={props.type}
      {...register(props.name, {
        required: props.required && {
          value: true,
          message: `${props.label}을(를) 입력해주세요`,
        },
        pattern: props.pattern,
        validate: props.validate,
        minLength: props.minLength,
      })}
    />
    {errors[props.name] && (
      <ErrorMessage>{errors[props.name].message}</ErrorMessage>
    )}
  </InputWrapper>
);

export default SignupInput;
