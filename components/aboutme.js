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
                    A computer science graduate from California State University Channel Islands
                    with experience in both iOS and Android Development. I work with 
                    the Objective-C and Swift programming languages on the iOS side. Kotlin and Java on the Android side.
                    <br></br>
                    <br></br>
                    My main expertise is in handling network requests; this means creating View Models or Models that store
                    and maintain data coming from the web, and creating dynamic and responsive UI to go along with it. All in 
                    an effort to improve an existing business process or facilitate the creation of a new one.
                    <br></br>
                    <br></br>
                    I use MVC and MVVM software architecture on every application to break up the responsibilites of the application 
                    and improve reusability and readibility of the classes I create. Some applications might use one or the other 
                    architecture depending on complexity, or a mixture of both when appropriate. 
                </p>
            </Row>
        </Container>
    )
}