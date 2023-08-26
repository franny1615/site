import Image from 'next/image'
import f1AppImg from '../public/f1calendarapp/main.webp'
import expenseAppImg from '../public/capstone/appScreenShots/accounts-pop.webp'
import petWalkerImg from '../public/petwalker/past_walk.webp'
import atdp from '../public/atdp/projectDetailsScreenOptions.webp'
import GitHubIcon from '../public/logos/githubIcon.webp'
import {Container, Row, Col} from 'react-bootstrap'

export default function ProjectPanel() {
    return (
        <Container fluid>
            <Row>
                <h3>Personal Projects</h3>
            </Row>
            <Row>
                <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 2 }}>
                    <Container style={{height:'800px'}} fluid>
                        <Row style={{textAlign:'center'}}>
                            <h4>Pet Walker</h4>
                        </Row>
                        <Row style={{marginBottom:5}}>
                            <a className='d-flex justify-content-center' href="https://github.com/franny1615/memos_project_maui" target="_blank" rel="noreferrer">
                                <Image width={30} height={30} src={GitHubIcon} alt="Github"/>
                            </a>
                        </Row>
                        <Row className='d-flex justify-content-center' style={{height:'90%'}}>
                            <Image src={petWalkerImg} height='90%' width='370px' alt="Main F1 Page for my app"/>
                        </Row>
                    </Container>
                </Col>
                <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 1 }}>
                    <Container style={{height:'800px'}} fluid>
                        <Row style={{textAlign:'center'}}>
                            <h4>Project Management App</h4>
                        </Row>
                        <Row style={{marginBottom:5}}>
                            <a className='d-flex justify-content-center' href="https://github.com/franny1615/ATPD" target="_blank" rel="noreferrer">
                                <Image width={30} height={30} src={GitHubIcon} alt="Github"/>
                            </a>
                        </Row>
                        <Row className='d-flex justify-content-center' style={{height:'90%'}}>
                            <Image src={atdp} height='90%' width='370px' alt="Main Expense App img"/>
                        </Row>
                    </Container>
                </Col>
            </Row>
            <Row>
                <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 2 }}>
                    <Container style={{height:'800px'}} fluid>
                        <Row style={{textAlign:'center'}}>
                            <h4>F1 Calendar App</h4>
                        </Row>
                        <Row style={{marginBottom:5}}>
                            <a className='d-flex justify-content-center' href="https://github.com/franny1615/F1CalendarApp" target="_blank" rel="noreferrer">
                                <Image width={30} height={30} src={GitHubIcon} alt="Github"/>
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
                                <Image width={30} height={30} src={GitHubIcon} alt="Github"/>
                            </a>
                        </Row>
                        <Row className='d-flex justify-content-center' style={{height:'90%'}}>
                            <Image src={expenseAppImg} height='90%' width='370px' alt="Main Expense App img"/>
                        </Row>
                    </Container>
                </Col>
            </Row>
            <Row style={{textAlign:'center'}}>
                <h4>This Website</h4>
                <a className='d-flex justify-content-center' href="https://github.com/franny1615/site" target="_blank" rel="noreferrer">
                    <Image width={30} height={30} src={GitHubIcon} alt="Github"/>
                </a>
            </Row>
        </Container>
    )
}