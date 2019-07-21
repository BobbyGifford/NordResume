import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from "react-router-dom";
import { CSSNav } from './_styles'

export function Navigation() {
    return (
        <>
            <CSSNav>
                <Navbar collapseOnSelect expand="lg" bg="nord0" variant="dark">
                    <Link to='/'><Navbar.Brand>Bobby Gifford</Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <LinkContainer to='/projects'><Nav.Link>Projects</Nav.Link></LinkContainer>
                            <LinkContainer to='/about'><Nav.Link>About</Nav.Link></LinkContainer>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                        </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </CSSNav>
        </>
    )
}
