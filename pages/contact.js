import React from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap'

export default function Contact() {
    return (
        <Container style={{marginTop:10}} fluid>
            <Card>
                <Card.Body>
                    <Card.Title>Francisco Funes</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Software Engineer</Card.Subtitle>
                    <Card.Text>Feel free to reach out to me for any inquiries</Card.Text>
                    <Container fluid>
                            <Row>
                                <Col md={2}>
                                    <b>Email:</b>
                                </Col>
                                <Col md={10}>
                                    inquiryfunes@gmail.com
                                </Col>
                            </Row>
                            <Row>
                                <Col md={2}>
                                    <b>Mobile:</b>
                                </Col>
                                <Col md={10}>
                                    (805)452-8446
                                </Col>
                            </Row>
                        </Container>
                </Card.Body>
            </Card>
        </Container>
    )
}