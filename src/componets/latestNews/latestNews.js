import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./latest.css";
import { SidePart } from "../sidepart";
import House from "../../assets/images/latestgarden.png";


const LatestNews = () => {
  return (
    <div className="latest">
      <section id="news">
        <Container>
          <Row>
            <Col>
              <Row>
                <img
                  variant="house"
                  src={House}
                  className="house"
                  alt="house"
                />
              </Row>
              
            </Col>
            <Col>
            {/* Reusing SidePart passed component as props */}
              <SidePart
                heading={"Latest News"}
                details={"Properties linked to Unitech money laundering being dissipated, says ED"}
                desc={
                  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat"
                }
              />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default LatestNews;
