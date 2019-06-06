import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown'
import React, { Component } from 'react';
import './Nav.css'



class Navi extends Component {
  render() {
    return(
 <div>
  <Navbar className="nav" expand="lg" fixed="top">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link className="ok" href="#home">Home</Nav.Link>
        <Nav.Link className="ok" href="#where">Where</Nav.Link>
        <Nav.Link className="ok" href="#when">When</Nav.Link>
        <Nav.Link  className="ok" href="#link">Extra</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  </div>
)}
}

export default Navi;
