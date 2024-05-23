import { useContext } from "react";
import { ToggleContext } from "../contexts/toggleContext";

const useToggle = () => {
  const { isClicked, toggle } = useContext(ToggleContext);
  return { isClicked, toggle };
};

export default useToggle;
