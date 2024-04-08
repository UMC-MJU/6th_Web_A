import { useState } from "react";
import Wrapper from "../../component/wrapper";

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncreaseButton = () => {
    setCount((count) => count + 1);
    console.log("increase 클릭 완료");
  };

  const handleDecreaseButton = () => {
    setCount((count) => count - 1);
    console.log("decrease 클릭 완료");
  };

  return (
    <Wrapper>
      <div className="count">
        <h1>{count}</h1>
      </div>
      <div>
        <button
          onClick={() => {
            handleIncreaseButton();
          }}
        >
          +1
        </button>
        <button onClick={handleDecreaseButton}>-1</button>
      </div>
    </Wrapper>
  );
}

export default Counter;
