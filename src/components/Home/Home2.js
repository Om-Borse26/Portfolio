import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

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
              My journey into the world of technology was sparked by a deep fascination for solving real-world challenges. 
              This curiosity has driven me to dive deep into the exciting realms of <b className="purple">Artificial Intelligence</b> and <b className="purple">Web Development</b>.
              <br />
              <br />I've developed a strong foundation in core programming languages such as
              <i>
                <b className="purple"> Python and Java</b>
              </i>
              <br />
              <br />
              My primary interests lie in building innovative &nbsp;
              <i>
                <b className="purple">AI/ML applications</b> and exploring the future of{" "}
                <b className="purple">
                Virtual Reality.
                </b>
              </i>
              <br />
              <br />
              I'm always eager to apply my skills in <b className="purple">Machine Learning</b> and modern frameworks like
              <i>
                <b className="purple">
                  {" "}
                  Node.js
                </b>
              </i>
              &nbsp; to create impactful and user-centric solutions.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Om-Borse26"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/om-borse-592a0225b"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
