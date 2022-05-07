import { Button } from "react-bootstrap";
import React, { Component, useEffect, useState } from "react";
import { Container,Row,Col, Form } from "react-bootstrap";

export default class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount () {
        this.getAllComments()
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.postAComment()
    }

    getAllComments = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/request', {
                method: 'GET',
            });
            const json = await response.json()
            var comments = []
            for(var i in json['message']) {
                let id = json['message'][i]['_id']
                let comment = json['message'][i]['comment']
                comments.push([id,comment])
            }
            this.setState({comments: comments})
        } catch (error) {
            console.log(error)
        }
    }

    postAComment = async () => {
        try {
            console.log('here')
            await fetch('http://localhost:3000/api/request', {
                method: 'POST',
                body: {comment:this.state.comment},
            });
        } catch (error) {
            console.log(error)
        }
    }

    render() { 
        const comments = this.state.comments ? this.state.comments : []

        const commentRows = []

        for(const [id, comment] of comments) {
            commentRows.push(
                <Row key={id}>
                    <hr></hr>
                    <h4>{comment}</h4>
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