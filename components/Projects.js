import Image from 'next/image'
import {React, Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import ProjectAEM from './ProjectAEM'
import ProjectNext from './ProjectNext';
import ProjectCOMP420 from './ProjectCOMP420'
import ProjectCILISP from './ProjectCILISP';

class Projects extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <Container style={{background: 'rgba(128, 128, 128, 0.4)', padding:10}} fluid>
            <Row>
                <h1 className='display-3'>Projects</h1>
            </Row>
            <hr></hr>
            <ProjectAEM/>
            <hr></hr>
            <ProjectCOMP420/>
            <hr></hr>
            <ProjectCILISP/>
            <hr></hr>
            <ProjectNext/>
        </Container>
      </>
    );
  }
}

export default Projects