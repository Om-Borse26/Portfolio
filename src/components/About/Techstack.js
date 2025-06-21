import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiJava,
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiMysql,
} from "react-icons/di";
import {
  SiTailwindcss,
  SiC,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <h2 className="project-heading" style={{ paddingBottom: "20px" }}>
        Programming Languages
      </h2>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiC />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>

      <h2 className="project-heading" style={{ paddingBottom: "20px", paddingTop: "50px" }}>
        Web Technologies
      </h2>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
      </Col>

      <h2 className="project-heading" style={{ paddingBottom: "20px", paddingTop: "50px" }}>
        Databases & Storage
      </h2>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
    </Row>
  );
}

export default Techstack;
