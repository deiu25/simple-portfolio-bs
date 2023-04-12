import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./MyPortfolio.css";
import Carousel from "react-bootstrap/Carousel";

export const MyPortfolio = () => {
  return (
    <section id="portfolio" className="bg-dark py-5">
      <Container>
        <div className="text-center py-5">
          <h2 className="fw-bolder text-uppercase text-light portfolio-section-title">
            My Portfolio
          </h2>
          <p className="text-light porfolio-section-subtitle">
            Showcasing My Technical Expertise and Creative Projects
          </p>
        </div>
        <div className="d-flex justify-content-between align-items-center mb-4"></div>
        <Carousel fade>
          <Carousel.Item className="d-none d-md-block">
            <div className="divcarousel">
              <Row className="pb-1">
                <Col xs={12} sm={12} md={6} lg={4} className="mb-4">
                  <a
                    href="https://travel-diaries-story.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={require("../../images/travel.jpg")}
                      alt=""
                      className="img-fluid img-thumbnail"
                    />
                  </a>
                </Col>
                <Col xs={12} sm={12} md={6} lg={4} className="mb-4">
                  <a
                    href="https://adviceslip123.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={require("../../images/adviceslip.jpg")}
                      alt=""
                      className="img-fluid img-thumbnail"
                    />
                  </a>
                </Col>
                <Col xs={12} sm={12} md={6} lg={4} className="mb-4">
                  <a
                    href="https://pic-search123.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={require("../../images/picsearch.jpg")}
                      alt=""
                      className="img-fluid img-thumbnail"
                    />
                  </a>
                </Col>
                <Col xs={12} sm={12} md={6} lg={4} className="mb-4">
                  <a
                    href="https://aim-game-app.netlify.app/#"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={require("../../images/aimgame.jpg")}
                      alt=""
                      className="img-fluid img-thumbnail"
                    />
                  </a>
                </Col>
                <Col xs={12} sm={12} md={6} lg={4} className="mb-4">
                  <a
                    href="https://jokeapp123.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={require("../../images/jokeapp.jpg")}
                      alt=""
                      className="img-fluid img-thumbnail"
                    />
                  </a>
                </Col>
                <Col xs={12} sm={12} md={6} lg={4} className="mb-4">
                  <a
                    href="https://movie-api-app123.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={require("../../images/mouvieapp.jpg")}
                      alt=""
                      className="img-fluid img-thumbnail"
                    />
                  </a>
                </Col>
              </Row>
            </div>
          </Carousel.Item>
          <Carousel.Item Item className="d-none d-md-block">
            <div className="divcarousel">
              <Row className="pb-1">
                <Col xs={12} sm={12} md={6} lg={4} className="mb-4">
                  <a
                    href="https://react-weather-app1234.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={require("../../images/weather.jpg")}
                      alt=""
                      className="img-fluid img-thumbnail"
                    />
                  </a>
                </Col>
              </Row>
            </div>
          </Carousel.Item>
        </Carousel>
      </Container>
    </section>
  );
};
