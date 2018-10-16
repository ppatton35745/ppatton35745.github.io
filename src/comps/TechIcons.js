import React from "react";
import { Container, Row, Col } from "reactstrap";

const images = [
  ["./img/dotnet.svg", "dotnet logo"],
  ["./img/bootstrap.svg", "bootrasp logo"],
  ["./img/C_Sharp.svg", "C Sharp logo"],
  ["./img/css-3.svg", "CSS logo"],
  ["./img/git-icon.svg", "git logo"],
  ["./img/github-icon.svg", "github logo"],
  ["./img/grunt.svg", "grunt logo"],
  ["./img/html-5.svg", "html logo"],
  ["./img/javascript.svg", "javascript logo"],
  ["./img/jquery.svg", "jquery logo"],
  ["./img/microsoft-sql-server.svg", "microsoft-sql-server logo"],
  ["./img/npm.svg", "npm logo"],
  ["./img/react.svg", "react logo"],
  ["./img/browserify-icon.svg", "browserify logo"]
];

export default class TechIcons extends React.Component {
  render() {
    return (
      <Container
        id="techs"
        className="container-fluid techLogoSVG content-nav-link"
      >
        <Row>
          <Col>
            <h2 className="section-head">Technologies</h2>
          </Col>
        </Row>
        <div id="tech-logos">
          {images.map(pic => (
            <img key={pic[0]} src={pic[0]} alt={pic[1]} />
          ))}
        </div>
      </Container>
    );
  }
}
