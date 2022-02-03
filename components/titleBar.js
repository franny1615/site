import {React, Component} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class TitleBar extends Component {
    constructor() {
      super();
    }
  
    render() {
      return (
        <>
        <Container style={{ backgroundColor:'black', color:'white', padding:10, textAlign:'center' }} fluid>
          <Row>
            <Col><h1>{this.props.mainTitle}</h1></Col>
          </Row>
          <Row>
            <Col><h4>{this.props.mainSubTitle}</h4></Col>
          </Row>
          <hr />
          <Row>
            <Col md={{ span:4 }}><h5>{this.props.info1}</h5></Col>
            <Col md={{ span:4 }}><h5>{this.props.info2}</h5></Col>
            <Col md={{ span:4 }}><h5>{this.props.info3}</h5></Col>
          </Row>
        </Container>
        </>
      );
    }
  }
  
  export default TitleBar