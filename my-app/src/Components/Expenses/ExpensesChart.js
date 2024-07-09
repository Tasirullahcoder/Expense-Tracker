import React from 'react'
import Chart from '../Chart/Chart';

export default function ExpensesChart(props) {
    if (!props.expenses || !Array.isArray(props.expenses)) {
        return <p>No expenses to chart</p>; // or some other fallback content
      }
    const ChartDataPoints=[
        {label:'jan',value:0},
        {label:'feb',value:0},
        {label:'march',value:0},
        {label:'apr',value:0},
        {label:'may',value:0},
        {label:'jun',value:0},
        {label:'july',value:0},
        {label:'aug',value:0},
        {label:'sep',value:0},
        {label:'oct',value:0},
        {label:'nov',value:0},
        {label:'dec',value:0}
    ]
    for(const expense of props.expenses){
         // Check if expense is an object and has a 'date' property
    if (typeof expense === 'object' && expense.date instanceof Date) {
        const expenseMonth=expense.data.getMonth();// starting at 0=>jan=>0
        ChartDataPoints[expenseMonth].value += expense.amount;}
     else {
        console.error('Invalid expense format:', expense);
      }
    }
    
  return (
    <Chart dataPoints={ChartDataPoints}/>
  )
}
