import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TasksPage from './pages/tasks/TasksPage';
import Login from './pages/login';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/tasks">
          <TasksPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
