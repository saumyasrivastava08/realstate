import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.css";
import { SidePart } from "../sidepart";
import House from "../../assets/images/house.png";
import Pool from "../../assets/images/pool.png";
import Garden from "../../assets/images/g.png";
import Wood from "../../assets/images/wood.png";

const About = () => {
  return (
    <div className="about">
      <section id="aboutUs">
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
              <Row>
                <Col>
                  <img
                    variant="house"
                    src={Pool}
                    className="pool"
                    alt="house"
                  />
                </Col>
                <Col>
                  <img
                    variant="house"
                    src={Garden}
                    className="pool"
                    alt="house"
                  />
                </Col>
                <Col>
                  <img
                    variant="house"
                    src={Wood
                    }
                    className="pool"
                    alt="house"
                  />
                </Col>
              </Row>
            </Col>
            <Col>
            {/* Reusing SidePart passed component as props */}
              <SidePart
                heading={"About Us"}
                details={"We Provide Best Home And Family Service"}
                desc={
                  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat"
                }
              />
              <Button className="exploreBtn">Explore More</Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default About;
