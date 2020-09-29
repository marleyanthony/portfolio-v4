import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './styles/app.css';
import HomePage from './components/HomePage';
import About from './components/About';


function App() {
  return (
    <Switch>
      <Route
        path="/"
        render={(renderProps) => {
          return (
            <HomePage {...renderProps} />
          );
        }}
        exact />
      <Route
        path="/about"
        render={(renderProps) => {
          return (
            <About {...renderProps} />
          );
        }}
        exact />
    </Switch>
  );
}

export default App;
