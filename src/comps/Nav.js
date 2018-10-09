import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <nav classNameName="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/projects">Projects</Link>
      </nav>
    );
  }
}
