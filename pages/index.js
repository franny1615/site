import Head from 'next/head'
import Image from 'next/image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {React, Component} from 'react'
import Clock from 'react-live-clock'

class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
      <Head>
        <title>Francisco Funes</title>
      </Head>
      <Container style={{ backgroundColor:'black', color:'white', padding:10, textAlign:'center' }} fluid>
        <Row>
          <Col><h1>Francisco Funes</h1></Col>
        </Row>
        <Row>
          <Col><h4>Software Developer</h4></Col>
        </Row>
        <hr />
        <Row>
          <Col md={{ span:4 }}><h5>(805) 452-8446</h5></Col>
          <Col md={{ span:4 }}><h5>franciscofunes5@gmail.com</h5></Col>
          <Col md={{ span:4 }}><h5>Based in Lompoc, CA</h5></Col>
        </Row>
      </Container>
      </>
    );
  }
}

export default Home