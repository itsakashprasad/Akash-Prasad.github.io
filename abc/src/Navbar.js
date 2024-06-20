// NavBar.js

import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './NavBar.css'; // Import the custom CSS file

function NavBar() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" className="rounded custom-navbar">
      <Navbar.Brand href="/">Company Data</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
