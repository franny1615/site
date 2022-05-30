import {React} from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import Image from 'next/image'
import AccountsScreenshot from '../public/capstone/appScreenShots/accounts-pop.png'
import TransacsScreenshot from '../public/capstone/appScreenShots/transactions-populated.png'
import ExpensesScreenshot from '../public/capstone/appScreenShots/expenses-pop.png'
import AnalysisScreenshot from '../public/capstone/appScreenShots/analysis-pop.png'
import AppFlow from '../public/capstone/diagrams/AEMFlow.svg'
import GitHubIcon from '../public/logos/githubIcon.png'
import AcademicPoster from '../public/capstone/diagrams/Poster.png'
import ViewExample from '../public/capstone/diagrams/ViewMakeUp.svg'
import ViewModelExample from '../public/capstone/code/accountsVM.png'
import ModelExample from '../public/capstone/code/accountsModel.png'
import DAOExample from '../public/capstone/code/accountsDAO.png'
import DBExample from '../public/capstone/code/appDatabase.png'
import NetworkingExample from '../public/capstone/code/networkingHelper.png'
import MenuBar from '../public/capstone/code/menuBarAndroid.png'

export default function Capstone() {
    const downloadPoster = event => {
        event.preventDefault()
        fetch('/capstone/diagrams/Poster.pdf')
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

    return (
        <Container style={{overflow:'hidden'}} fluid>
            <Row>
                <Container style={{textAlign:'center', marginTop:10}} fluid>
                    <Row><h1>Expense Management</h1></Row>
                    <Row><h6>by Fictitious Alpha Technologies, Inc.</h6></Row>
                </Container>
            </Row>
            <Row>
                <Col style={{marginTop:10}} md={6}>
                    <Container fluid>
                        <Row><h4><u>Pitch</u></h4></Row>
                        <Row className='d-flex align-items-center'>
                            <h6 style={{textAlign:'justify', margin:0}}>
                                Have you ever wondered how applications such as Venmo or CashApp work?
                                How difficult it is to create them? And whether or not <b>you</b>, could develop one?
                                <br></br>
                                <br></br>
                                Wonder no longer as this project shows that not only is it possible
                                to develop these types of apps quickly. But the knowledge required
                                is not too large, and the tools are readibly available to begin.
                            </h6>
                        </Row>
                        <Row style={{marginTop:30}}>
                            <div style={{width:'fit-content'}}>
                            <a className='d-flex align-items-center' style={{textDecoration:'none'}} href="https://github.com/franny1615/capstone_kotlin" target="_blank" rel="noreferrer">
                                <Image margin={10} width={30} height={30} src={GitHubIcon} alt="Github"/> 
                                &nbsp;Product Github
                            </a>
                            </div>
                        </Row>
                    </Container>
                </Col>
                <Col style={{marginTop:10}} md={6}>
                    <Container fluid>
                        <Row><h4><u>Product Screenshots</u></h4></Row>
                        <Row>
                            <Col md={3}><Image src={AccountsScreenshot} alt="App Screenshot"/></Col>
                            <Col md={3}><Image src={TransacsScreenshot} alt="App Screenshot"/></Col>
                            <Col md={3}><Image src={ExpensesScreenshot} alt="App Screenshot"/></Col>
                            <Col md={3}><Image src={AnalysisScreenshot} alt="App Screenshot"/></Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
            <Row>
                <Container style={{marginTop:10}} fluid>
                    <Row style={{textAlign:'center'}}><h4><u>Demo</u></h4></Row>
                    <Row className='d-flex justify-content-center'>
                        <iframe className="capstone" src="https://www.youtube.com/embed/9GrXTOI26k8" title="Youtube Video Player" allow="fullscreen" frameBorder="0"></iframe>
                    </Row>
                </Container>
            </Row>
            <Row>
                <Container style={{marginTop:10, paddingLeft:100, paddingRight:100}} fluid>
                    <Row style={{textAlign:'center'}}><h4><u>Academic Poster</u></h4></Row>
                    <Row>
                        <Image src={AcademicPoster} width={2500} height={1875}/>
                    </Row>
                    <Row className='d-flex justify-content-center' style={{margin:10}}>
                        <Button onClick={downloadPoster} style={{width:'60%'}}>Download</Button>
                    </Row>
                </Container>
            </Row>
            <Row>
                <Container fluid>
                    <Row>
                        <h4><u>App Architecture</u></h4>
                    </Row>
                    <Row style={{marginLeft:30,marginRight:30}}>
                        <Col md={6} style={{display:'flex',
                                            justifyContent:'center',
                                            alignItems:'center', 
                                            backgroundColor:'rgb(152, 155, 158)', 
                                            borderRadius:30,
                                            paddingTop:50,
                                            paddingBottom:50}}>
                            <Image src={AppFlow} alt="app architecture"/>
                        </Col>
                        <Col md={6} className='d-flex align-items-center justify-content-center'>
                            <h6>
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
                            </h6>
                        </Col>
                    </Row>
                    <Row>
                    <Container fluid>
                        <Row style={{marginTop:10}}>
                            <h4><u>Example Code</u></h4>
                        </Row>
                        <Row style={{justifyContent:'center'}}>
                            <Col md={6}>
                                <Container fluid>
                                    <Row style={{textAlign:'center'}}>
                                        <h5>View Breakdown</h5>
                                    </Row>
                                    <Row>
                                        <Image src={ViewExample} alt="view breakdown"/>
                                    </Row>
                                </Container>
                            </Col>
                            <Col md={6}>
                                <Container fluid>
                                    <Row style={{textAlign:'center'}}>
                                        <h5>ViewModel</h5>
                                    </Row>
                                    <Row>
                                        <Image src={ViewModelExample} alt="view breakdown"/>
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
                                        <Image src={ModelExample} alt="view breakdown"/>
                                    </Row>
                                </Container>
                            </Col>
                            <Col md={6}>
                                <Container fluid>
                                    <Row style={{textAlign:'center'}}>
                                        <h5>DAO</h5>
                                    </Row>
                                    <Row>
                                        <Image src={DAOExample} alt="view breakdown"/>
                                    </Row>
                                </Container>
                            </Col>
                        </Row>
                        <Row>
                            <Container fluid>
                                <Row style={{textAlign:'center'}}>
                                    <h5>Database</h5>
                                </Row>
                                <Row className='d-flex justify-content-center'>
                                    <Image src={DBExample} alt="view breakdown"/>
                                </Row>
                            </Container>
                        </Row>
                        <Row>
                            <Container fluid>
                                <Row style={{textAlign:'center'}}>
                                    <h5>Networking Helper</h5>
                                </Row>
                                <Row className='d-flex justify-content-center'>
                                    <Image src={NetworkingExample} alt="view breakdown"/>
                                </Row>
                            </Container>
                        </Row>
                    </Container>
                </Row>
                <Row>
                    <Container fluid>
                        <Row style={{marginTop:10}}><h4><u>Tools Used</u></h4></Row>
                        <Row style={{justifyContent:'center', marginLeft:30,marginRight:30}}>
                            <h6>
                                The application was primarily developed on the Android Studio IDE which is provided free of charge
                                at: <a href='https://developer.android.com/studio' style={{textDecoration:'none'}} target="_blank" rel="noreferrer">here</a>.
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
                            </h6>
                            <Image src={MenuBar} alt="location picture"/>
                            <h6>
                                Once that has been set up, the Android Studio IDE is ready for development of this type of app.
                                <br></br>
                                <br></br>
                                The next tool used was the Plaid API, and to set this up follow the instructions of their website: 
                                <a href='https://plaid.com/docs/quickstart/' style={{textDecoration:'none'}} target="_blank" rel="noreferrer"> Plaid Inc.</a>
                                <br></br>
                                <br></br>
                                Lastly, a backend utility needs to be created to run request to the API and feed results back to our app.
                                This was taken from the Plaid Quickstart Github and modified for this project. The project is located here:
                                <a href='https://github.com/plaid/quickstart' style={{textDecoration:'none'}} target="_blank" rel="noreferrer"> Quickstart</a>
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
                            </h6>
                        </Row>
                    </Container>
                </Row>
                <Row>
                    <Container fluid>
                        <Row>
                            <h4><u>Final Thoughts</u></h4>
                        </Row>
                        <Row style={{marginLeft:30,marginRight:30}}>
                            <h6>
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
                            </h6>
                        </Row>
                    </Container>
                </Row>
                </Container>
            </Row>
        </Container>
    )
}