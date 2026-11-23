import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
export default function App() {
  const [amountType, setAmountType] = useState("");
  const [transaction, setTransaction] = useState(() => {
    try {
      const savedData = localStorage.getItem("transactions");
      const parsed = savedData ? JSON.parse(savedData) : [];
      return Array.isArray(parsed)
        ? parsed.filter(
            (item) =>
              item &&
              typeof item === "object" &&
              typeof item.id === "string" &&
              typeof item.amount === "number" &&
              (item.typeOfAmount === "debit" ||
                item.typeOfAmount === "credit") &&
              !Number.isNaN(item.amount),
          )
        : [];
    } catch {
      return [];
    }
  });
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transaction));
  }, [transaction]);

  function onSubmit(e) {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    let userAmount = Number(formData.get("userAmount"));

    if (!userAmount || userAmount <= 0 || amountType === "") return;

    setTransaction(function (prev) {
      return [
        ...prev,
        {
          id: nanoid(),
          amount: userAmount,
          typeOfAmount: amountType,
        },
      ];
    });

    e.currentTarget.reset();
    setAmountType("");
  }

  // balance
  /*Here total is accumalator that updates its value based on calculation and 0 is accumalator initial value */
  let balance = transaction.reduce((total, item) => {
    if (!item) return total;
    if (item.typeOfAmount === "credit") {
      return total + item.amount;
    } else {
      return total - item.amount;
    }
  }, 0);

  // Delete Transaction button
  function deleteTransaction(id) {
    setTransaction((prev) => prev.filter((item) => item.id !== id));
  }

  // Helper Function of button
  let getButtonColor = () => {
    if (amountType === "credit") {
      return "bg-green-500";
    } else if (amountType === "debit") {
      return "bg-red-500";
    } else {
      return "bg-blue-400";
    }
  };
  return (
    <div className="flex flex-col justify-center items-center mt-6 sm:mt-10 px-3 sm:px-6">
      <div className="w-full max-w-md sm:max-w-lg border shadow-lg rounded-md p-2 sm:p-3">
        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-2 bg-slate-700 text-white py-4 px-4 sm:py-5 sm:px-5 rounded-t-md"
        >
          <h1 className="text-center text-base sm:text-lg font-bold">
            Expense Tracker
          </h1>
          <span className="text-xs sm:text-sm text-center">
            Add, delete transactions and update your balance
          </span>
          <h2 className="font-bold text-green-500 text-base sm:text-lg mt-2 text-center sm:text-left">
            Available balance: {balance}
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 mt-2">
            <input
              type="number"
              step="any"
              placeholder="Enter Amount"
              name="userAmount"
              className="w-full sm:flex-1 px-3 py-2 rounded-md focus:outline-none focus:ring-1 bg-gray-500"
            />
            <select
              name="transactionType"
              id="transactionType"
              className="w-full sm:w-auto bg-black text-white rounded-md px-3 py-2"
              value={amountType}
              onChange={(e) => setAmountType(e.currentTarget.value)}
            >
              <option value="">--Select--</option>
              <option value="credit">Earning</option>
              <option value="debit">Expense</option>
            </select>
          </div>
          {/* Adding transaction button */}
          <button
            type="submit"
            className={`w-full p-2 mt-3 rounded-md font-bold ${getButtonColor()}`}
          >
            Add transaction
          </button>
        </form>
        {/* Transaction history */}
        <div className="flex flex-col gap-2 bg-slate-700 text-white py-4 px-4 sm:py-5 sm:px-5 rounded-b-md">
          <h2 className="text-center text-sm sm:text-base mt-2 sm:mt-4">
            Transaction History:
          </h2>
          <ul className="flex flex-col gap-2 mt-1 w-full">
            {transaction.map((item) => (
              <li
                key={item.id}
                className="flex flex-wrap sm:flex-nowrap flex-row items-center justify-between gap-2 bg-slate-800 px-3 py-2 rounded-md text-sm sm:text-base"
              >
                <span className="break-all">{item.amount}</span>
                <span>{item.typeOfAmount}</span>
                <button
                  type="button"
                  onClick={() => deleteTransaction(item.id)}
                  className="px-2.5 py-1 bg-red-500 rounded-md text-center text-xs sm:text-sm shrink-0"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}