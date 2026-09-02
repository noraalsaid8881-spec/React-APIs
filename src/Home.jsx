import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  function increase() {
    const newCount = count + 1;
    setCount(newCount);
    if(newCount === 5) {
      navigate("/About");
    }
  }


  return (
    <div>
      <h1>Home</h1>
      <p>{count}</p>
      <button onClick={increase}>If You Need Go To About, Click Here</button>
    </div>
  );
}

export default Home;
