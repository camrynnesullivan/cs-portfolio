import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import AboutMe from "./AboutMe";
import Home from "./Home";
import Contact from "./Contact";
import Projects from "./Projects";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/AboutMe" component={AboutMe} />
    <Route path="/Home" component={Home} />
    <Route path="/Contact" component={Contact} />
    <Route path="/Projects" component={Projects} />
  </Switch>
);

export default Main;
