import {React, Component} from 'react'
import {Container, Navbar, Nav} from 'react-bootstrap'
import MyLogo from '../public/vistaPrintLogos/logo-transparent-png.png'
import Image from 'next/image'

export default function NavigationBar() {
  return (
    <Navbar className="d-flex justify-content-center align-items-center" bg="dark" expand="lg" variant='light' >
      <Navbar.Brand href="/">
        <h2 style={{ color: 'white', textAlign: 'center', margin: 0 }}>Francisco Funes</h2>
        <p style={{ color: 'white', textAlign: 'center', margin: 0 }}>Software Engineer</p>
      </Navbar.Brand>
    </Navbar>
  )
}