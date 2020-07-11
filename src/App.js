import React from 'react';
import { Home } from './Pages/Home/Home';
import { Router, Route } from 'react-router-dom';
import history from './history';

function App() {
  return (
    <>
      <Router history={history}>
        <Route exact path='/' component={Home} />
      </Router>
    </>
  );
}

export default App;
