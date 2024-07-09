import React from 'react'
import './Card.css'

export default function Card(props) {
    const clasese ='Card' + props.className;
  return <div className={clasese}>{props.children}</div>
    
  
}
