import Image from 'next/image'
import {React, Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import img1 from '../public/Python-Logo.png'
import img2 from '../public/javascriptlogo.png'
import img3 from '../public/htmllogo.png'
import screen1 from '../public/dbprojimage2.png'
import screen2 from '../public/dbprojimage4.png'
import screen3 from '../public/dbprojimage5.png'
import screen4 from '../public/dbprojimage6.png'

class ProjectCOMP420 extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <Container style={{marginTop:10,padding:10, backgroundColor:'rgb(33,37,41)'}} fluid>
            <Row style={{textAlign:'center', padding:10}}>
                <Col md={6}>
                    <hr></hr>
                    <h1 className='display-6'>AWS Database Viewer WebApp</h1>
                    <h2>
                        As part of a databases course, we were tasked to create an application
                        that allows a user to see data within a SQL database running off an AWS server.
                        I choose to create something akin to PhPMyAdmin with a little bit of style using 
                        bootstrap.
                    </h2>
                </Col>
                <Col md={6}>
                    <hr></hr>
                    <Container fluid>
                        <h1 className='display-6'>Tools Used</h1>
                        <Row style={{textAlign:'center', padding:10}}>
                            <Col md={4}>
                                <Image src={img1} width={300} height={200} alt="python"/>
                            </Col>
                            <Col md={4}>
                                <Image src={img2} width={200} height={200} alt="javascript"/>
                            </Col>
                            <Col md={4}>
                                <Image src={img3} width={200} height={200} alt="html5"/>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
            <hr></hr>
            <Row style={{textAlign:'center', padding:10}}>
                <h1 className='display-6'>Screenshots</h1>
            </Row>
            <Row style={{textAlign:'center', padding:10}}>
                <Col md={6}>
                    <Image src={screen3} width={1078} height={1103} alt="screenshot1"/>
                </Col>
                
                <Col md={6}>
                    <Image src={screen2} width={1078} height={1151} alt="screenshot2"/>
                </Col>
            </Row>
            <Row style={{textAlign:'center', padding:10}}>
                <Col md={6}>
                    <Image src={screen1} width={1078} height={418} alt="screenshot3"/>
                </Col>
                <Col md={6}>
                    <Image src={screen4} width={1078} height={503} alt="screenshot4"/>
                </Col>
            </Row>
            <hr></hr>
            <Row style={{textAlign:'center'}}>
                <p  className='display-6'>Check out the code on: <a href="https://github.com/franny1615/COMP420_LAB10/tree/main">Github</a></p>
            </Row>
        </Container>
      </>
    );
  }
}

export default ProjectCOMP420