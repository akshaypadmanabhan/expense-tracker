import React, { useState } from "react";
import "./newExpenses.css";
function NewExpenses(props) {
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
  const submitHandler=(e)=>{
    e.preventDefault();
    const expenseData={
      title:newTitle,
      amount:newAmount,
      date:new Date(newDate)
    };
    saveExpenseDataHandler(expenseData)
    setNewTitle('')
    setNewAmount('')
    setNewDate('')

  }
  const saveExpenseDataHandler=(newExpenseData)=>{
    const expenseData={
      ...newExpenseData,
      id:Math.random().toString()
    };
    
    props.onAddExpense(expenseData);

  }
   
  return (
    <div className="new-expense">
      <form onSubmit={submitHandler } >
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text"  value={newTitle} onChange={titleChangeHandler} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="1"
              step="1"
              value={newAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2024-12-12"
              value={newDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit" onSubmit={saveExpenseDataHandler}>Add Expense</button>
        </div>
      </form>
    </div>
  );
}

export default NewExpenses;
