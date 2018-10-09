import { Route } from "react-router-dom";
import React, { Component } from "react";
import "./App.css";
import Home from "./comps/Home";
import About from "./comps/About";
import Experience from "./comps/Experience";
import Projects from "./comps/Projects";

export default class ApplicationViews extends Component {
  // Check if credentials are in local storage
  isAuthenticated = () => localStorage.getItem("credentials") !== null;

  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/"
          render={props => {
            return <Home />;
          }}
        />
        <Route
          path="/about"
          render={props => {
            return <About />;
          }}
        />
        <Route
          path="/experience"
          render={props => {
            return <Experience />;
          }}
        />
        <Route
          path="/projects"
          render={props => {
            return <Projects />;
          }}
        />
      </React.Fragment>
    );
  }
}
