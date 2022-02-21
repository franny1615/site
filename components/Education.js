import Image from 'next/image'
import {React, Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import schoolImage from '../public/csuci_word.png'

class Education extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
      <Container style={{background: 'rgba(128, 128, 128, 0.4)', padding:10}} fluid>
        <Row>
          <Container fluid>
            <Row>
              <h1 className='display-3'>Education</h1>
            </Row>
            <hr></hr>
            <Row>
              <Col md={6}>
                <Image src={schoolImage} width={1380} height={399}/>
              </Col>
              <Col md={6} style={{textAlign:'end'}}>
                <h1 className='display-6'>Computer Science B.S.</h1>
                <h1 className='display-6'>Expected May 2022</h1>
                <h1 className='display-6'>GPA: 3.7</h1>
              </Col>
            </Row>
          </Container>
        </Row>
      </Container>
      </>
    );
  }
}

export default Education