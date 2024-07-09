import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css';

export default function NewExpense(props) {
    const saveExpenseDataHandler=(enteredExpenseData)=>{
       const ExpenseData={
            ...enteredExpenseData
            
        };
        props.onaddExpense(ExpenseData)
    };
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  )
}
