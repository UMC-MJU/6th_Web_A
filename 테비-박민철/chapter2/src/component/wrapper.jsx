/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Wrapper = ({ children }) => {
  return (
    <div>
      <Link to="/">돌아가기</Link>
      <div>{children}</div>
    </div>
  );
};

export default Wrapper;
