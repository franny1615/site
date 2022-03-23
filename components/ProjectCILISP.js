import Image from 'next/image'
import {React, Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import img1 from '../public/clogo.png'
import img2 from '../public/reactlogo.png'
import img3 from '../public/bootstraplogo.png'

class ProjectCILISP extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <Container style={{marginTop:10,padding:10, backgroundColor:'rgb(33,37,41)'}} fluid>
            <Row style={{textAlign:'center', padding:10}}>
                <h1 className='display-6'>Function Based Language CILisp</h1>
            </Row>
            <Row style={{margin:'auto', padding:10}}>
                <Col md={2}>
                    <Image src={img1} width={200} height={200} alt="c language"/>
                </Col>
                <Col md={10}>
                    <p className='display-6'>As part of the programming languages course, our final project was to implement
                    a functional language called CILisp that could parse and compute function calls in Cambridge Polish Notation.
                    To view examples and further documentation please visit the link below which takes you to Github.
                    </p>
                </Col>
            </Row>
            <hr></hr>
            <Row style={{textAlign:'center'}}>
                <p  className='display-6'>Check out the code on: <a href="https://github.com/franny1615/CI_LISP">Github</a></p>
            </Row>
        </Container>
      </>
    );
  }
}

export default ProjectCILISP