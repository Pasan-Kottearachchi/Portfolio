import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import "../../styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="light-grey">Skillset </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Techstack iconName="devicon-java-plain"  />
          <Techstack iconName="devicon-python-plain-wordmark " />
          <Techstack iconName="devicon-javascript-plain " />
          <Techstack iconName="devicon-react-original-wordmark" />
          <Techstack iconName="devicon-flask-original" />
          <Techstack iconName="devicon-mysql-plain" />
          <Techstack iconName="devicon-git-plain-wordmark" />
          <Techstack iconName="devicon-android-plain" />
          <Techstack iconName="devicon-bootstrap-plain-wordmark" />
        </Row>
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Techstack iconName="devicon-visualstudio-plain" />
          <Techstack iconName="devicon-intellij-plain" />
          <Techstack iconName="devicon-webstorm-plain" />
          <Techstack iconName="devicon-pycharm-plain" />
          <Techstack iconName="devicon-github-plain" />
        </Row>
        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default About;
