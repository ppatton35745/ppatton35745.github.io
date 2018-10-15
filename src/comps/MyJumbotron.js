import React from "react";
import { Jumbotron } from "reactstrap";

const MyJumbotron = props => {
  return (
    <Jumbotron id="home" className="content-nav-link">
      <h1 className="display-3">Philip Patton</h1>

      <img
        src="./img/my-headshot.jpg"
        alt="Ear Ninja Screenshot"
        className="headshot"
      />
      <p className="lead">Full Stack Software Developer</p>
      <hr className="my-2" />
      <p>
        I began my career after college by embarking on a tour in the US Navy, a
        dream I'd held since childhood. I faced many challenges as I grew as a
        person and teammate guided by excellent leadership and the Navy core
        values. My next job as a healthcare analyst exposed me to the world of
        software development where I quickly developed a passion for problem
        solving, data design, and constant process improvement through the use
        of code. I joined Nashville Software School to further that skill set
        and expand into web development.
      </p>
    </Jumbotron>
  );
};

export default MyJumbotron;
