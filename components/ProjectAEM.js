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
        <Container style={{marginTop:10,padding:10, backgroundColor:'rgb(33,37,41)'}} fluid>
            <Row style={{textAlign:'center', padding:10}}>
                <Col md={6}>
                    <hr></hr>
                    <h1 className='display-6'>
                        Expense Management Application
                    </h1>
                    <h2>
                        An android application that allows users to link bank accounts, 
                        poll transaction data, filter out expenses, and visualize those expenses.
                    </h2>
                </Col>
                <Col md={6}>
                    <hr></hr>
                    <h1 className='display-6'>Tools Used</h1>
                    <Container fluid>
                    <Row>
                        <Col md={6} style={{padding:10}}>
                            <Image src={androidImage} width={281} height={98} alt="android"/>
                        </Col>
                        <Col md={6} style={{padding:10}}>
                            <Image src={kotlinImage} width={307} height={81} alt="kotlin"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} style={{padding:10}}>
                            <Image src={sqlImage} width={207} height={109} alt="sql"/>
                        </Col>
                        <Col md={6} style={{padding:10}}>
                            <Image src={plaidImage} width={320} height={109} alt="plaid"/>
                        </Col>
                    </Row>
                    </Container>   
                </Col>
            </Row>
            <hr></hr>
            <Row style={{textAlign:'center', padding:10}}>
                <h1 className='display-6'>Screenshots</h1>
            </Row>
            <Row style={{textAlign:'center', padding:10}}>
                <Col md={3}>
                    <Image src={screen1} width={477} height={762} alt="screenshot1"/>
                </Col>
                <Col md={3}>
                    <Image src={screen2} width={477} height={762} alt="screenshot2"/>
                </Col>
                <Col md={3}>
                    <Image src={screen3} width={477} height={762} alt="screenshot3"/>
                </Col>
                <Col md={3}>
                    <Image src={screen4} width={477} height={762} alt="screenshot4"/>
                </Col>
            </Row>
            <hr></hr>
            <Row style={{textAlign:'center'}}>
                <p  className='display-6'>Check out the code on: <a href="https://github.com/franny1615/capstone_kotlin">Github</a></p>
            </Row>
        </Container>
      </>
    );
  }
}

export default ProjectAEM