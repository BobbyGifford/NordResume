import React from 'react';
import { NavbarComponent } from './Components/Navbar/Navbar';
import { Home } from './Pages/Home/Home';
import { Projects } from './Pages/Projects/Projects';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';

function App() {
  return (
    <>
      <Router history={history}>
        <NavbarComponent />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/projects' component={Projects} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
