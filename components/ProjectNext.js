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
        <Container style={{padding:10}} fluid>
            <Row style={{textAlign:'center', padding:10}}>
                <h1 className='display-5'>This Website</h1>
            </Row>
            <Row style={{textAlign:'center', padding:10}}>
                <Col md={4}>
                    <Image src={img1} width={200} height={119}/>
                </Col>
                <Col md={4}>
                    <Image src={img2} width={289} height={135}/>
                </Col>
                <Col md={4}>
                    <Image src={img3} width={200} height={166}/>
                </Col>
            </Row>
            <Row style={{textAlign:'center'}}>
                <p  className='display-6'>Check out the code on: <a href="https://github.com/franny1615/site">Github</a></p>
            </Row>
        </Container>
      </>
    );
  }
}

export default ProjectNext