import React from "react";
import "./App.css";

function randomNumberGenerator(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function App() {
  const [number, setNumber] = React.useState("");
  const [dieValue, setDie] = React.useState("");

  const handleChange = (tagNum: number) => {
    setNumber(randomNumberGenerator(1, tagNum).toString());
  };

  const handleSingeDieChange = (e: any) => {
    console.log();
    setDie(e.currentTarget.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p data-testid="displayNumber">{number}</p>

        <select
          name="dice"
          id="dice"
          value={dieValue}
          onChange={handleSingeDieChange}
        >
          <option value="">Select a die to roll</option>
          <option value="d4">D4</option>
          <option value="d6">D6</option>
          <option value="d10">D10</option>
          <option value="d12">D12</option>
          <option value="d20">D20</option>
        </select>

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
