 
require('./bootstrap');

import React from 'react';
import { createRoot } from 'react-dom/client';
/* import { render } from 'react-dom'; */
import Card from './Components/Card';
import ApiRender from './Components/ApiRender';
/* import Counter from "./Components/Counter" */


/* PRENDO L'URL */
function getCurrentURL () {
  return window.location.href
}
const ural = getCurrentURL()
if (ural === "http://127.0.0.1:8000/"){

  /* Prendo l'elemento taskUrgente */
  const urgCards = document.getElementById('taskU');
  const tasksUrgJson = document.getElementById('taskU').getAttribute('data-tasks-urg');
  const tasksUrg = JSON.parse(tasksUrgJson);
  
  createRoot(urgCards).render(<Card tasks={tasksUrg} />);
  
  /* Prendo l'elemento task non Urgente */
  
  const nuCards = document.getElementById('taskNu');
  const tasksNuJson = document.getElementById('taskNu').getAttribute('data-tasks-Nu');
  const tasksNu = JSON.parse(tasksNuJson);
  
  
  createRoot(nuCards).render(<Card tasks={tasksNu} />);
}
if (ural === "http://127.0.0.1:8000/api-render"){
  const urgCards = document.getElementById('taskU');
  const nuCards = document.getElementById('taskNu');

  /* Renderizzo API */
  const APdata = document.getElementById('renderData');
   
  createRoot(APdata).render(<ApiRender />);
  /* createRoot(urgCards).render(<Card />);
  createRoot(nuCards).render(<Card />); */
   
}
