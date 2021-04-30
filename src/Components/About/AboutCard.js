import React from "react";
import Card from "react-bootstrap/Card";
import "../../styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pasan Kottearachchi </span>
            from <span className="purple"> Sri Lanka</span>
            <br />I am an Undergraduate student following the BEng(Hons) in Software Engineering
            in Informatics Institute of Technology(IIT) affliated with Unversity of Westminster.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Producing Music
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Exploring new stuff
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: '#8685EF' }}>
            "All you need is a destination"{" "}
          </p>
          <footer className="blockquote-footer" style={{ color: '#BCBCBC' }}>Pasan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
