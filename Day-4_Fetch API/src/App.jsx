import "./App.css";
import React from "react";
import { useState, useEffect } from "react";

let fetchData;

function App() {
  const [data, setData] = useState(null);

  async function fetchData() {
    const api = "https://randomuser.me/api";

    try {
      const response = await fetch(api);
      if (!response.ok) {
        throw new Error(`Response status:${response.status}`);
      }
      const jsonData = await response.json();
      console.log("Fetched Data:", jsonData);
      setData(jsonData.results[0]);
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  if (!data) return <p>Loading...</p>;

  return (
    <>
      <div className="container">
        <div className="name">
          {data.name.title}
          {data.name.first}
          {data.name.last}
        </div>
        <div className="image">
          <img src={data.picture.medium} alt="image" />
        </div>
        <div className="email">{data.email}</div>
      <button className="addnew" onClick={fetchData}>Generate new</button>
      </div>
    </>
  );
}

export default App;
