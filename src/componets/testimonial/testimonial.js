import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { SidePart } from "../sidepart";
import Button from "react-bootstrap/Button";
import Elipse from "../../assets/images/E1.png";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "./testimonial.css";

const Testimonial = () => {
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
                  />
                </Col>
             
                <Col>
                  <img
                    variant="main"
                    src={Elipse}
                    className="testImage1"
                    alt="main"
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
                  />
                </Col>
                <Col>
                  <img
                    variant="main"
                    src={Elipse}
                    className="testImage4"
                    alt="main"
                  />
                </Col>
                <Col>
                  <img
                    variant="main"
                    src={Elipse}
                    className="testImage5"
                    alt="main"
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
                  />
                </Col>
             
                <Col>
                  <img
                    variant="main"
                    src={Elipse}
                    className="testImage1"
                    alt="main"
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
