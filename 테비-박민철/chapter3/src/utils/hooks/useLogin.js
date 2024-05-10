import { useContext } from "react";
import { LoginContext } from "../contexts/LoginContext";

const useLogin = () => {
  const { isLoggedIn, handleLogin } = useContext(LoginContext);
  return { isLoggedIn, handleLogin };
};

export default useLogin;
