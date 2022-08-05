import React from "react";
import "./ExpenseItems.css"

function ExpenseItems(props) {
  const month=props.date.toLocaleString("en-US",{month: 'long'})
  const year=props.date.getFullYear();
  const day=props.date.toLocaleString("en-US",{day: '2-digit'})
  
  return (
    
    <div className="expense-item">
      <div>
        <div>{year}</div>
        <div>{month}</div>
        <div>{day}</div>
        </div>
      <div className="expense-item_description">
        <h2>{props.title}</h2>
        <div className="expense-item_price">{props.price}</div>
      </div>
    </div>
  );
}

export default ExpenseItems;
