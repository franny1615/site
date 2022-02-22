import Image from 'next/image'
import {React, Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import BasicInfo from '../components/BasicInfo'
import Education from '../components/Education'
import Projects from '../components/Projects'

class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
      <Container fluid>
        <BasicInfo/>
        <hr></hr>
        <Education/>
        <hr></hr>
        <Projects/>
      </Container>
      </>
    );
  }
}

export default Home