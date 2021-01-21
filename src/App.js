import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';

const App = () => {
  return (
    <div className='app'>
      <Switch>
        <Route to='/' exact>
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
