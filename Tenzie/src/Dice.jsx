export default function Dice({ value, isHeld, holdDice, id }) {
  return (
    <button
      onClick={() => holdDice(id)}
      className={`border border-black p-3 text-center font-bold text-lg shadow-xl rounded flex items-center justify-center cursor-pointer transition-transform active:scale-95 h-12 w-12 sm:h-[55px] sm:w-[55px] ${isHeld ? "bg-green-300" : "bg-white"}`}
    >
      {value}
    </button>
  );
}