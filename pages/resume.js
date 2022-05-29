import {React, Component, useState} from 'react'
import {Container, Row, Card, Button} from 'react-bootstrap'
import {Document, Page, pdfjs} from 'react-pdf'
import workerSrc from "../pdf-worker";

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

export default function Resume() {
    const [file, setFile] = useState("./FranciscoFunesResume.pdf");

    const downloadResume = event => {
        event.preventDefault()
        fetch('/FranciscoFunesResume.pdf')
        .then(response => {
            response.blob().then(blob => {
                let url = window.URL.createObjectURL(blob);
                let a = document.createElement('a');
                a.href = url;
                a.download = 'FranciscoFunesResume.pdf';
                a.click();
            });
        });
    }

    return (
        <Container style={{padding:20, overflow:'hidden'}} fluid>
            <Row className='d-flex justify-content-center'>
                <Card className='d-flex justify-content-center' style={{width:'fit-content'}}>
                    <Card.Body>
                    <Document file={file}> 
                        <Page
                            style={{all:'inherit'}}
                            key={'page_1'}
                            pageNumber={1}
                            renderAnnotationLayer={false}
                            renderTextLayer={false}
                        />
                    </Document>
                    </Card.Body>
                </Card>
            </Row>
            <Row className='d-flex justify-content-center' style={{margin:10}}>
                <Button onClick={downloadResume} style={{width:'60%'}}>Download</Button>
            </Row>
        </Container>
    )
}