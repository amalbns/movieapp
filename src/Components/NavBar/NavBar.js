import React from 'react';
import { Nav,NavDropdown, Navbar, Container ,  } from 'react-bootstrap';

const NavBar = () => {
return (
    <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home"><h2 style={{ color:'purple' }}>Movie App</h2></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mx-auto">
        <Nav.Link href="#features"><h4 style={{ color:'purple' }}>Movies</h4></Nav.Link>
        <Nav.Link href="#pricing"><h4 style={{ color:'purple' }}>Series</h4></Nav.Link>
        <NavDropdown style={{ color :'purple'}} title ="Categories" >
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Settings</NavDropdown.Item>
        </NavDropdown>
    </Nav>
    <Nav>
        <Nav.Link href="#deets"><h5 style={{ color:'purple' }}>login</h5></Nav.Link>
        <Nav.Link eventKey={2} href="#memes">
        
        </Nav.Link>
    </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>
    
    </div>
)
}

export default NavBar