import { Component } from "react";
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"

class CustomCard extends Component {
    static imgStyle = {
        width:50
    }

    constructor() {
        super();
    }

    render() {
        return (
            <>
            <Container fluid style={{padding:10}}>
                <Card style={{borderColor:'black'}}>
                    <Card.Header style={{backgroundColor:'black',color:'white'}}><b>{this.props.header}</b></Card.Header>
                    <Card.Body>
                        <Row>
                            <Col md={{span:3}}>
                                <Card.Img variant="top" src={this.props.src} style={{width:"50%", display:'block',marginLeft:'auto',marginRight:'auto'}}/>
                            </Col>
                            <Col md={{span:9}}>
                                <Card.Title>{this.props.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{this.props.subTitle}</Card.Subtitle>
                                <Card.Text>{this.props.text}</Card.Text>
                                {this.props.extra}
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>   
            </Container> 
            </>
        );
    }
}

export default CustomCard