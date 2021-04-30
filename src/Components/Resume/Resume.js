import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import pdf from "../../Assets/Curiculum Vitae.pdf";

function Resume() {

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fa fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Software Engineering Intern (FIELDR match analyzing Tool)"
              date="August 2020 - May 2021"
              content={[
                "Worked as a Trainee software engineer and crafted the basic system for the software product.",
                "Took over the leading role to handle the team's development process and guide the other interns.",
              ]}
            />
             <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Frontend Developer at FIELDR Match Analyzing tool"
              content={[
                "Worked on creating the frontend-end of the web application using ReactJs (Javascript Framework).",
              ]}
            />
            
            <Resumecontent
              title="Full-Stack Developer in the Project VIUWER"
              content={[
                "Operated on developing the frontend end funtionality of the website using ReactJs (Javascript Framework)",
                "Made the backend structure and made some APIs in Flask (Python Framework) and guided the other team member",
                "Did the Data Cleaning part in before the data was sent to the model to be trained and tested"
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="BEng.(Hons) Software Engineering (Informatics Institute of Technology) "
              date="2018 - Present"
              content={["Level 04 Avarage : 62.6"]}
            />
            <Resumecontent
              title="GCE Advanced Level (Lyceum International School)"
              date="2016 - 2018"
              content={["Information Technology - C" , "Physics- S" , "Combined Mathematics - F" ,
                "General English - B"]}
            />
            <Resumecontent
              title="GCE Ordinary Level (Lyceum International School)"
              date="2013 - 2015"
              content={["2 As (It, English)" , "4 Bs (Buddhism, Science, Maths, Sinhala)","3 Cs (History, Business Studies and Accounting English Literature" ]}
            />
            
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fa fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
