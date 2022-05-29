import Image from 'next/image'
import f1AppImg from '../public/f1calendarapp/main.png'
import expenseAppImg from '../public/capstone/appScreenShots/accounts-pop.png'
import {Container, Row, Col} from 'react-bootstrap'

export default function ProjectPanel() {
    return (
        <Container fluid>
            <Row>
                <h3>Projects</h3>
            </Row>
            <Row>
                <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 2 }}>
                    <Container style={{height:'800px'}} fluid>
                        <Row style={{textAlign:'center'}}>
                            <h4>F1 Calendar App</h4>
                        </Row>
                        <Row style={{marginBottom:5}}>
                            <a className='d-flex justify-content-center' href="https://github.com/franny1615/F1CalendarApp" target="_blank" rel="noreferrer">
                                <img src="/logos/githubIcon.png" alt="Github" width={30} height={30}/>
                            </a>
                        </Row>
                        <Row className='d-flex justify-content-center' style={{height:'90%'}}>
                            <Image src={f1AppImg} height='90%' width='370px' alt="Main F1 Page for my app"/>
                        </Row>
                    </Container>
                </Col>
                <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 1 }}>
                    <Container style={{height:'800px'}} fluid>
                        <Row style={{textAlign:'center'}}>
                            <h4>Expense Management App</h4>
                        </Row>
                        <Row style={{marginBottom:5}}>
                            <a className='d-flex justify-content-center' href="https://github.com/franny1615/capstone_kotlin" target="_blank" rel="noreferrer">
                                <img src="/logos/githubIcon.png" alt="Github" width={30} height={30}/>
                            </a>
                        </Row>
                        <Row className='d-flex justify-content-center' style={{height:'90%'}}>
                            <Image src={expenseAppImg} height='90%' width='370px' alt="Main Expense App img"/>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}