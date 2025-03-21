import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("Which Color?");
  const c = ["red", "blue", "green", "yellow","purple"];
  
  function random() {
    const ran_dom = Math.floor(Math.random() * 5);
    setColor(c[ran_dom]);

  }

  return (
    <>
      <div className="container">
        <div className="color" style={{ backgroundColor: color }}>
          {color}
        </div>
        <button className="btn" onClick={random}>
          Generate color
        </button>
      </div>
    </>
  );
}

export default App;
