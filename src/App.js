import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="appDiv">
        <h1>PokeDex</h1>
        <Switch>
          <Route exact path="/" component={Landing} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
