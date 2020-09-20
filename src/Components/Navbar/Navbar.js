import React from 'react';
import { withRouter } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { LinkContainer } from 'react-router-bootstrap';

import { Colors } from '../../global';

const NavbarComponent_ = ({ location }) => {
  return (
    <Navbar
      style={{ backgroundColor: `${Colors.nord0}` }}
      variant='dark'
      expand='lg'
    >
      <Link to='/'>
        <Navbar.Brand>Bobby Gifford</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto' activeKey={location.pathname}>
          {/* <LinkContainer to='/projects'>
            <Nav.Link>Projects</Nav.Link>
          </LinkContainer> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export const NavbarComponent = withRouter(NavbarComponent_);
