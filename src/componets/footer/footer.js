import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from "../../assets/images/footer.png";
import Concrete from "../../assets/images/concrete.png";
import Villa from "../../assets/images/villa.png";

import "./footer.css";



const Footer = () => {
  const footerDes = ["About Us", "Service", "Page", "Blog", "ContactUs"];
  const footerDes2 = [
    "Privacy Policy",
    "Term of Service",
    "Disclaimer",
    "Credits",
  ];
  return (
    <div className="footer">
      <section id="contact">
        <Container>
          <br />
          <Row>
            <Col md={{ span: 3, offset: 1 }}>
              <img
                variant="logo"
                src={Logo}
                className="footerImage"
                alt="realstatelogo"
              />
              <p className="descText">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam
              </p>
            </Col>
            <Col md={{ span: 1, offset: 1 }}>
              <h2 className="headerR"> Information</h2>
              {footerDes.map((e) => {
                return <h6 className="descText">{e}</h6>;
              })}
            </Col>
            <Col md={{ span: 2, offset: 1 }}>
              <h2 className="headerR"> Quick Links</h2>
              {footerDes2.map((e) => {
                return <h6 className="descText">{e}</h6>;
              })}
            </Col>
            <Col md={{ span: 2, offset: 1 }}>
              <h2 className="headerR"> Our Posts</h2>
              <Row>
                <Col>
                  <img
                    variant="logo"
                    src={Villa}
                    className="footerBlog"
                    alt="realstatelogo"
                  />{" "}
                </Col>
                <Col>
                  <h6 className="descText">
                    Know how Virtual Reality revolutionize home sales!{" "}
                  </h6>
                </Col>
              </Row>
              <Row>
                <Col>
                  <img
                    variant="logo"
                    src={Concrete}
                    className="footerBlog"
                    alt="realstatelogo"
                  />{" "}
                </Col>
                <Col>
                  <h6 className="descText">
                    Know how to increase the value of your home!{" "}
                  </h6>
                </Col>
              </Row>
            </Col>
            <hr />
            <Col md={{ span: 12, offset: 1 }}>
              All Rights Reserved @ realestate2022
            </Col>
          </Row>
          <br />
        </Container>
      </section>
    </div>
  );
};

export default Footer;
