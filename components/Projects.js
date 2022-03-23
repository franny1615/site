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
        <Container fluid>
            <ProjectAEM/>
            <ProjectCOMP420/>
            <ProjectCILISP/>
            <ProjectNext/>
        </Container>
      </>
    );
  }
}

export default Projects