import React from "react";
import { randomNumberGenerator } from "../utils/transformers";

function DiceRoll(): JSX.Element {
  const [dieCollection, setDieCollection] = React.useState<number[]>([1]);
  const [dieValue, setDie] = React.useState("4");
  const [numberOfDie, setNumberOfDie] = React.useState("1");

  const handleNumberOfDie = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNumberOfDie(e.currentTarget.value);
  };

  const handleRollingDice = (
    e: React.FormEvent<HTMLFormElement>,
    tagNum: number,
  ) => {
    e.preventDefault();
    if (!tagNum) return;
    const list: number[] = [];
    for (let i = 0; i < Number(numberOfDie); i++) {
      list.push(randomNumberGenerator(1, tagNum));
    }
    setDieCollection((prev) => {
      let rolledList: number[] = [];
      if (prev.includes(1)) {
        rolledList = prev.slice(1);
      }
      return rolledList.concat(list);
    });
  };

  const handleSingeDieChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ): void => {
    setDie(e.currentTarget.value);
  };

  return (
    <main className="flex flex-col justify-center bg-gray-200 space-y-6 h-screen">
      <header className="flex justify-center bg-gray-200 p-4">
        <h1 className="font-mono text-3xl">Dungeons & Dragons Dice Roller</h1>
      </header>
      <div className="text-gray-700 bg-gray-200 text-center px-4 py-2 m-2">
        <h2 data-testid="displayNumber" className="text-3xl">
          {`${numberOfDie}d${dieValue} : ${dieCollection} `}
        </h2>
      </div>
      <div className="text-gray-700 slashed-zero bg-gray-200 text-center px-4 py-2 m-2">
        <form onSubmit={(e) => handleRollingDice(e, Number(dieValue))}>
          <div className="relative flex w-48 mx-auto my-0">
            <input
              type="number"
              name="number"
              value={numberOfDie}
              min="1"
              id="number"
              onChange={handleNumberOfDie}
              className="block appearance-none w-20 mx-5 border-gray-500 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-center"
            />
            <select
              name="dice"
              id="dice"
              value={dieValue}
              onChange={handleSingeDieChange}
              className="inline-block flex-1 appearance-none border-gray-500 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-center"
            >
              <option value={4}>D4</option>
              <option value={6}>D6</option>
              <option value={10}>D10</option>
              <option value={12}>D12</option>
              <option value={20}>D20</option>
            </select>
          </div>
          <div className="py-8">
            <button
              type="submit"
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            >
              Roll a Die
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default DiceRoll;
