import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/AvatarMaker.svg";
import "../../styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Researching, Developing and Implementing. Here are some stacks I've learnt
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Java, Javascript and Python </b>
              </i>
              <br />
              <br />
              My current focus is on &nbsp;
              <i>
                <b className="purple">
                  Deep Learning and Natural Language Processing.
                </b>
              </i>
              <br />
              <br />
              I also apply my passion for developing products
              with
              <i>
                <b className="purple"> Modern Frameworks</b>
              </i>
                &nbsp; like
              <i>
                <b className="purple"> Node.js, Spring-Boot and Flutter</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
       
      </Container>
    </Container>
  );
}
export default Home2;
