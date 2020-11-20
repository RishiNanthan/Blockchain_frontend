import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Home from './components/Home';
import Address from './components/Address';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/address" component={ Address } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
