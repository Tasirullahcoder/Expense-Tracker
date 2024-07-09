import React,{useState} from 'react'
import './ExpenseForm.css';

export default function ExpenseForm(props) {
    
    const [enteredTitle,setenteredTitle]=useState('')
    const [enteredAmount,setenteredAmount]=useState('')
    const [enteredDate,setenteredDate]=useState('') // it also right but we use one state instead of three state

    //const [userInput,setuserInput]=useState({
        //enteredTitle:'',
        //enteredAmount:'',
      //  enteredDate:''
    //})

    const titleChangeHandler=(event)=>{
       setenteredTitle(event.target.value)
    //    setuserInput({
    //     ...userInput,
    //     enteredTitle: event.target.value
    //    })

    }
    const amountChangeHandler=(event)=>{
        setenteredAmount(event.target.value)
        // setuserInput({
        //     ...userInput,
        //     enteredAmount:event.terget.value
        // })

    }
    const dateChangeHandler=(event)=>{
         setenteredDate(event.target.value)

        // setuserInput({
        //     ...userInput,
        //     enteredDate:event.target.value
        // })

    }
    const SubmitHandler=(event)=>{
        event.preventDefault();
        const ExpenseData={
            title:enteredTitle,
            amount:enteredAmount,
            date:enteredDate
        };
       
        props.onSaveExpenseData(ExpenseData)
        setenteredTitle('');
        setenteredAmount('');
        setenteredDate('');
       
        

    };

  return (
    <form onSubmit={SubmitHandler}>
    <div className='new-expense__controls'>
      <div className='new-expense__controls'>
      <label>title</label>
      <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
      </div>

      <div className='new-expense__controls'>
      <label>Amount</label>
      <input type='number' min ='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler}/>
      </div>

      <div className='new-expense__controls'>
      <label>Date</label>
      <input type='date' min='2019-01-01' max='2020-12-31' value={enteredDate} onChange={dateChangeHandler}/>
      </div>
    </div>
    <button className='new-expense__actions' type='submit'>
        addexpense</button>
    </form>
  )
}
