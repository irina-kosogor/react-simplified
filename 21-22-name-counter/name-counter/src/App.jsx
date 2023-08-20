import { useState } from "react";
import "./App.css";

function App() {
  const [age, setAge] = useState(37);
  const [name, setName] = useState("");

  const handleAgeChange = (i) => {
    setAge((age) => age + i);
  };

  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <br />
      <button onClick={() => handleAgeChange(-1)}>-</button>
      {`My name is ${name} and I am ${age} years old`}
      <button onClick={() => handleAgeChange(1)}>+</button>
    </div>
  );
}

export default App;
