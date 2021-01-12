import React from "react";
import MovieCard from "./components/MovieCard";
import "react-bootstrap";
import "./Main.css";
import Description from "./components/Description";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={MovieCard} />
          <Route exact path="/description/:id" component={Description} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
