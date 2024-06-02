import { useContext } from "react";
import { SignupFormContext } from "../contexts/SignupFormContext";

const useFormValidation = () => {
  const { isFormValidated, handleFormChange } = useContext(SignupFormContext);
  return { isFormValidated, handleFormChange };
};

export default useFormValidation;
