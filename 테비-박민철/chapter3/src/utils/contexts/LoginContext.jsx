import React, { createContext, useState } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn((prevState) => !prevState);
  };

  return (
    <LoginContext.Provider value={{ isLoggedIn, handleLogin }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
