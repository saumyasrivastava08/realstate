import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import "./spectrum.css";
import { SidePart } from "../sidepart";
import { AiOutlineArrowRight } from "react-icons/ai";

const Spectrum = () => {
  const btnData = [
    "Investment Management",
    "Acquisitions",
    "Development Management",
    "Asset, Property & Facility Management",
  ];
  return (
    <div className="spectrum">
      <section id="spectrumReal">
        <Container>
          <Row>
            <Col>
              {/* Reusing SidePart passed component as props */}
              <SidePart
                heading={"Real State Spectrum"}
                details={
                  "We Seek to Create Value For Investors Across the Real Estate Spectrum."
                }
                desc={
                  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat"
                }
              />
            </Col>
            <Col>
              {btnData.map((e) => {
                return (
                  <Button className="bar">
                    <Row>
                      <Col>{e}</Col>
                      <Col>
                        <AiOutlineArrowRight className="arrowBar" />
                      </Col>
                    </Row>
                  </Button>
                );
              })}
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Spectrum;
