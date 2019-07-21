import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Navigation } from './Components'
import { Home, Projects, About } from './Pages'

function App() {
  return (
    <Router>
      <Navigation />
      <Route path="/" exact component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/about" component={About} />
    </Router>
  )
}

export default App;
