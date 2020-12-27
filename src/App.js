import React from "react";
import MovieCard from "./MovieCard";
import "react-bootstrap";
import "./Main.css";
import Description from "./Description";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={MovieCard} />
          <Route path="/description" component={Description} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
