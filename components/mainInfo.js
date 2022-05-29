import {React } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import AboutMe from '../components/aboutme'
import ProjectPanel from '../components/projectpanel'
import Image from 'next/image'

export default function MainInfo() {
    return (
        <Container style={{paddingTop:10, paddingBottom:10}} fluid>
            <Row className='d-flex align-items-center justify-content-center'>
                <AboutMe />
            </Row>
            <Row>
                <ProjectPanel />
            </Row>
        </Container>
    )
}
// TODO: add the resume and capstone links in the about me
// TODO: well... redo the rest of the tabs in the new style