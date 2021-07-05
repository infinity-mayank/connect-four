import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import history from "./history";
import Game from "./pages/Game";

function App() {
  return (
    <div className="App">
      <BrowserRouter history={history}>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/game" component={Game} exact/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
