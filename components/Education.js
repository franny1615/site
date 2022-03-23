import Image from 'next/image'
import {React, Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import schoolImage from '../public/CIFormalLogo.png'

class Education extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
      <Container style={{marginTop:10, backgroundColor:'rgb(33,37,41)'}} fluid>
        <Row>
          <Container fluid>
            <Row>
              <Col md={6}>
                <Image src={schoolImage} width={1017} height={658}/>
              </Col>
              <Col md={6} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <h1 className='display-6'>Computer Science B.S.<br></br>Expected May 2022<br></br>GPA: 3.789</h1>
              </Col>
              <hr></hr>
            </Row>
            <Row style={{margin:10}}>
              <h2 style={{textAlign:'center'}}>Completed Coursework</h2>
              <ul>
                <li>Object Oriented Programming</li>
                <li>Data Structures</li>
                <li>Assembly/Computer Architecture</li>
                <li>Programming Languages</li>
                <li>Operating Systems</li>
                <li>Software Engineering</li>
                <li>Automata</li>
                <li>Mobile Robotics</li>
                <li>Database Theory/Design</li>
                <li>Computer Networks</li>
                <li>Embedded Systems</li>
              </ul>
            </Row>
            <Row>
            <hr></hr>
            <p style={{textAlign:'center'}}>* Official Transcript provided upon request *</p>
            </Row>
          </Container>
        </Row>
      </Container>
      </>
    );
  }
}

export default Education