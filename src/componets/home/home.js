import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Vas from "../../assets/images/vas.png";
import Sofa from "../../assets/images/sofa.png";
import Main from "../../assets/images/main.png";
import Dining from "../../assets/images/dining.png";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "./home.css";
import { SidePart } from "../sidepart";

const Home = () => {

  // Details about number of clients ward winning saving them in array so that we can map them to show as they are displayed same way
  const details = [
    ["2000+", "200+"],
    ["Exclusive Product", "Award Winning"],
    ["3250+", "1500+"],
    ["Happy Clients", "Property Sale"],
  ];
  return (
    <div className="home">
      <section id="Home">
        <Container>
          <Row>
            <Col>
              {/* Reusing SidePart passed component as props */}
              <SidePart
                details={"Find Real Estate that  Suit You."}
                desc={
                  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
                }
              />
              <Button className="exploreBtn">Get Started</Button>
              {/* Repeating Numbers and there messages converting into map */}

              <Container>
                {details.map((e, i) => {
                  return (
                    <>
                      <Row>
                        {details[i].map((val, index) => {
                          return (
                            <Col className={i % 2 === 0 ? "number" : " below"}>
                              {val}
                            </Col>
                          );
                        })}
                      </Row>
                    </>
                  );
                })}
              </Container>
            </Col>
            <Col>
              <div className="mainImage">
                <img variant="main" src={Main} className="main" alt="main" />
                <Row>
                  <Col>
                    <img src={Dining} className="imtip" alt="main" />
                  </Col>
                  <Col>
                    <img src={Sofa} className="imtip" alt="main" />
                  </Col>
                  <Col>
                    <img src={Vas} className="imtip" alt="main" />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>

          <Col md={{ span: 6, offset: 6 }}>
            <Row>
              <Col>
                <Button variant="light" className="arrow">
                  <AiOutlineArrowLeft />
                </Button>
                 {" "}
                <Button className="arrowRight">
                  <AiOutlineArrowRight />
                </Button>
              </Col>
            </Row>
          </Col>
          
        </Container>
      </section>
    </div>
  );
};

export default Home;
