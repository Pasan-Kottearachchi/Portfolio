import React from "react";
import "../styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Developed by Pasan Kottearachchi</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} PK</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Pasan-Kottearachchi"
                style={{ color: "white" }}
              >
                <i className="fa fa-github"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/kottearachchi"
                style={{ color: "white" }}
              >
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/pasan-kottearachchi-63970a198/"
                style={{ color: "white" }}
              >
                <i className="fa fa-linkedin-square"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://instagram.com/pasan_kottearachchi?igshid=1658xcumq4pw5"
                style={{ color: "white" }}
              >
                <i className="fa fa-instagram"></i>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
