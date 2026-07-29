import { useState } from "react";

export default function ExpenseTracker() {
  const [expenses, setExpenses] = useState([]);

  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const [filterCategory, setFilterCategory] = useState("All");
  const [filterDate, setFilterDate] = useState("");

  const [error, setError] = useState("");

  function addExpense() {
    if (name === "" || amount === "" || category === "" || date === "") {
      setError("Please fill all fields.");
      return;
    }

    const newExpense = {
      id: Date.now(),
      name,
      amount,
      category,
      date,
    };

    setExpenses([...expenses, newExpense]);

    setName("");
    setAmount("");
    setCategory("");
    setDate("");
    setError("");
  }

  const filteredExpenses = expenses.filter((e) => {
    const cat = filterCategory === "All" || e.category === filterCategory;

    const dt = filterDate === "" || e.date === filterDate;

    return cat && dt;
  });

  return (
    <div>
      <h2>Expense Tracker</h2>

      {error && <h3 style={{ color: "red" }}>{error}</h3>}

      <input
        type="text"
        placeholder="Expense Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <br />
      <br />

      <button onClick={addExpense}>Add Expense</button>

      <hr />

      <label>Category : </label>

      <select
        value={filterCategory}
        onChange={(e) => setFilterCategory(e.target.value)}
      >
        <option>All</option>
        <option>Food</option>
        <option>Travel</option>
        <option>Shopping</option>
      </select>

      <br />
      <br />

      <label>Date : </label>

      <input
        type="date"
        value={filterDate}
        onChange={(e) => setFilterDate(e.target.value)}
      />

      <hr />

      {filteredExpenses.length === 0 ? (
        <h3>No Expenses Found</h3>
      ) : (
        filteredExpenses.map((e) => (
          <div key={e.id}>
            <b>{e.name}</b> | ₹{e.amount} | {e.category} | {e.date}
          </div>
        ))
      )}
    </div>
  );
}
