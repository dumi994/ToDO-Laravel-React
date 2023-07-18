import Axios from 'axios';
import React, {useState, useEffect} from 'react'
import styles from "../Components/Card"
const Card = (props ) => {
  const tasks = props.tasks
 
  const handleDelete = (id) => {
    Axios.delete(`/api/tasks/${id}`) // Sostituisci con l'URL dell'endpoint di cancellazione dell'elemento
      .then(response => {
        // Gestisci la risposta in base alle tue esigenze
        console.log('Elemento cancellato con successo.');
        onDelete(itemId); // Richiama una funzione passata come props per aggiornare lo stato dei dati nel componente padre, ad esempio rimuovendo l'elemento cancellato dalla lista.
      })
      .catch(error => {
        console.error('Errore durante la cancellazione:', error);
      });
  };

 
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
              <p onClick={() => handleDelete(task.id)}>Xelimina</p>
              <p>Ymodifica  </p>
          </div>
        </div>
      ))
    
    }
      
    </div>
  )
}

export default Card
