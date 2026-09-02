import { useState } from "react";
import "../style/Counter.css";

function Counter() {
  const [count, setCount] = useState(10);

  return (
    <section>
      <h2>Counter</h2>

      <button onClick={() => setCount(count - 1)}>-</button>

      <span>{count}</span>

      <button onClick={() => setCount(count + 1)}>+</button>
    </section>
  );
}

export default Counter;
