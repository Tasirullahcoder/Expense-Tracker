import React,{useState} from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';


export default function Expenses(props) {
  const [filteredYear, setfilteredYear] = useState('2020')

  const filterChangeHandler=(selectedYear)=>{
    setfilteredYear(selectedYear)
  }



  let filteredExpenses = props.items.filter((expense) => {
    // Check if expense.date is a valid Date object
    const expenseDate = new Date(expense.date);
    return !isNaN(expenseDate) && expenseDate.getFullYear().toString() === filteredYear;
  });

 
  return (
    <Card className='expenses'>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      <ExpensesChart Expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}/>

    </Card>
  )
}
