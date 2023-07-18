// app.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Card from './Components/Card';
import ApiRender from './Components/ApiRender';

function App() {
  console.log("render");
  return (
    <Router>
      <Switch>
        <Route path="/">
          <CardPage />
        </Route>
        <Route path="/api-render">
          <ApiRenderPage />
        </Route>
      </Switch>
    </Router>
  );
}

function CardPage() {
  const urgCards = document.getElementById('taskU');
  const tasksUrgJson = urgCards.getAttribute('data-tasks-urg');
  const tasksUrg = JSON.parse(tasksUrgJson);

  return (
    <div>
      <h1>Card Page</h1>
      <Card tasks={tasksUrg} />
    </div>
  );
}

function ApiRenderPage() {
  return (
    <div>
      <h1>API Render Page</h1>
      <ApiRender />
    </div>
  );
}

 