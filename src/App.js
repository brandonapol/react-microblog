import Home from "./routes/Home";
import About from "./routes/About";
import {
    BrowserRouter as
    Router,
    Switch,
    Route,
  } from 'react-router-dom';
import React from "react";

export default function App() {
  return (
    <React.StrictMode>
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
            </Switch>
        </Router>
    </React.StrictMode>
  )
}
