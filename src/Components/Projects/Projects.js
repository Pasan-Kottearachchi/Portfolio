import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import "../../styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Dashboard from "../../Assets/Projects/Dashboard.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Dashboard}
              isBlog={false}
              title="VIUWER"
              description="Used the datasets available in kaggle and trained the the data using the Extra Tree Classifier
              Using SkLearn Library. The model was successful and was able to detect the sentiment polarity of a 
              given sentence. The model was able to recieve an accuracy of 89%."

              link="http://viuwerarcane.us-east-2.elasticbeanstalk.com/"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
