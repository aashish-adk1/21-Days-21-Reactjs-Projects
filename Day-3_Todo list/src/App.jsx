import { useState} from "react";
import "./App.css";

function App() {
  const [add, setAdd] = useState([]);
  const [type,setType]=useState("");


  function handleInput(event){
    setType(event.target.value);
    
  }
  function addtodo(){
    setAdd([type,...add]);
  }
  
  

  return (
    <>
      <div className="container">
        <div className="addlist">
          <input
            type="text"
            placeholder="Add tasks....."
            className="input"
            onChange={handleInput}
          />
          <button className="btn" onClick={addtodo}>
            Add
          </button>
        </div>
        {add.map((item, id) => (
          <div className="lists" key={id}>
            {item}
            <input type="checkbox" />
            <span>X</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
