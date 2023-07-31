import React, { useState, useEffect, useRef } from 'react';
import Axios from 'axios';

import "../../css/app.css"
import Card from './Card';
import Form from './Form';
import Popup from './Popup';
function ApiRender() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [urgTasks, setUrgTasks]= useState([])
  const [nuTasks, setNuTasks]= useState([])
  const [idToDelete, setIdToDelete] = useState(null);
  /* STATE MODAL */
  const [isOpen, setIsOpen] = useState(false);
  const [confirm, setConfirm] = useState(false);

   const togglePopup = () => {
    setIsOpen(!isOpen);
     
  };

  const handleConfirm = (id) => {
    setConfirm(true);
    setIdToDelete(id); // Imposta l'id dell'elemento da eliminare nello stato
    togglePopup()
  };

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/tasks')  
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Errore durante la richiesta API:', error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setUrgTasks(data.filter(task => task.priority === 1));
    setNuTasks(data.filter(task => task.priority === 0))
  }, [data]);
  
  if (loading) {
    return <div>Caricamento in corso...</div>;
  }
 
  const handleDelete = (id) => {
    setConfirm(true)
    setIdToDelete(id)
    console.log(idToDelete);
    if(confirm){

      Axios.delete(`/api/tasks/${id}`)
        .then(response => {
          console.log(`Task con id ${id} cancellata con successo`);
          // Dopo l'eliminazione, devi anche aggiornare lo stato `data` per riflettere il cambiamento
          setData(prevData => prevData.filter(task => task.id !== id));
        })
        .catch(error => {
          console.error(error);
        });
    }
    togglePopup()
  }
  return (
    <> 
      {
       
        isOpen && (
          <Popup
            onClick={togglePopup}
            onConfirm={() => handleConfirm(idToDelete)}
          >
            <div className=''>
              <div className="bg-white popupContent d-flex p-5 justify-content-center">
                <div>
                  <h5 className="text-center">Sicuro di voler eliminare questa task?</h5>
                  <div className="row">
                    <div className="col-6">
                      <div className="btn btn-danger w-100" onClick={()=>handleDelete(idToDelete)}>Si</div>
                    </div>
                    <div className="col-6">
                      <div className="btn btn-success w-100" onClick={()=>togglePopup()} >No</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Popup>
        )
      }
      <div className='container'>
        <div className="row">
          <div className="col-4">
        
          </div>
          <div className="col-8">
            <div id="taskU"> 
              <div className="cardContainer mt-5">
                <Card tasks={urgTasks} onClick={togglePopup} onDelete={handleDelete} /> 
                 
              </div>
            </div>
            <hr className="hrGray"/>
            <div id="taskNu ">
              <div className="cardContainer mt-5">
                <Card tasks={nuTasks} val={confirm} onClick={togglePopup} /> 
              </div>
            </div>
            <hr className="hrGray"  />
          </div>
        </div>
      </div>
    </>
  ); 
}

export default ApiRender;