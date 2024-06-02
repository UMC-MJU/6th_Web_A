import React, { createContext, useState } from "react";

export const ToggleContext = createContext();

export const ToggleProvider = ({ children }) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled((prevState) => !prevState);
  };

  return (
    <ToggleContext.Provider value={{ isToggled, handleToggle }}>
      {children}
    </ToggleContext.Provider>
  );
};

export default ToggleProvider;
