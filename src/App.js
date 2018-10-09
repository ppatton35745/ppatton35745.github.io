import React, { Component } from "react";
import "./App.css";
import Nav from "./comps/Nav";
import ApplicationViews from "./ApplicationViews";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <ApplicationViews />
      </React.Fragment>
    );
  }
}

export default App;
