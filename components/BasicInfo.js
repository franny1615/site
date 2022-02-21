import {React, Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap'

class BasicInfo extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
      <Container style={{textAlign:'center',paddingTop:50}} fluid>
        <Row>
          <h1 className='display-1' ><b>Francisco Funes Alfaro</b></h1>
        </Row>
        <Row >
          <h1 className='display-6'>Software Developer </h1>
        </Row>
        <Row>
          <h1 className='display-6'>inquiryfunes@gmail.com</h1>
        </Row>
      </Container>
      </>
    );
  }
}

export default BasicInfo