import React, { useState } from "react";
import Card from "../Card/Card";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import ExpenseItems from "../ExpenseItems/ExpenseItems";
import "./Expenses.css";

function Expenses(props) {
const [filteredYear,setFilteredYear]= useState("2020")
  const changeYearHandler=(selectedYear)=>{
    setFilteredYear(selectedYear);
  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeYear={changeYearHandler}/>
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
    </div>
  );
}

export default Expenses;
