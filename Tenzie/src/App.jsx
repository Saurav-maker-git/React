import { useState, useRef, useEffect } from "react";
import Dice from "./Dice";
import { nanoid } from "nanoid"; // Importing nanoid for generating uniques key prop
import Confetti from "react-confetti";

export default function App() {
  // Creating an state to hold dice array
  const [dice, setDice] = useState(() => generateNewDice());
  const buttonRef = useRef(null);

  // Winning
  const gameWon =
    dice.every((singleDice) => singleDice.isHeld) &&
    dice.every((singleDice) => singleDice.value === dice[0].value);

  useEffect(() => {
    if (gameWon) {
      buttonRef.current.focus();
    }
  }, [gameWon]);

  // Creating a function to roll a dice
  function rollDice() {
    if (!gameWon) {
      setDice(function (prevDice) {
        return prevDice.map(function (singleDice) {
          return singleDice.isHeld === true
            ? { ...singleDice }
            : { ...singleDice, value: Math.floor(Math.random() * 6) + 1 };
        });
      });
    } else {
      setDice(() => generateNewDice());
    }
  }

  // Creating a function to change dice isHeld property on every click
  function holdDice(id) {
    setDice(function (prevDice) {
      return prevDice.map(function (singleDice) {
        return singleDice.id === id
          ? { ...singleDice, isHeld: !singleDice.isHeld }
          : singleDice;
      });
    });
  }

  // Declarative Method (Creating an array to hold the 10 dice numbers)
  function generateNewDice() {
    return (
      new Array(10)
        .fill(0)
        .map(() => ({
          value: Math.floor(Math.random() * 6) + 1,
          isHeld: false,
          id: nanoid(),
        }))
    );
  }

  return (
    <div className="flex flex-col bg-gray-50 rounded-md mt-6 sm:mt-10 justify-center items-center gap-2 px-3 py-5 w-full max-w-md mx-auto sm:shadow-lg sm:border sm:border-gray-200">
      {gameWon && <Confetti />}
      <h1 className="font-bold text-[30px] text-gray-950">Tenzie</h1>
      <p className="text-gray-950 text-sm sm:text-base text-center text-wrap self-center px-4">
        Roll until all dice are same. Click each dice to freeze at it's current
        value between rolls
      </p>
      <div className="grid grid-cols-5 gap-3 sm:gap-4 bg-gray-50 p-3 sm:p-5 rounded-md mt-2 w-full justify-items-center">
        {dice.map(function (diceElementsObject) {
          return (
            <Dice
              key={diceElementsObject.id}
              value={diceElementsObject.value}
              isHeld={diceElementsObject.isHeld}
              holdDice={holdDice}
              id={diceElementsObject.id}
            />
          );
        })}
      </div>
      {/* roll dice button */}
      <button
        ref={buttonRef}
        type="button"
        onClick={rollDice}
        className="self-center shadow-2xl px-6 py-2 rounded-md bg-indigo-400 hover:bg-indigo-500 text-black font-bold text-lg cursor-pointer transition w-full sm:w-auto mt-2"
      >
        {gameWon ? "New game" : "Roll dice"}
      </button>
    </div>
  );
}