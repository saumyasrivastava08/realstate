import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./nav.css";
import Logo from "../../assets/images/Group 171.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,

  FaLinkedinIn,
} from "react-icons/fa";

const Navba = () => {
  return (
    <div className="nav">
      <Row>
        <Col md={{ span: 1, offset: 1 }}>
          {/* Making Navbar Logo */}
          <Navbar.Brand href="#home">
            <img
              variant="logo"
              src={Logo}
              className="logo"
              alt="realstatelogo"
            />
          </Navbar.Brand>
        </Col>
        <Col md={{ span: 3, offset: 3 }}>
          <Navbar>
            <Container>
              {/* Navbar Items */}
              <Nav className="heading">
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#aboutUs">About</Nav.Link>
                <Nav.Link>Service</Nav.Link>
                <Nav.Link>Page</Nav.Link>
                <Nav.Link href="#news">Blog</Nav.Link>
                <Nav.Link href='#contact'>Contact</Nav.Link>
              </Nav>

              <Col className="icons">
                <FaFacebookF />
              </Col>
              <Col className="icon">
                <FaLinkedinIn />
              </Col>
              <Col className="icon">
                <FaTwitter />
              </Col>
              <Col className="icon">
                <FaInstagram />
              </Col>
            </Container>
          </Navbar>
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
};

export default Navba;
