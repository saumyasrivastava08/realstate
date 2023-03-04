import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import video from "../../assets/images/video.png";
import "./video.css";
import { BsPlayFill } from "react-icons/bs";
import { SidePart } from "../sidepart";
import Elipse from "../../assets/images/wood.png";

const Video = () => {
  return (
    <div className="video">
      <section id="videoReal">
        <Container> 
          <Row>
            <Col>   
              <h6>Jan 06,2021</h6>
            </Col>
            <Col>
              <h6>Jan 06,2021</h6>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col>
              <h6 className="headingTextV">
                Tax Department Raids Noida-Based Real Estate Group
              </h6>

              <SidePart
                desc={
                  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy"
                }
              />
            </Col>
            <Col>
              {" "}
              <img variant="main" src={Elipse} alt="main" />
            </Col>
            <Col>
              <h6 className="headingTextV">
                Tax Department Raids Noida-Based Real Estate Group
              </h6>

              <SidePart
                desc={
                  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy"
                }
              />
            </Col>
            <Col>
              <img variant="main" src={Elipse} alt="main" />
            </Col>
          </Row>
          <Row>
            <Col>
              <h6>Jan 06,2021</h6>
            </Col>
            <Col>
              <h6>Jan 06,2021</h6>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col>
              <h6 className="headingTextV">
                Tax Department Raids Noida-Based Real Estate Group
              </h6>
              <SidePart
                desc={
                  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy"
                }
              />
            </Col>
            <Col>
              {" "}
              <img variant="main" src={Elipse} alt="main" />
            </Col>
            <Col>
              <h6 className="headingTextV">
                Tax Department Raids Noida-Based Real Estate Group
              </h6>

              <SidePart
                desc={
                  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy"
                }
              />
            </Col>
            <Col>
              <img variant="main" src={Elipse} alt="main" />
            </Col>
          </Row>
          <hr />
        </Container>

        <article
          className="article"
          style={{ background: `rgba(0,0,0,0.7) url(${video})` }}
        >
          <br />
          <h1 className="header">
            Not Just a House but a <br />
            Something to Life for
          </h1>
          <p className="header">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor
          </p>
          <p className="header">invidunt ut labore et dolore magna aliquyam.</p>
          <Button className="round">
            <BsPlayFill />
          </Button>
        </article>
      </section>
    </div>
  );
};

export default Video;
