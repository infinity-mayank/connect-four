import React from 'react';
import './App.css';
import {Route, Router, Switch} from "react-router";
import Home from "./pages/Home";
import history from "./history";
import Game from "./pages/Game";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/game" component={Game} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
