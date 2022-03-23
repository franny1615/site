import Image from 'next/image'
import {React, Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import img1 from '../public/nexjslogo.png'
import img2 from '../public/reactlogo.png'
import img3 from '../public/bootstraplogo.png'

class ProjectNext extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <Container style={{marginTop:10,padding:10, backgroundColor:'rgb(33,37,41)'}} fluid>
            <Row style={{textAlign:'center', padding:10}}>
                <Col md={6}>
                  <h1 className='display-6'>Portfolio Website</h1>
                  <h2>
                    In effort to learn React.js, I made myself a portfolio website powered by the tool.
                    And to power the backend, I used the Next.js library as well. 
                  </h2>
                </Col>
                <Col md={6}>
                  <Container fluid>
                    <h1 className='display-6'>Tools Used</h1>
                    <Row style={{textAlign:'center', padding:10}}>
                      <Col md={4}>
                          <Image src={img1} width={200} height={119} alt="next.js"/>
                      </Col>
                      <Col md={4}>
                          <Image src={img2} width={289} height={135} alt="react.js"/>
                      </Col>
                      <Col md={4}>
                          <Image src={img3} width={200} height={166} alt="bootstrap"/>
                      </Col>
                  </Row>
                  </Container>
                </Col>
            </Row>
            <hr></hr>
            <Row style={{textAlign:'center'}}>
                <p  className='display-6'>Check out the code on: <a href="https://github.com/franny1615/site">Github</a></p>
            </Row>
        </Container>
      </>
    );
  }
}

export default ProjectNext