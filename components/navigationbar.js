import {React, Component} from 'react'
import {Container, Navbar, Nav} from 'react-bootstrap'
import MyLogo from '../public/vistaPrintLogos/logo-transparent-png.png'
import Image from 'next/image'

export default function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg" variant='light'>
        <Container fluid>
        <Navbar.Brand className="d-lg-none ml-auto" href="/"><Image src={MyLogo} width={194} height={200}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto d-flex align-items-center justify-content-center">
                <Nav.Link href="/education"><h3>Education</h3></Nav.Link>
                <Nav.Link href="/capstone"><h3>Capstone</h3></Nav.Link>
                <Nav.Link href="/" className='d-none d-lg-block'>
                  <Image src={MyLogo} width={194} height={200}/>
                </Nav.Link>
                <Nav.Link href="/resume"><h3>Resume</h3></Nav.Link>
                <Nav.Link href="/contact"><h3>Contact</h3></Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}