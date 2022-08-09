import React,{useState} from "react"
import Expenses from "./Components/Expenses/Expenses";
import NewExpenses from "./Components/NewExpenses/NewExpenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  
  
];

function App(props) {
  const [expenses,setExpenses]=useState(DUMMY_EXPENSES);
 

  const addExpenseHandler=(expense)=>{
    setExpenses((prevExpenses)=>{
      return [expense, ...prevExpenses]
      

    })
  }
  return (
    <div>
     <NewExpenses onAddExpense={addExpenseHandler} /> 
     <Expenses expenses ={expenses} />
    </div>
  );
}

export default App;

