import React from "react";
import "./App.css";

function randomNumberGenerator(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function App() {
  const [number, setNumber] = React.useState("");

  const handleChange = (tagNum: number) => {
    setNumber(randomNumberGenerator(1, tagNum).toString());
  };

  return (
    <div className="App">
      <header className="App-header">
        <p data-testid="displayNumber">{number}</p>
        <button onClick={() => handleChange(20)}>Roll D20</button>
        <button onClick={() => handleChange(12)}>Roll D12</button>
        <button onClick={() => handleChange(10)}>Roll D10</button>
        <button onClick={() => handleChange(6)}>Roll D6</button>
        <button onClick={() => handleChange(4)}>Roll D4</button>
      </header>
    </div>
  );
}

export default App;
