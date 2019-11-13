import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from "./authorization/PrivateRoute";
import LoginForm from './components/Login'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login" component={LoginForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
