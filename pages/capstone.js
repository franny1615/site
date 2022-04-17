import {React, Component, createRef} from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import NextImage from 'next/image'
import Poster from '../public/Poster.png'
import AppFlow from '../public/AEMFlow.svg'
import ViewExample from '../public/ViewMakeUp.svg'
import ViewModelExample from '../public/accountsVM.png'
import ModelExample from '../public/accountsModel.png'
import DAOExample from '../public/accountsDAO.png'
import DBExample from '../public/appDatabase.png'
import NetworkingExample from '../public/networkingHelper.png'
import MenuBar from '../public/menuBarAndroid.png'

class CapstonePage extends Component {
    constructor() {
        super();
    }

    downloadPDF = () => {
        fetch('/Poster.pdf')
            .then(response => {
                response.blob().then(blob => {
                    let url = window.URL.createObjectURL(blob);
                    let a = document.createElement('a');
                    a.href = url;
                    a.download = 'Poster.pdf';
                    a.click();
                });
        });
    }

    render() {
        return (
            <>
            <Container fluid>
                <Row style={{textAlign:'center'}}>
                    <h1 className="display-5">Alpha Expense Management</h1>    
                    <h5>by Fictious Alpha Technologies Inc.</h5>
                </Row>
                <hr></hr>
                <Row>
                    <Container fluid>
                        <Row>
                            <h4>The Pitch</h4>
                        </Row>
                        <Row style={{marginLeft:'30px',marginRight:'30px'}}>
                            <h5>
                                Have you ever wondered how applications such as Venmo or CashApp work?
                                How difficult it is to create them? And whether or not you, could develop one?
                                <br></br>
                                <br></br>
                                Wonder no longer as this project shows that not only is it possible
                                to develop these types of apps quickly. But the knowledge required
                                is not too large, and the tools are readibly available to begin. 
                            </h5>
                        </Row>
                    </Container>
                </Row>
                <hr></hr>
                <Row>
                    <Container fluid>
                        <Row>
                            <h4>Demo</h4>
                        </Row>
                        <Row style={{marginLeft:30,marginRight:30}}>
                            <iframe width={540} height={960} src="https://www.youtube.com/embed/hf_6s0jp4QQ" title="Youtube Video Player"></iframe>
                        </Row>
                    </Container>
                </Row>
                <hr></hr>
                <Row>
                    <Container fluid>
                        <Row>
                            <h4>Academic Poster</h4>
                        </Row>
                        <Row style={{marginLeft:30,marginRight:30}}>
                            <NextImage src={Poster} width={2500} height={1875} alt="poster"/>
                        </Row>
                        <Row style={{marginLeft:50,marginRight:50,marginTop:10}}>
                            <Button onClick={this.downloadPDF}>Download as PDF</Button>
                        </Row>
                    </Container>
                </Row>
                <hr></hr>
                <Row>
                    <Container fluid>
                        <Row>
                            <h4>App Architecture</h4>
                        </Row>
                        <Row style={{marginLeft:30,marginRight:30}}>
                            <Col md={6} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                                <NextImage src={AppFlow} alt="app architecture"/>
                            </Col>
                            <Col md={6}>
                                <h5>
                                    Shown in the diagram is the application architecture. 
                                    The View Viewmodel Model paradigm was used as this 
                                    is what Google supports in their Android framework.
                                    <br></br> 
                                    <br></br>
                                    There is a main view which handles the navigation logic,
                                    and contains a fragment manager which displays the different views
                                    based on user navigation inputs. 
                                    <br></br>
                                    <br></br>
                                    Then there is the views themselves, each view has an XML and Kotlin file
                                    which make up its logic and User Interface.
                                    <br></br>
                                    <br></br>
                                    These views then work with a Viewmodel, which is another Kotlin file, and this file works with the database
                                    asynchronously to fetch, store, delete, or update Model components. These instructions are called from the DAO.
                                    <br></br>
                                    <br></br>
                                    Model components are another Kotlin class that use annotations that tell Androids Room database
                                    that they represent data that can be stored. 
                                    <br></br>
                                    <br></br>
                                    The DAO is a Data Access Object, a Kotlin interface that defines the types of actions we want to 
                                    perform on the database itself, these get converted into SQL instructions by Androids Room layer. 
                                    <br></br>
                                    <br></br>
                                    Lastly, the Database is a Kotlin file that tell Androids Room to make an instance of a Room Database.
                                    Which is effectively a SQLite Database, but with error checking at compile time for both Kotlin code and
                                    SQLite queries.  
                                </h5>
                            </Col>
                        </Row>
                    </Container>
                </Row>
                <hr></hr>
                <Row>
                    <Container fluid>
                        <Row>
                            <h4>Example Code</h4>
                        </Row>
                        <Row style={{justifyContent:'center'}}>
                            <Col md={6}>
                                <Container fluid>
                                    <Row style={{textAlign:'center'}}>
                                        <h5>View Breakdown</h5>
                                    </Row>
                                    <Row>
                                        <NextImage src={ViewExample} alt="view breakdown"/>
                                    </Row>
                                </Container>
                            </Col>
                            <Col md={6}>
                                <Container fluid>
                                    <Row style={{textAlign:'center'}}>
                                        <h5>ViewModel</h5>
                                    </Row>
                                    <Row>
                                        <NextImage src={ViewModelExample} alt="view breakdown"/>
                                    </Row>
                                </Container>
                            </Col>
                        </Row>
                        <Row style={{justifyContent:'center'}}>
                            <Col md={6}>
                                <Container fluid>
                                    <Row style={{textAlign:'center'}}>
                                        <h5>Model</h5>
                                    </Row>
                                    <Row>
                                        <NextImage src={ModelExample} alt="view breakdown"/>
                                    </Row>
                                </Container>
                            </Col>
                            <Col md={6}>
                                <Container fluid>
                                    <Row style={{textAlign:'center'}}>
                                        <h5>DAO</h5>
                                    </Row>
                                    <Row>
                                        <NextImage src={DAOExample} alt="view breakdown"/>
                                    </Row>
                                </Container>
                            </Col>
                        </Row>
                        <Row>
                            <Container fluid>
                                <Row style={{textAlign:'center'}}>
                                    <h5>Database</h5>
                                </Row>
                                <Row style={{justifyContent:'center'}}>
                                    <NextImage src={DBExample} alt="view breakdown"/>
                                </Row>
                            </Container>
                        </Row>
                        <Row>
                            <Container fluid>
                                <Row style={{textAlign:'center'}}>
                                    <h5>Networking Helper</h5>
                                </Row>
                                <Row style={{justifyContent:'center'}}>
                                    <NextImage src={NetworkingExample} alt="view breakdown"/>
                                </Row>
                            </Container>
                        </Row>
                    </Container>
                </Row>
                <hr></hr>
                <Row>
                    <Container fluid>
                        <Row>
                            <h4>Tools Used</h4>
                        </Row>
                        <Row style={{justifyContent:'center', marginLeft:30,marginRight:30}}>
                            <h4>
                                The application was primarily developed on the Android Studio IDE which is provided free of charge
                                at: <a href='https://developer.android.com/studio' target="_blank">here</a>.
                                <br></br>
                                <br></br>
                                Once an empty activity project is set up, the following dependencies were added to the build.gradle file:
                                <br></br>
                                <br></br>
                                Theme:
                                <ul>
                                    <li>{"implementation 'com.google.android.material:material:1.5.0'"}</li>
                                    <li>{"implementation 'androidx.cardview:cardview:1.0.0'"}</li>
                                </ul>
                                Networking:
                                <ul>
                                    <li>{"implementation 'com.android.volley:volley:1.2.1'"}</li>
                                </ul>
                                Plaid API SDK:
                                <ul>
                                    <li>{"implementation 'com.plaid.link:sdk-core:3.6.1-rc.2'"}</li>
                                </ul>
                                Charting Library:
                                <ul>
                                    <li>{"implementation 'com.github.PhilJay:MPAndroidChart:v3.1.0'"}</li>
                                </ul>
                                Room Database:
                                <ul>
                                    <li>{"implementation 'androidx.room:room-ktx:2.4.2'"}</li>
                                    <li>{"kapt 'androidx.room:room-compiler:2.4.2'"}</li>
                                    <li>{"implementation 'androidx.room:room-runtime:2.4.2'"}</li>
                                    <li>{"annotationProcessor 'androidx.room:room-compiler:2.4.2'"}</li>
                                </ul>
                                <br></br>
                                The following plugin was added in order to use the kapt annotation seen above.
                                Plugins are located at top of the build.gradle file.
                                <br></br> 
                                <ul>
                                    <li>{"id 'kotlin-kapt'"}</li>
                                </ul>
                                <br></br>
                                The files in question should be located under Gradle Scripts as seen below:
                            </h4>
                            <NextImage src={MenuBar} alt="location picture"/>
                            <h4>
                                Once that has been set up, the Android Studio IDE is ready for development of this type of app.
                                <br></br>
                                <br></br>
                                The next tool used was the Plaid API, and to set this up follow the instructions of their website: 
                                <a href='https://plaid.com/docs/quickstart/' target="_blank">Plaid Inc.</a>
                                <br></br>
                                <br></br>
                                Lastly, a backend utility needs to be created to run request to the API and feed results back to our app.
                                This was taken from the Plaid Quickstart Github and modified for this project. The project is located here:
                                <a href='https://github.com/plaid/quickstart' target="_blank">Quickstart</a>
                                <br></br>
                                <br></br>
                                {"That's"} it! Once these three are set up and ready to go, it is a matter of putting it all together. 
                                Some tips to make the process easier if trying it for yourself, use tools like Postman to test your backend utility, once you 
                                know it works then begin trying to link it to your application. Then when making the plaid calls in the app
                                it might help to place the call somewhere where the it will get called everytime the screen launches, otherwise
                                you might run into bugs where it seemingly works, but the response {"isn't"} stored anywhere. 
                                <br></br>
                                <br></br>
                                There are going to be other obstacles but to each there own, good luck!
                            </h4>
                            <h4 style={{textAlign:'center'}}>
                                <a href='https://github.com/franny1615/capstone_kotlin' target="_blank">App Repo</a>  
                                --<a href='https://github.com/franny1615/cap_backend' target="_blank">Backend Repo</a>
                            </h4>
                        </Row>
                    </Container>
                </Row>
                <hr></hr>
                <Row>
                    <Container fluid>
                        <Row>
                            <h4>Final Thoughts</h4>
                        </Row>
                        <Row style={{marginLeft:30,marginRight:30}}>
                            <h4>
                                As mentioned in the academic poster, I managed to get this application working 
                                in 60 days worth of time. This includes the learning of some concepts about Room,
                                the Android Framework, XML, etc. However this {"doesn't"} include past programming 
                                experience, the SQL course I have under my belt, and other courses that helped 
                                make the project doable in such a short time frame. 
                                <br></br>
                                <br></br>
                                That {"doesn't"} mean you need a Bachelors degree to make such applications, with some
                                time everyday learning key concepts about programming in Kotlin, SQL fundamentals,
                                and a little bit of networking, in 6 months worth of time spread throughout a year
                                could produce a working application. 
                                <br></br>
                                <br></br>
                                It truly just depends on the amount of effort one is willing to put in, and the time they
                                have at their disposal. 
                                <br></br>
                                <br></br>
                                By extension this app is by no means polished. It is missing key UI components that would make
                                this beta ready. For instance, there is nothing showing the user HOW to use the app. Waiting on
                                networking calls to finish by looking at a spinning wheel is not ideal. The user has no way of removing
                                transactions individually if they wanted to. And of course, the application still is using the Plaid
                                developer sandbox. 
                                <br></br>
                                <br></br>
                                Similarly, the application is developed using an old method of Android UI development. XML as UI is slowly being
                                fazed out by new technologies such as Jetpack Compose. This is due to competition faced by new frameworks like Flutter. 
                                <br></br>
                                <br></br>
                                All in all, I believe the fundamentals in how to write code, or how to manage SQL databases will remain largely the same. 
                                But how UI is developed and what companies offer the tools to develop UI is always going to change. And the developer must
                                be willing to adapt quickly or choose a different career path as they will slowly become uncompetitive.
                            </h4>
                        </Row>
                        <hr></hr>
                    </Container>
                </Row>
            </Container>
            </>
        )
    }
}

export default CapstonePage