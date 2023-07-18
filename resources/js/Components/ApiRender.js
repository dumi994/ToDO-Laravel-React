import React, { useState, useEffect } from 'react';
import "../../css/app.css"
import Card from './Card';
import Form from './Form';
function ApiRender() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [urgTasks, setUrgTasks]= useState([])
  const [nuTasks, setNuTasks]= useState([])
  const handleDelete = (deletedTaskId) => {
    // Rimuovi l'elemento cancellato dall'array delle tasks
    setData(prevTasks => prevTasks.filter(task => task.id !== deletedTaskId));
  };
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/tasks') // Sostituisci con l'URL dell'API reale
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
 
 
  return (
    <div className='container'>
      <div className="row">
        <div className="col-4">
        {/*   <Form></Form> */}
        </div>
        <div className="col-8">
          <div id="taskU"> 
            <div className="cardContainer mt-5">
              <Card tasks={urgTasks} onDelete={handleDelete}/> 
            </div>
          </div>
          <hr className="hrGray"/>
          <div id="taskNu ">
            <div className="cardContainer mt-5">
              <Card tasks={nuTasks} /> 
            </div>
          </div>
          <hr className="hrGray" onDelete={handleDelete}/>
        </div>

      </div>
      

    </div>
  ); 
}

export default ApiRender;