import Projects from '../components/Projects'
import {React, Component} from 'react'
import {Container} from 'react-bootstrap'

class ProjectsPage extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
            <Container fluid>
                <Projects />
            </Container>
            </>
        )
    }
}

export default ProjectsPage