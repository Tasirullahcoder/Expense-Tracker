import React from 'react'
import './ExpenseDate.css'

export default function ExpenseDate(props) {
    const month=props.date.toLocaleString('en-US',{month:'long'})
    const day=props.date.toLocaleString('en-US',{day:'2-digit'})
    const year=()=>{
      const year = new Date(props.Date);
      console.log(typeof(longDate));  // This returned 'object' which is correct
      year.getFullYear(); // This worked fine now
  }
  return (
    
      <div className='expense-date '>
        <div className='expense-date__month'>{month}</div>
        <div className='expense-date__year'>{year}</div>
        <div className='expense-date__day'>{day}</div>
      </div>
    
  )
}
