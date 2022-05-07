import { Button } from "react-bootstrap";
import React, { Component, useEffect, useState } from "react";
import { Container,Row,Col, Form } from "react-bootstrap";

export default class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount () {
        const MINUTE_MS = 1000
        const interval = setInterval(() => {
            this.getAllComments()
        }, MINUTE_MS);
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.postAComment()
    }

    getAllComments = async () => {
        try {
            const response = await fetch('https://www.franciscofunes.com/api/request', {
                method: 'GET',
            });
            const json = await response.json()
            var comments = []
            for(var i in json['message']) {
                let id = json['message'][i]['_id']
                let comment = json['message'][i]['comment']
                let timeStamp = json['message'][i]['timestamp']
                comments.push([id,comment,timeStamp])
            }
            this.setState({comments: comments})
        } catch (error) {
            console.log(error)
        }
    }

    postAComment = async () => {
        try {
            console.log('here')
            await fetch('https://www.franciscofunes.com/api/request', {
                method: 'POST',
                body: JSON.stringify({
                    comment:this.state.comment,
                    timestamp:this.getFormattedDate()
                }),
            });
        } catch (error) {
            console.log(error)
        }
    }

    getFormattedDate = () => {
        var d = new Date();
    
        d = d.getFullYear() + "-" + 
            ('0' + (d.getMonth() + 1)).slice(-2) + 
            "-" + ('0' + d.getDate()).slice(-2) + " " + 
            ('0' + d.getHours()).slice(-2) + ":" + 
            ('0' + d.getMinutes()).slice(-2);
    
        return d;
    }

    render() { 
        const comments = this.state.comments ? this.state.comments : []

        const commentRows = []

        for(const [id, comment, timestamp] of comments) {
            commentRows.push(
                <Row key={id}>
                    <hr></hr>
                    <Col md={8}>
                        <h4 style={{textAlign:'start'}}>{comment}</h4>
                    </Col>
                    <Col md={4}>
                        <h4 className="text-muted" style={{textAlign:'end'}}>{timestamp}</h4>
                    </Col>
                </Row>
            )
        }

        return (
            <Container>
                <Row>
                    <h4>Submit a Comment</h4>
                </Row>
                <Row style={{marginRight:30,marginLeft:30, marginBottom:30}}>
                    <Form>
                        <Form.Group className="mb-3" controlId="commentForm">
                            <Form.Label>Enter your comment below:</Form.Label>
                            <Form.Control as="textarea" rows="3" placeholder="" onChange={e => this.setState({ comment : e.target.value })}/>
                            <Form.Text className="text-muted" >
                                Please keep conversation family friendly. Thank you!
                            </Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit" style={{width:'30%'}} onClick={this.onSubmit}>
                                Submit
                        </Button>
                    </Form>
                </Row>
                <Row>
                    <h4>Comments</h4>
                </Row>
                <Row style={{marginRight:30,marginLeft:30, marginBottom:30}}>
                    <Container>
                        {commentRows}
                    </Container>
                </Row>
            </Container>
        );
    }
}