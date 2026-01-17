import { useState } from "react";
import "./App.css";

function App() {
  const [num, setNum] = useState("");
  const [fact, setFact] = useState("");

  const calculateFactorial = () => {
    let f = 1;
    for (let i = 1; i <= Number(num); i++) {
      f *= i;
    }
    setFact(f);
  };

  return (
    <div className="app">
      <h2>Factorial Calculator</h2>

      <input
        type="number"
        placeholder="Enter a number"
        onChange={(e) => setNum(e.target.value)}
      />

      <button onClick={calculateFactorial}>Calculate</button>

      <div className="output">Factorial of the number is: {fact}</div>
    </div>
  );
}

export default App;
