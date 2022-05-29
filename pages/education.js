import {React, Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Image from 'next/image'
import CILogo from '../public/logos/school/CIFormalLogo.png'

export default function Education() {
    return (
        <Container fluid>
        <Row>
            <Col md={6}>
                <Container fluid>
                    <Row className='d-flex justify-content-center'>
                        <Image src={CILogo} width={508} height={329} alt="Capfornia State University Channel Islands"/>
                    </Row>
                    <Row>
                        <h1 className='display-6' style={{textAlign:'center'}}>Computer Science B.S.<br></br>Graduated May 2022<br></br>GPA: 3.789</h1>
                    </Row>
                </Container>
            </Col>
            <Col md={6}>
                <Container fluid>
                    <Row style={{margin:10, textAlign:'center'}}>
                        <h2>Completed Coursework</h2>
                        <p>Object Oriented Programming</p>
                        <p>Data Structures</p>
                        <p>Assembly/Computer Architecture</p>
                        <p>Programming Languages</p>
                        <p>Operating Systems</p>
                        <p>Software Engineering</p>
                        <p>Automata</p>
                        <p>Mobile Robotics</p>
                        <p>Database Theory/Design</p>
                        <p>Computer Networks</p>
                        <p>Embedded Systems</p>
                    </Row>
                    <Row>
                        <p style={{textAlign:'center'}}>* Official Transcript provided upon request *</p>
                    </Row>
                </Container>
            </Col>
        </Row>
      </Container>
    )
}