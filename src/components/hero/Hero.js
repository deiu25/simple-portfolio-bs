import React, { useState, useEffect } from "react";
import { useSpring, animated, config } from "react-spring";
import "./Hero.css";
import Button from "react-bootstrap/Button";

export const Hero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const welcomeProps = useSpring({
    from: { transform: "translate3d(0,-40px,0)", opacity: 0 },
    to: { transform: "translate3d(0,0,0)", opacity: 1 },
    delay: 300,
    config: config.stiff,
  });

  return (
    <section
      id="home"
      className="d-flex min-vh-100 flex-column justify-content-center align-items-center bg"
    >
      <animated.h1
        className="fw-bolder display-1 mb-3"
        style={{ textShadow: "2px 2px 4px #000000", ...welcomeProps }}
      >
        HEY, I`M ANDREI
      </animated.h1>
      <h6
        className="fs-2 text-secondary text-capitalize mb-5"
        style={{ textShadow: "2px 2px 4px #000000" }}
      >
        I'm a front-end web developer
      </h6>
      <Button href="#about" variant="danger" className="rounded-pill">
        About Me
      </Button>
    </section>
  );
};
