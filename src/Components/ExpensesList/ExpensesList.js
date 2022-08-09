import React from 'react'
import ExpenseItems from '../ExpenseItems/ExpenseItems';
import "./ExpensesList.css"

function ExpensesList(props) {
    
  
    if (props.expenses.length===0){
        return < h2 className="expenses-list__fallback">Found No Expenses</h2>

    } 
   
  
  return (
    <ul className='expenses-list'>
        
    {props.expenses.map((expenses) => {
      return (
        <ExpenseItems
          key={expenses.id}
          title={expenses.title}
          amount={expenses.amount}
          date={expenses.date}
        />
      );}
    )}



    </ul>
   
        
        
  );
};

export default ExpensesList
