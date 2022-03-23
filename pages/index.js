import {React, Component} from 'react'
import {Container} from 'react-bootstrap'
import BasicInfo from '../components/BasicInfo'

class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
      <Container fluid>
        <BasicInfo/>
      </Container>
      </>
    );
  }
}

export default Home