import Axios from 'axios';
import React, {useState, useEffect} from 'react'
import styles from "./Card.module.css"

const Card = (props ) => {
  const tasks = props.tasks
  const [data, setData] = useState([]);
 const [confirm, setConfirm] = useState(false)
  const handleDeleteClick = (id) => {
    props.onClick(); // Apri il popup
    if(!props.confirm){
      setConfirm(true)
 
    }
    props.onDelete(id);
 
  };
  return (
    <div className="row">
    {
       tasks.map((task, i)=>(
        <div key={i} className={`task ${ task.priority == 1 ?  "taskU" : "taskNu"}  d-flex`}>
         
          <div className="col-11">
         
              <p className="px-4 pt-2 text-center">{ task.title }</p>
              <p className="px-4 pb-2">{ task.description }</p>
              
              <p className="px-4 pb-2">Stato: { task.status === 0 ? 'non completata' : 'completata' }</p>
          </div>
          <div className="col-1 d-flex align-items-center justify-content-around">
              {/* <button type="submit" onClick={() => handleDelete(task.id)}>Xelimina</button> */}
              <p><i className={`fa-regular fa-pen-to-square ${styles.editIcon}` } ></i> </p>
              <p>
                <i className={`fa-solid fa-trash ${styles.deleteIcon}`} onClick={()=>handleDeleteClick(task.id)} ></i>
              </p>
              
              
          </div>
        </div>
      ))
    
    }
      
    </div>
  )
}

export default Card