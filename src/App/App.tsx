import React from "react";
import DiceRoll from "../components/DiceRoll";
import Navbar from "../components/Navigation";

function App() {
  return (
    <div className="flex flex-col bg-gray-200 h-screen">
      <Navbar />
      <DiceRoll />
    </div>
  );
}

export default App;
