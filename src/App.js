import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Features from './pages/features/Features';
import Docs from './pages/docs/Docs';

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
