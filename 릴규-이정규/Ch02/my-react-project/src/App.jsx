import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    console.log("버튼이 클릭되었습니다: +1");
    setCount(count + 1);
  };

  const handleDecrease = () => {
    console.log("버튼이 클릭되었습니다: -1");
    setCount(count - 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrease}>+1</button>
      <button onClick={handleDecrease}>-1</button>
    </div>
  );
}

export default App;
