import {React, Component} from 'react'
import {Container, Row, Col, Navbar, Nav, NavDropdown} from 'react-bootstrap'

class BasicInfo extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
      <Container style={{textAlign:'center', marginTop:10, backgroundColor:'rgb(33,37,41)'}} fluid>
        <Row>
          <Col md={6} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <h1 className='display-3'>
              Francisco Funes
              <h2>
                inquiryfunes@gmail.com
                <br></br>
                (805)452-8446
              </h2>
            </h1>
          </Col>
          <Col md={6} style={{padding:'10px'}}>
            <h1 className='display-6'>
              I am primarily an Android Developer using native tools such as Android Studio and the Kotlin programming language.
              <br></br>
              <br></br>
              I also flirt a little with frontend web development using Next.js and React.js libraries to power web applications.
              <br></br>
              <br></br>
              A quick learner and always looking for what is next in the ever evolving landscape of software development.
              <br></br>
              <br></br>
              Feel free to navigate my site and check out my projects and learn more about me.
              <br></br>
              <br></br>
              Thanks for visiting!
            </h1>
          </Col>
        </Row>
      </Container>
      </>
    );
  }
}

export default BasicInfo