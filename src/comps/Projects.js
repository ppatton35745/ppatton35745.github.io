import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container,
  Row,
  Col
} from "reactstrap";

const Projects = props => {
  return (
    <div className="proj-block">
      <Container id="proj" className="content-nav-link">
        <Row>
          <Col>
            <h2 className="section-head">Projects</h2>
          </Col>
        </Row>

        <Card>
          <CardImg
            top
            width="100%"
            src="./img/ear-ninja-screenshot.jpg"
            alt="Ear Ninja Screenshot"
          />
          <CardBody>
            <CardTitle>
              <a href="https://ear-ninja.herokuapp.com/">Ear Ninja</a>
            </CardTitle>
            <CardSubtitle>
              <a href="github.com/ppatton35745/ear-ninja">
                github.com/ppatton35745/ear-ninja
              </a>
            </CardSubtitle>
            <CardText>
              A musical ear training application for keyboard players with am
              interactive keyboard interface. Ear Ninja challenges users with
              sound questions to be answered on the keyboard and tracks progress
              over time in a game-like format
            </CardText>
            <a href="https://ear-ninja.herokuapp.com/">
              <Button>View Site</Button>
            </a>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
};

export default Projects;
