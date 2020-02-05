import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route}from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import CardList from "./components/CardList/CardList";
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
        <Router>
              <Navbar/>
              <Switch>
                  <Route path="/Characters">
                      <CardList/>
                  </Route>
                  <Route path="/about">
                      <About/>
                  </Route>
              </Switch>
        </Router>
    </div>
  );
}

export default App;
