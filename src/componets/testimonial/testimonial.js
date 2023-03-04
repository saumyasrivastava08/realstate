import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { SidePart } from "../sidepart";
import Button from "react-bootstrap/Button";
import Elipse from "../../assets/images/E1.png";
import Card from "react-bootstrap/Card";

import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "./testimonial.css";

const Testimonial = () => {
  const [state, setState] = useState(false);

  return (
    <div className="test">
      <section id="testimonial">
        <Container>
          <Row>
            <Col>
              <SidePart
                heading={"Testimonial"}
                details={"What Our Client Say."}
                desc={
                  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam "
                }
              />
              {state ? (
                <Container>
                  <Row>
                    <Col lg={10}>
                      <Card className="card">
                        <Card.Body>
                          <p className="descText">
                            ""Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magnaerat sed diam voluptua.""
                          </p>
                          <h2 className="testName"> David A Alden</h2>
                          <h6 className="testDesi">Owner of Alex</h6>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                  <br />
                </Container>
              ) : (
                <></>
              )}
              <Row>
                <Col>
                  <Button variant="light" className="arrow">
                    <AiOutlineArrowLeft />
                  </Button>
                  {"   "}
                  <Button className="arrowRight">
                    <AiOutlineArrowRight />
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col>
                  <img
                    variant="main"
                    src={Elipse}
                    className="testImage"
                    alt="main"
                    onClick={() => {
                      setState(!state);
                    }}
                  />
                </Col>

                <Col>
                  <img
                    variant="main"
                    src={Elipse}
                    className="testImage1"
                    alt="main"
                    onClick={() => {
                        setState(!state);
                      }}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <img
                    variant="main"
                    src={Elipse}
                    className="testImage3"
                    alt="main"
                    onClick={() => {
                        setState(!state);
                      }}
                  />
                </Col>
                <Col>
                  <img
                    variant="main"
                    src={Elipse}
                    className="testImage4"
                    alt="main"
                    onClick={() => {
                        setState(!state);
                      }}
                  />
                </Col>
                <Col>
                  <img
                    variant="main"
                    src={Elipse}
                    className="testImage5"
                    alt="main"
                    onClick={() => {
                        setState(!state);
                      }}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <img
                    variant="main"
                    src={Elipse}
                    className="testImage"
                    alt="main"
                    onClick={() => {
                        setState(!state);
                      }}
                  />
                </Col>

                <Col>
                  <img
                    variant="main"
                    src={Elipse}
                    className="testImage1"
                    alt="main"
                    onClick={() => {
                        setState(true);
                      }}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <br />
      </section>
    </div>
  );
};

export default Testimonial;
