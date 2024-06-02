import { useContext } from "react";
import { ToggleContext } from "../contexts/ToggleContext";

const useToggle = () => {
  const { isToggled, handleToggle } = useContext(ToggleContext);
  return { isToggled, handleToggle };
};

export default useToggle;
