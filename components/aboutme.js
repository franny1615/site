import {React } from 'react'
import {Container, Row, Col} from 'react-bootstrap'

export default function AboutMe() {
    return (
        <Container>
            <Row>
                <h3>About Me</h3>
            </Row>
            <Row>
                <p>
                    An iOS Developer applying modern coding practices in order to produce high quality applications for clients that are 
                    delivered on time, easy to maintain, and easy to expand upon.
                    <br></br>
                    <br></br>
                    This means being able to use modern software architecture styles such as Model-View-Controller or Model-View-Viewmodel architectures
                    so that business logic can be broken up into smaller, easier to maintain pieces of code.
                    Allowing for enhancements to be easily assigned to different team members concurrently, increasing time to delivery. 
                    In some cases, also allow for the code to become easily testable in order to leverage Unit Test frameworks such as XCTest on iOS.
                    Giving the team the ability to write automated test cases to validate business logic without the need of network calls, elaborate physical
                    setup, or human testing. 
                    In other words, modern coding standards allow the process of application production to become less time consuming, more reliable, maintainable, and easier to test. All benefits that are passed on to the end customer in a less buggy and feature rich application.
                    <br></br>
                    <br></br>
                    I aim to leverage these modern coding practices not just on iOS. I apply these concepts on Android, and Windows applications whenever possible.
                    This way I can identify patterns that are the same on all three platforms and be able to help different teams with problems they may face. 
                </p>
            </Row>
        </Container>
    )
}