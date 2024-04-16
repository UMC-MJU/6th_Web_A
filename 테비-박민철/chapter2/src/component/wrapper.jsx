/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Wrapper = ({ children, style }) => {
  return (
    <div>
      <Link to="/">돌아가기</Link>
      <div style={{ ...style }}>{children}</div>
    </div>
  );
};

export default Wrapper;
