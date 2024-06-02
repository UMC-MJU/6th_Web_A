import React, { createContext, useState } from "react";

export const SignupFormContext = createContext();

export const SignupFormProvider = ({ children }) => {
  const [isFormValidated, setIsFormValidated] = useState({
    name: false,
    email: false,
    age: false,
    password: false,
    confirmPassword: false,
  });

  const handleFormChange = (field, isValid) => {
    setIsFormValidated((prevState) => ({
      ...prevState,
      [field]: isValid,
    }));
  };

  return (
    <SignupFormContext.Provider value={{ isFormValidated, handleFormChange }}>
      {children}
    </SignupFormContext.Provider>
  );
};

export default SignupFormProvider;
