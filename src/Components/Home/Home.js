import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import homeLogo from "../../Assets/home-main.svg";
import homeLogo from "../../Assets/animated-svg.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./TypewritterText";
import NavBar from '../../Components/NavBar'
function Home() {
  return (
    <section>
       <NavBar/>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There! <span className="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Pasan Kottearachchi</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={homeLogo} alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
