import React from 'react';
import {Container, Row, Col, Navbar, Nav} from 'react-bootstrap'

export default function Footer() {
    return (
        <Container className='bg-light' style={{textAlign:'center', border:'solid rgb(248,249,250)', width:'100%'}} fluid>
            <Navbar bg="light" expand="lg" variant='light'>
            <Nav className="mx-auto d-flex align-items-center justify-content-center">
                <Nav.Link href="/contact"><h5>Contact</h5></Nav.Link>
                <Nav.Link href="/resume"><h5>Resume</h5></Nav.Link>
            </Nav>
            </Navbar>
        </Container>
    )
}