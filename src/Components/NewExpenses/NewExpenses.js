import React, { useState } from "react";
import "./newExpenses.css";
function NewExpenses() {
  const [newTitle, setNewTitle] = useState("");
  const [newDate, setNewDate] = useState("");
  const [newAmount, setNewAmount] = useState("");

  const titleChangeHandler = (e) => {
    setNewTitle(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setNewAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setNewDate(e.target.value);
  };
  return (
    <div className="new-expense">
      <form>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" onChange={titleChangeHandler} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="1"
              step="1"
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2024-12-12"
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
}

export default NewExpenses;
