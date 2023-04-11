import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const MyPortfolio = () => {
  return (
    <section id="portfolio" className="bg-dark py-5">
      <Container>
        <div className="text-center py-5">
          <h2 className="fw-bolder text-uppercase text-light">My Portfolio</h2>
          <p className="text-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatem, doloribus?
          </p>
        </div>
        <Row className="pb-5">
          <Col md={6} lg={4} className="mb-4">
            <img
              src={require("../../images/img1.jpg")}
              alt=""
              className="img-fluid img-thumbnail"
            />
          </Col>
          <Col md={6} lg={4} className="mb-4">
            <img
              src={require("../../images/img2.jpg")}
              alt=""
              className="img-fluid img-thumbnail"
            />
          </Col>
          <Col md={6} lg={4} className="mb-4">
            <img
              src={require("../../images/img3.jpg")}
              alt=""
              className="img-fluid img-thumbnail"
            />
          </Col>
          <Col md={6} lg={4} className="mb-4">
            <img
              src={require("../../images/img4.jpg")}
              alt=""
              className="img-fluid img-thumbnail"
            />
          </Col>
          <Col md={6} lg={4} className="mb-4">
            <img
              src={require("../../images/img5.jpg")}
              alt=""
              className="img-fluid img-thumbnail"
            />
          </Col>
          <Col md={6} lg={4} className="mb-4">
            <img
              src={require("../../images/img6.jpg")}
              alt=""
              className="img-fluid img-thumbnail"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
