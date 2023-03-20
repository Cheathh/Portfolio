import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/me.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Sobre <span className="purple"> Mim </span>
            </h1>
            <p className="home-about-body">
              Sou apaixonado por programação e pelo menos aprendi
              alguma coisa, eu acho... 🤷‍♂️
              <br />
              <br />Sou fluente em clássicos tais como
              <i>
                <b className="purple"> C , HTML , Wordpress , Python , Javascript. </b>
              </i>
              <br />
              <br />
              Meu campo de interesse está construindo novas &nbsp;
              <i>
                <b className="purple">Tecnologias e produtos da Web </b> e
                também em áreas relacionadas com{" "}
                <b className="purple">
                  Inteligencia Artificial e Desenvolvimento de Aplicações Mobile.
                </b>
              </i>
              <br />
              <br />
              Sempre que possível, também aplico minha paixão por desenvolver serviços
              em <b className="purple">Wordpress</b> e
              <i>
                <b className="purple">
                  {" "}
                  Wocommerce & DropShipping
                </b>
              </i>
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
            <h1>ENCONTRE ME EM</h1>
            <p>
            Sinta-se livre para <span className="purple">falar </span>comigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Cheathh"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/_ruiziinho_"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
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
