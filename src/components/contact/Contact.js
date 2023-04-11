import React from "react";
import { Container, Form, Button } from "react-bootstrap";

export const Contact = () => {
  return (
    <section id="contact" className="py-5 bg-dark">
      <Container>
        <div className="text-center py-5 text-white">
          <h2 className="fw-bolder text-uppercase">Contact Me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatem, doloribus?
          </p>
        </div>
        <div className="col-11 col-sm-10 col-md-9 col-lg-8 col-xl-7 col-xxl-6 mx-auto mb-5">
          <Form className="text-white">
            <Form.Group className="mb-3">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Your Email</Form.Label>
              <Form.Control type="email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Your Subject</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Your Message</Form.Label>
              <Form.Control as="textarea" rows={10} />
            </Form.Group>
            <Button variant="danger" size="lg" type="submit">
              Send Message
            </Button>
          </Form>
        </div>
      </Container>
    </section>
  );
};
