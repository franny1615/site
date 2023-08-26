import {React } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import ProjectPanel from '../components/projectpanel'

export default function MainInfo() {
    return (
        <Container style={{paddingTop:10, paddingBottom:10}} fluid>
            <Row>
                <ProjectPanel />
            </Row>
        </Container>
    )
}