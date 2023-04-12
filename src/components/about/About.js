import React from "react";
import "./About.css";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";

export const About = () => {
  return (
    <section id="about" className="py-5">
      <Container>
        <div className="text-center py-5">
          <h2 className="fw-bolder text-uppercase about-section-title">
            About
          </h2>
          <p className="about-section-subtitle">
            Passionate Web Developer Driven by Innovation
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
            <p className="lh-lg about-section-text">
              As a dedicated and enthusiastic{" "}
              <span className="about-section-text-highlight">
                web developer
              </span>
              , I strive to continually refine my skills and stay up-to-date
              with the latest industry technologies. With strong motivation and
              a passion for programming, I am always seeking new opportunities
              to grow in my web development career. Proactive and
              results-oriented, I easily integrate into project teams, bringing
              my experience in developing client-server applications in a
              collaborative environment. Familiar with{" "}
              <span className="about-section-text-highlight">Agile/Scrum</span>{" "}
              methodologies, I constantly improve my project management and
              communication skills, ensuring an efficient and transparent
              process. I also have experience in code review and debugging,
              contributing to maintaining a high standard of quality in software
              development. In summary, I am a passionate and ambitious software
              developer, committed to a continuous learning and improvement
              process, ready to tackle challenges and create innovative
              solutions in the field.
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
