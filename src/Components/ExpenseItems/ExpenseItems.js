import React from "react";
import Card from "../Card/Card";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import "./ExpenseItems.css"

function ExpenseItems(props) {
  return (
    
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item_description">
        <h2>{props.title}</h2>
        <div className="expense-item_price">{props.price}</div>
      </div>
    </Card>
  );
}

export default ExpenseItems;
