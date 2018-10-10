import React from "react";
import { Jumbotron } from "reactstrap";
import TechIcons from "./TechIcons";

const Home = props => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Philip Patton</h1>
        <p className="lead">Full Stack Software Developer</p>
        <hr className="my-2" />
        <p>Site is under Construction</p>
      </Jumbotron>
      <TechIcons />
    </div>
  );
};

export default Home;
