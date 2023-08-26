import React from 'react';
import {Container, Row, Col, Navbar, Nav} from 'react-bootstrap'

export default function Footer() {
    return (
        <Container className='bg-dark' style={{textAlign:'center', width:'100%'}} fluid>
            <Navbar bg="dark" expand="lg">
            <Nav className="mx-auto d-flex align-items-center justify-content-center">
                <Nav.Link href="/education" style={{ color:'white' }}><h5>Education</h5></Nav.Link>
                <Nav.Link href="/resume" style={{ color:'white' }}><h5>Resume</h5></Nav.Link>
                <Nav.Link href="/contact" style={{ color:'white' }}><h5>Contact</h5></Nav.Link>
                <Nav.Link href="/capstone" style={{ color:'white' }}><h5>Capstone</h5></Nav.Link>
            </Nav>
            </Navbar>
        </Container>
    )
}