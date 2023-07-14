 
require('./bootstrap');

import React from 'react';
import { createRoot } from 'react-dom/client';
import { render } from 'react-dom';
import Card from './Components/Card';
/* import Counter from "./Components/Counter" */

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

