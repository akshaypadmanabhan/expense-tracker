import React,{useState} from "react";
import Card from "../Card/Card";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import "./ExpenseItems.css"


function ExpenseItems(props) {
  // const [title,setTitle]=useState(props.title)
    // const clickHandler = ()=>{
    //   console.log("Clicked!!!!!")
    //   setTitle('Updated');
    // }
  return (
    
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item_description">
        <h2>{props.title}</h2>
        <div className="expense-item_price">{props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  );
}

export default ExpenseItems;
