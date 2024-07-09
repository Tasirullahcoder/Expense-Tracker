import React from 'react';
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props) {

  
  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date}/>
        <div className='expense-item h2'>{props.title}</div>
        <div className='expense-item__price'>${props.amount}</div>
      
    
    </div>
  );
}

export default ExpenseItem;