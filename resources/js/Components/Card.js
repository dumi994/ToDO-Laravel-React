import React, {useState, useEffect} from 'react'
import styles from "../Components/Card"
import axios from 'axios';
const Card = (props ) => {
  const tasks = props.tasks
   
  return (
    <div className="row">
    {
       tasks.map((task, i)=>(
        <div key={i} className={`task ${ task.priority == 1 ?  "taskU" : "taskNu"}  d-flex`}>
          <div className="col-10">
         
              <p className="px-4 pt-2 text-center">{ task.title }</p>
              <p className="px-4 pb-2">{ task.description }</p>
              
              <p className="px-4 pb-2">Stato: { task.status === 0 ? 'non completata' : 'completata' }</p>
          </div>
          <div className="col-2 d-flex align-items-center justify-content-around">
              <p>X</p>
              <p>Y</p>
          </div>
        </div>
      ))
    
    }
      
    </div>
  )
}

export default Card
