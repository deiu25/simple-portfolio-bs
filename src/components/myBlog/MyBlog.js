import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export const MyBlog = () => {
  return (
    <section id="blog" className="py-5">
      <Container>
        <div className="text-center py-5">
          <h2 className="fw-bolder text-uppercase">My Blog</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatem, doloribus?
          </p>
        </div>
        <Row className="pb-5">
          <Col lg={4} md={6} className="mb-4">
            <Card>
              <Card.Img variant="top" src={require("../../images/img7.jpg")} />
              <Card.Body>
                <Card.Title className="text-center py-2">
                  Lorem ipsum dolor sit amet.
                </Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis at illum natus sequi explicabo, adipisci saepe et.
                  Vero, labore enim.
                </Card.Text>
                <Button variant="light">Read more...</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6} className="mb-4">
            <Card>
              <Card.Img variant="top" src={require("../../images/img6.jpg")} />
              <Card.Body>
                <Card.Title className="text-center py-2">
                  Lorem ipsum dolor sit amet.
                </Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis at illum natus sequi explicabo, adipisci saepe et.
                  Vero, labore enim.
                </Card.Text>
                <Button variant="light">Read more...</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6} className="mb-4">
            <Card>
              <Card.Img variant="top" src={require("../../images/img5.jpg")} />
              <Card.Body>
                <Card.Title className="text-center py-2">
                  Lorem ipsum dolor sit amet.
                </Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis at illum natus sequi explicabo, adipisci saepe et.
                  Vero, labore enim.
                </Card.Text>
                <Button variant="light">Read more...</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
