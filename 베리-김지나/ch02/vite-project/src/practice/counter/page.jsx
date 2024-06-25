import { useState } from "react";

function CounterPage() {
  const [num, setNum] = useState(0);

  return (
    <div>
      <h2 id="num">{num}</h2>
      <div>
        <button id="increase" onClick={() => setNum(num + 1)}>
          +1
        </button>
        <button id="decrease" onClick={() => setNum(num - 1)}>
          -1
        </button>
      </div>
    </div>
  );
}

export default CounterPage;
