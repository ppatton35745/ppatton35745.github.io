import React from "react";
import { Container, Row, Col } from "reactstrap";

export default class TechIcons extends React.Component {
  render() {
    return (
      <Container className="container-fluid techLogoSVG">
        <Row>
          <Col>
            <img src="./img/dotnet.svg" alt="dotnet logo" />
          </Col>
          <Col>
            <img src="./img/bootstrap.svg" alt="bootrasp logo" />
          </Col>
          <Col>
            <img src="./img/C_Sharp.svg" alt="C Sharp logo" />
          </Col>
          <Col>
            <img src="./img/css-3.svg" alt="CSS logo" />
          </Col>
          <Col>
            <img src="./img/git-icon.svg" alt="git logo" />
          </Col>
          <Col>
            <img src="./img/github-icon.svg" alt="github logo" />
          </Col>
          <Col>
            <img src="./img/grunt.svg" alt="gru t logo" />
          </Col>
        </Row>
        <Row>
          <Col>
            <img src="./img/html-5.svg" alt="html logo" />
          </Col>
          <Col>
            <img src="./img/javascript.svg" alt="javascript logo" />
          </Col>

          <Col>
            <img src="./img/jquery.svg" alt="jquery logo" />
          </Col>
          <Col>
            <img
              src="./img/microsoft-sql-server.svg"
              alt="microsoft-sql-server logo"
            />
          </Col>
          <Col>
            <img src="./img/npm.svg" alt="npm logo" />
          </Col>
          <Col>
            <img src="./img/react.svg" alt="react logo" />
          </Col>
          <Col>
            <img src="./img/browserify-icon.svg" alt="browserify logo" />
          </Col>
        </Row>
      </Container>
    );
  }
}
