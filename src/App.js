import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Features from './pages/Features';
import Docs from './pages/Docs';

const App = () => {
  return (
    <div className='app'>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/features'>
          <Features />
        </Route>
        <Route path='/docs'>
          <Docs />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
