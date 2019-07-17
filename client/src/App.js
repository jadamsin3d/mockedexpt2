import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Landing from './pages/Landing'
import Pokedata from './pages/Pokedata'
import "./App.css"

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/data" component={Pokedata} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
