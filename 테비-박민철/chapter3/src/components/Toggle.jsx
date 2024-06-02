import styled from "styled-components";
import useToggle from "../utils/hooks/useToggle";

const ToggleWrapper = styled.div`
  position: relative;
  width: 70px;
  height: 30px;
  background-color: ${({ $toggled }) => ($toggled ? "green" : "#cccccc")};
  border: 1px solid #cccccc;
  border-radius: 15px;
  cursor: pointer;
`;

const ToggleButton = styled.button`
  position: absolute;
  top: 0;
  left: ${({ $toggled }) => ($toggled ? "0px" : "40px")};
  width: 30px;
  height: 30px;
  background-color: #ffffff;
  border: none;
  border-radius: 15px;
  transition: left 0.2s ease-in-out;
`;

const Toggle = () => {
  const { isToggled, handleToggle } = useToggle();

  return (
    <ToggleWrapper $toggled={isToggled} onClick={handleToggle}>
      <ToggleButton $toggled={isToggled} />
    </ToggleWrapper>
  );
};

export default Toggle;
