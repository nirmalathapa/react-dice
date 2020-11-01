import React from "react";
import "./App.css";

function randomNumberGenerator(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function App() {
  const [number, setNumber] = React.useState("0");
  const [dieValue, setDie] = React.useState("");

  const handleChange = (e: any, tagNum: number) => {
    e.preventDefault();
    if (!tagNum) return;
    setNumber(randomNumberGenerator(1, tagNum).toString());
  };

  const handleSingeDieChange = (e: any) => {
    setDie(e.currentTarget.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h3>Dungeons & Dragons Dice Roller</h3>
        <h3 data-testid="displayNumber">{number}</h3>
        <form onSubmit={(e) => handleChange(e, Number(dieValue))}>
          <select
            name="dice"
            id="dice"
            value={dieValue}
            onChange={handleSingeDieChange}
          >
            <option value="">Select a die to roll</option>
            <option value={4}>D4</option>
            <option value={6}>D6</option>
            <option value={10}>D10</option>
            <option value={12}>D12</option>
            <option value={20}>D20</option>
          </select>
          <input type="submit" value="Roll a Die" />
        </form>
      </header>
    </div>
  );
}

export default App;
