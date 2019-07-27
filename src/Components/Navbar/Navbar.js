import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { CSSNav } from "./_styles";

export function Navigation() {
  return (
    <>
      <CSSNav>
        <Navbar collapseOnSelect expand="lg" variant="dark">
          {/* <Link to="/"> */}
          <Navbar.Brand>Bobby Gifford</Navbar.Brand>
          {/* </Link> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          {/* <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to="/projects">
                <Nav.Link>Projects</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse> */}
        </Navbar>
      </CSSNav>
    </>
  );
}
