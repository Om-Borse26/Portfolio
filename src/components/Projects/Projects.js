import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Brain Tumor Detection and Visualization"
              description="A comprehensive AI-powered system for brain tumor classification and 3D visualization. Built with Python, using deep learning models for accurate tumor detection and mapping results onto 3D models for better medical analysis and understanding."
              ghLink="https://github.com/Om-Borse26/Brain-Tumor-Detection-And-Visualization"
              demoLink="https://github.com/Om-Borse26/Brain-Tumor-Detection-And-Visualization"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="DDoS Attack Detection and Mitigation"
              description="Advanced cybersecurity project focused on detecting and mitigating DDoS attacks in real-time. Implements machine learning algorithms to identify attack patterns and provides automated response mechanisms to protect network infrastructure."
              ghLink="https://github.com/Om-Borse26/Ddos-Attack-Detection-and-Mitigation"
              demoLink="https://github.com/Om-Borse26/Ddos-Attack-Detection-and-Mitigation"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Laptop Price Prediction"
              description="Machine learning model built with R to predict laptop prices based on various specifications. Uses multiple ML algorithms to analyze market trends and provide accurate price predictions, helping users make informed purchasing decisions."
              ghLink="https://github.com/Om-Borse26/Laptop-Price-Prediction"
              demoLink="https://github.com/Om-Borse26/Laptop-Price-Prediction"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Mess Management System"
              description="Web-based platform built with PHP for managing mess operations efficiently. Features include meal planning, expense tracking, member management, and automated billing. Streamlines the entire mess management process for student accommodations."
              ghLink="https://github.com/Om-Borse26/Mess-Management-System"
              demoLink="https://github.com/Om-Borse26/Mess-Management-System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Multilingual Transliteration Chatbot"
              description="AI-powered chatbot designed for multilingual translation and transliteration. Supports multiple languages and provides real-time translation services. Built with natural language processing techniques to ensure accurate and context-aware translations."
              ghLink="https://github.com/Om-Borse26/Multilingual-Transliteration-Chatbot"
              demoLink="https://github.com/Om-Borse26/Multilingual-Transliteration-Chatbot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Transformo Docs Application"
              description="Document processing application that converts non-machine-readable documents to machine-readable formats. Uses OCR and AI technologies to extract, process, and convert various document types, making them accessible for digital workflows."
              ghLink="https://github.com/Om-Borse26/Transformo-Docs-Application"
              demoLink="https://github.com/Om-Borse26/Transformo-Docs-Application"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
