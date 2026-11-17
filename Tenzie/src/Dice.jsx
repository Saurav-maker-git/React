export default function Dice({ value, isHeld, holdDice, id }) {
  return (
    <button
      onClick={() => holdDice(id)}
      className={`border border-black p-3 text-center font-bold text-lg shadow-xl rounded h-[55px] w-[55px] ${isHeld ? "bg-green-300" : "bg-white"}`}
    >
      {value}
    </button>
  );
}
