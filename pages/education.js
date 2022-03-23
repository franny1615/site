import {React, Component} from 'react'
import {Container} from 'react-bootstrap'
import Education from '../components/Education'

class EducationPage extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
            <Container fluid>
                <Education />
            </Container>
            </>
        )
    }
}

export default EducationPage;