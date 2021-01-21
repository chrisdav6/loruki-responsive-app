import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Features from './pages/features/Features';
import Docs from './pages/docs/Docs';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
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
