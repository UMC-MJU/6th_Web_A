import React, { createContext, useState } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  return (
    <LoginContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, userInfo, setUserInfo }}
    >
      {children}
    </LoginContext.Provider>
  );
};
