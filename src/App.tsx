import React from 'react';
import './App.css';

function randomNumberGenerator(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function App() {
  const [number, setNumber] = React.useState('')  
    
  const handleChange = () => {
    const randValue = randomNumberGenerator(0, 20)
    setNumber(randValue.toString())
  }

  return (
    <div className="App">
      <header className="App-header">
        <p data-testid="displayD20">{number}</p>
        <button onClick={handleChange}>Roll D20</button>        
      </header>
    </div>
  );
}

export default App;
