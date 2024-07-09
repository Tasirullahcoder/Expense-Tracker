import React from 'react';
import ChartBar from './ChartBar'
import './Chart.css';

export default function Chart(props) {
  const dataPointValue=props.dataPoints.map(dataPoint=>dataPoint.value)
  const TotalMaximum=Math.max(...dataPointValue)

  return (
    <div className='chart'>
      {props.DataPoints.map((DataPoint)=>
      <ChartBar value={DataPoint.value} key={DataPoint.id} maxValue={TotalMaximum} label={DataPoint.label}/> 
      )}
    </div>
  )
}
