import Head from 'next/head'
import Image from 'next/image'
import {React, Component} from 'react'
import TitleBar from '../components/titleBar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import schoolImage from '../public/csuci.png'
import aemProject from '../public/aemProject.png'
import thisProject from '../public/thisSiteStack.png'
import Carousel from 'react-bootstrap/Carousel'

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
      <TitleBar mainTitle="Francisco Funes" mainSubTitle="Software Developer" info1="(805) 452-8446" info2="franciscofunes5@gmail.com" info3="Based in Lompoc, CA"/>
      <Container fluid>
        <div style={{ width:"100%", margin:"auto", marginBottom:10, marginTop:10, padding:10, backgroundColor:"#7d7978",color:"White", border:"2px solid #999999", borderRadius:"5px" }}>
        <Row>
            <h1>Education</h1>
            <hr></hr>
            <Col md={9}>
              <h3>California State University Channel Islands</h3>
              <h5>Computer Science B.S.</h5>
              <h5>GPA: 3.7</h5>
              <h5>Coursework:</h5>
              <ul>
                <li>Data Structures, SQL/NOSQL Databases</li>
                <li>Embedded Systems, Operating Systems</li>  
                <li>Software Engineering, Analysis of Algorithms</li>
              </ul>
            </Col>
            <Col md={3}>
              <Image src={schoolImage} width={300} height={300}/>
            </Col>
        </Row>
        </div>
        <div style={{ width:"100%", margin:"auto", marginBottom:10, marginTop:10, padding:10, backgroundColor:"#7d7978",color:"White", border:"2px solid #999999", borderRadius:"5px" }}>
          <Row>
              <h1>Projects</h1>
              <hr/>
              <div style={{padding:20}}>
                  <Carousel variant="dark">
                    <Carousel.Item>
                      <Image src={aemProject} width={1920} height={1080}/>
                      <Carousel.Caption>
                        <div style={{color:"black",background:"white",borderRadius:"10px"}}>
                          <h4>Expense Management Application</h4>
                          <h5 >Check it out on: <a href="https://github.com/franny1615/capstone_kotlin">Github</a></h5>
                        </div>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <Image src={thisProject} width={1920} height={1080}/>
                      <Carousel.Caption>
                      <div style={{color:"black",background:"white",borderRadius:"10px"}}>
                          <h4>This webpage</h4>
                          <h5 >Check it out on: <a href="https://github.com/franny1615/site">Github</a></h5>
                        </div>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
              </div>
          </Row>
        </div>
      </Container>
      </>
    );
  }
}

export default Home