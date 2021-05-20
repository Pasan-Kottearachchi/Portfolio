import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import pdf from "../../Assets/Pasan Kottearachchi.pdf";

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
                "Worked on creating the frontend-end functionality of the web application using ReactJs (Javascript Framework).",
              ]}
            />
            
            <Resumecontent
              title="Full-Stack Developer in the Project VIUWER"
              content={[
                "Led the team of 6 members",
                "Operated on developing the frontend end funtionality of the website using ReactJs (Javascript Framework)",
                "Made the backend structure and made basic APIs in Flask (Python Framework) and guided the other team member",
                "Cleaned the dataset and made it ready for training and testing process"
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="BEng.(Hons) Software Engineering (Informatics Institute of Technology) "
              date="2018 - Present"
              content={["Programming Principles 1 - ( Python )","Programming Principles 2 - ( JAVA )","Object Oriented Programming","Algorithms","Database Systems","Client-Server Architecture","Mobile App Development","Web Design and Development"]}
            />
            <Resumecontent
              title="GCE Advanced Level (Lyceum International School)"
              date="2016 - 2018"
              content={["Information Technology" , "Physics" , "Combined Mathematics" ,
                "General English"]}
            />
            <Resumecontent
              title="GCE Ordinary Level (Lyceum International School)"
              date="2013 - 2015"
              content={["IT" , "English","Buddhism","Science","Maths","Sinhala","History","Business Studies and Accounting","English Literature"]}
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
