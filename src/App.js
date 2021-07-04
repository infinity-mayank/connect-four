import React from 'react';
import './App.css';
import {Route, Router, Switch} from "react-router";
import Home from "./pages/Home";
import history from "./history";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
