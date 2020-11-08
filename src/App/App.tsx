import React from "react";

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
    <div className="flex flex-col bg-gray-200 h-screen">
      <main className="flex flex-col justify-center bg-gray-200 h-24 space-y-6 h-screen">
        <header className="flex justify-center bg-gray-200 p-4">
          <h1 className="font-mono text-3xl">Dungeons & Dragons Dice Roller</h1>
        </header>
        <div className="text-gray-700 bg-gray-200 text-center px-4 py-2 m-2">
          <h2 data-testid="displayNumber" className="text-3xl">
            {number}
          </h2>
        </div>
        <div className="text-gray-700 slashed-zero bg-gray-200 text-center px-4 py-2 m-2">
          <form onSubmit={(e) => handleChange(e, Number(dieValue))}>
            <div className="relative">
              <select
                name="dice"
                id="dice"
                value={dieValue}
                onChange={handleSingeDieChange}
                className="block appearance-none w-auto mx-auto border-gray-500 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-center"
              >
                <option value="">Select a die to roll</option>
                <option value={4}>D4</option>
                <option value={6}>D6</option>
                <option value={10}>D10</option>
                <option value={12}>D12</option>
                <option value={20}>D20</option>
              </select>
            </div>
            <div className="py-8">
              <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                Roll a Die
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default App;
