import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Menu() {
    return(
        <Navbar>
            <Container>
                <Navbar.Brand to={`/login/`}>Navbar</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link to={`/login/`}>Inicio</Nav.Link>
                <Nav.Link to={`/explore/`}>Explorar</Nav.Link>
                <Nav.Link to={`/contact/`}>Contacto</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export { Menu }