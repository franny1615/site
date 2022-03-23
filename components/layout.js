import Head from "next/head";
import {Container, Navbar, Nav} from 'react-bootstrap';

export default function Layout({ children }) {
  return (
    <>
        <Head>
        <title>Francisco Funes</title>
        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
            crossOrigin="anonymous"
        />
        </Head>
        <Navbar bg="dark" expand="lg" variant='dark' style={{padding:'20px'}}>
              <Container fluid>
                <Navbar.Brand href="/">Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/projects">Projects</Nav.Link>
                    <Nav.Link href="/education">Education</Nav.Link>
                    <Nav.Link href="/capstone">Capstone</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
          </Navbar>
        <div style={{background:'black', color:'white', fontFamily:'monospace',minHeight:'100vh',padding:10}}>
          {children}
        </div>
    </>
  )
}