import "./App.css";
import React from "react";
import { useState, useRef } from "react";

function App() {
  let next = useRef(0);
  const [read, setRead] = useState("");
  const [task, setTask] = useState([]);
  const [toggle,setToggle]=useState(false);

  return (
    <>
      <div className="container">
        <div className="top">
          <input
            type="text"
            className="input"
            placeholder="Enter your task...."
            value={read}
            onChange={(event) => setRead(event.target.value)}
          />
          <button
            className="add-btn"
            onClick={() => {
              if (read === "") {
                alert("please enter a task");
              } else {
                setTask([{ id: next.current++, name: read ,isDone:toggle}, ...task]);
                setRead("");
              }
            }}
          >
            Add Task
          </button>
        </div>
        {task.map((item) => (
          <div className="todos" key={item.id}>
            <div>{item.name}</div>
            <input type="checkbox" onChange={(id)=>task.map((t)=>{
              (t.id===id)?{...t,isDone:!t.toggle}:t
            })}/>
            <button
              className="dlt-btn"
              onClick={() => setTask(task.filter((a) => a.id !== item.id))}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
