import Head from 'next/head'
import Image from 'next/image'
import {React, Component} from 'react'
import TitleBar from '../components/titleBar'
import CustomCard from '../components/customCard'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
      <TitleBar mainTitle="Francisco Funes" mainSubTitle="Software Developer" info1="(805)452-8446" info2="franciscofunes5@gmail.com" info3="Based in Lompoc, CA"/>
      <Container fluid>
        <Row>
          <Col md={{span:6}}>
            <CustomCard header="Projects" src="/csuci.jpg" title="California State University Channel Islands" subTitle="2018-2022" text="Obtained Bachelors in Computer Science."/>
          </Col>
          <Col md={{span:6}}>
            <CustomCard header="Education" src="/csuci.jpg" title="California State University Channel Islands" subTitle="2018-2022" text="Obtained Bachelors in Computer Science."/>
          </Col>
        </Row>
      </Container>
      
      </>
    );
  }
}

export default Home