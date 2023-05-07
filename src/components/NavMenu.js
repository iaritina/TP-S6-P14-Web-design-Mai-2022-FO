import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
const NavMenu = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to={"/"}>I.T News</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />
        </>
    );
};

export default NavMenu;