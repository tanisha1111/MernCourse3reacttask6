import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Tanisha Ambastha </span>
            from <span className="purple"> Jamshedpur,Jharkhand, India.</span>
            <br /> I am a Third Year student pursuing B.Tech. in IT from VIT
            Vellore.
            <br />
            Additionally, I am enthusiastic about Web Development.
            <br />
            <br />
            Some of my hobbies are
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching shows and movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading novels
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
