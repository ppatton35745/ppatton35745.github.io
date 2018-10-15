import React from "react";
import TechIcons from "./TechIcons";
import Projects from "./Projects";
import Experience from "./Experience";
import MyJumbotron from "./MyJumbotron";

const Home = props => {
  return (
    <div>
      <MyJumbotron />
      <Experience />
      <Projects />
      <TechIcons />
    </div>
  );
};

export default Home;
