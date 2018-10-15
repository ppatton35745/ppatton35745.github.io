import React, { Component } from "react";
import "./App.css";
import Nav from "./comps/Nav";
import Home from "./comps/Home.js";
import Footer from "./comps/Footer.js";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <Home />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
