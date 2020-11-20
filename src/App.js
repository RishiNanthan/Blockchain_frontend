import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Home from './components/Home';
import Address from './components/Address';
import Transaction from './components/Transaction';
import Block from './components/Block';
import Other from './components/Other';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/address" component={ Address } />
          <Route path="/transaction" component={ Transaction } />
          <Route path="/block" component={ Block } />
          <Route path="/other" component={ Other } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
