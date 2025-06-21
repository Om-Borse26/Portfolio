import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Om Borse </span>
            from <span className="purple"> Pune, India.</span>
            <br />
            I am currently pursuing BTech in Computer Engineering at Vishwakarma Institute of Technology with a CGPA of 8.72.
            <br />
            I have a passion for AI, data science, and web development, with a current focus on VR + AI projects and problem solving.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Working on AI/ML Projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Problem Solving & Competitive Programming
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring VR Technologies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Om</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
