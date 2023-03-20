import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Olá a todos, chamo-me<span className="purple"> Rui Tavares </span>
            e sou de <span className="purple"> Gondomar, Portugal.</span>
            <br />Eu sou um Júnior em Eletronica , Automação e Computadores , apaixonado por Web Developing.
            Com vastos conhecimentos em Eletronica e Web.
            <br />
            <br />
            Além de Programar, algumas outras atividades que adoro fazer!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jogar jogos
            </li>
            <li className="about-activity">
              <ImPointRight /> Assistir Series sobre AI
            </li>
            <li className="about-activity">
              <ImPointRight /> Viagar
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Believe you can and you will get there"{" "}
          </p>
          <footer className="blockquote-footer">Theodore Roosevelt</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
