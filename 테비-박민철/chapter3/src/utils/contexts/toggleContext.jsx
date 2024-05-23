import React, { createContext, useState } from "react";

export const ToggleContext = createContext();

export const ToggleProvider = ({ children }) => {
  const [isClicked, setIsClicked] = useState(false);

  const toggle = () => {
    setIsClicked((prevState) => !prevState);
  };

  return (
    <ToggleContext.Provider value={{ isClicked, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
};

export default ToggleProvider;
