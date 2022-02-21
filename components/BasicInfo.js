import {React, Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap'

class BasicInfo extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
      <Container fluid>
        <Row style={{textAlign:'center',padding:50}}>
          <h1 className='display-2' ><b>Francisco Funes Alfaro</b></h1>
        </Row>
        <hr></hr>
        <Row style={{textAlign:'center'}}>
          <Col md={6}>
          <div>
              <h1 className='display-6' >Software Developer </h1>
              <h1 className='display-6'>in Lompoc, CA</h1>
          </div>
          </Col>
          <Col md={6}>
            <div>
              <h1 className='display-6' >franciscofunes5@gmail.com</h1>
              <h1 className='display-6' >(805) 452-8446 </h1>
            </div>
          </Col>
        </Row>
      </Container>
      </>
    );
  }
}

export default BasicInfo