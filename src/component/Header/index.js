import React from "react";
import { Nav } from "react-bootstrap";
import {
  Form,
  Button,
  Navbar,
  Container,
} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./index.css";

export default function Header() {

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          
          <Navbar.Brand className="titleIKP">IKPArt</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="m-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link className="font" href="/home" >
                Home
              </Nav.Link>
              <Nav.Link className="font" href="/NFTseries">
                NFT Series
              </Nav.Link>
              <Nav.Link className="font" href="/news">
                News
              </Nav.Link>
              <Nav.Link className="font" href="/story">
                Story
              </Nav.Link>
              <Nav.Link className="font" href="/claim">
                Claim
              </Nav.Link>
              <Nav.Link className="font" href="/about">
                About{" "}
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
            <Button variant="outline-secondary" target="_blank"  href="https://www.instagram.com/">Buy NFT</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

