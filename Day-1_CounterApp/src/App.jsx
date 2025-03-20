import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);


  return (
    <>
      <div className="container">
        <h1>Here we count</h1>
        <h1>{count}</h1>
        <div className="btns">
          <button onClick={() => setCount(count - 1)}>Decrease</button>
          <button onClick={() => setCount(0)}>Reset</button>
          <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
      </div>
    </>
  );
}

export default App;
