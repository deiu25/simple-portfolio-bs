import React from "react";
import "./About.css";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";

export const About = () => {
  return (
    <section id="about" className="py-5">
      <Container>
        <div className="text-center py-5">
          <h2 className="fw-bolder text-uppercase">About</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            voluptatum!
          </p>
        </div>
        <Row className="mb-5">
          <Col md={4} className="mb-3">
            <img
              src={require("../../images/about.jpg")}
              alt=""
              className="img-fluid"
            />
          </Col>
          <Col md={7} lg={{ offset: 1 }}>
            <p className="lh-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga,
              veritatis animi distinctio minus nihil officiis laboriosam sed
              reiciendis consequatur voluptatum dolore perspiciatis voluptas
              consectetur omnis! Eaque, soluta iusto. Alias, fuga velit optio
              necessitatibus totam blanditiis mollitia quisquam est nesciunt sit
              molestiae quibusdam obcaecati. Id commodi ratione hic impedit, sit
              quaerat.
            </p>
            <p className="fw-bold fs-4">My Skills:</p>
            <p>HTML:</p>
            <ProgressBar
              now={70}
              label={`70%`}
              variant="success"
              className="mb-3"
            />
            <p>CSS:</p>
            <ProgressBar
              now={65}
              label={`65%`}
              variant="info"
              className="mb-3"
            />
            <p>JS:</p>
            <ProgressBar
              now={60}
              label={`60%`}
              variant="warning"
              className="mb-3"
            />
            <p>Bootstrap 5:</p>
            <ProgressBar
              now={90}
              label={`90%`}
              variant="danger"
              className="mb-3"
            />
            <p>Material UI:</p>
            <ProgressBar
              now={90}
              label={`90%`}
              variant="danger"
              className="mb-3"
            />
            <p>React:</p>
            <ProgressBar
              now={65}
              label={`65%`}
              variant="info"
              className="mb-3"
            />
            <p>Express JS:</p>
            <ProgressBar
              now={50}
              label={`50%`}
              variant="secondary"
              className="mb-3"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
