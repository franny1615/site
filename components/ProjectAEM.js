import Image from 'next/image'
import {React, Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import kotlinImage from '../public/kotlin.png'
import plaidImage from '../public/plaid.png'
import sqlImage from '../public/sql.png'
import androidImage from '../public/androidStudio.png'
import screen1 from '../public/accounts-pop.png'
import screen2 from '../public/transactions-populated.png'
import screen3 from '../public/expenses-pop.png'
import screen4 from '../public/analysis-pop.png'

class ProjectAEM extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <Container style={{padding:10}} fluid>
            <Row style={{textAlign:'center', padding:10}}>
                <h1 className='display-5'>Expense Management Application</h1>
            </Row>
            <Row style={{textAlign:'center', padding:10}}>
                <Col md={3}>
                    <Image src={androidImage} width={281} height={98}/>
                </Col>
                <Col md={3}>
                    <Image src={kotlinImage} width={307} height={81}/>
                </Col>
                <Col md={3}>
                    <Image src={sqlImage} width={207} height={109}/>
                </Col>
                <Col md={3}>
                    <Image src={plaidImage} width={320} height={109}/>
                </Col>
            </Row>
            <Row style={{textAlign:'center', padding:10}}>
                <h1 className='display-6'>Screenshots</h1>
            </Row>
            <Row style={{textAlign:'center', padding:10}}>
                <Col md={3}>
                    <Image src={screen1} width={477} height={762}/>
                </Col>
                <Col md={3}>
                    <Image src={screen2} width={477} height={762}/>
                </Col>
                <Col md={3}>
                    <Image src={screen3} width={477} height={762}/>
                </Col>
                <Col md={3}>
                    <Image src={screen4} width={477} height={762}/>
                </Col>
            </Row>
            <Row style={{textAlign:'center'}}>
                <p  className='display-6'>Check out the code on: <a href="https://github.com/franny1615/capstone_kotlin">Github</a></p>
            </Row>
        </Container>
      </>
    );
  }
}

export default ProjectAEM