import React from "react";
import Card from "../Card/Card";
import ExpenseItems from "../ExpenseItems/ExpenseItems";
import "./Expenses.css"

function Expenses(props) {
  return (
    <Card className="expenses">
    
      <ExpenseItems
        title={props.expenses[0].title}
        price={props.expenses[0].amount}
        date={props.expenses[0].date}
      />
      <ExpenseItems
        title={props.expenses[1].title}
        price={props.expenses[1].amount}
        date={props.expenses[1].date}
      />
      <ExpenseItems
        title={props.expenses[2].title}
        price={props.expenses[2].amount}
        date={props.expenses[2].date}
      />
    </Card>
  );
}

export default Expenses;
