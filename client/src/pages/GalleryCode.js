//DEPENDENCIES
import React from "react";
    //components
import BgImage from "../components/BgImage";
import { MDBContainer,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBCardBody,
} from "mdbreact";
    //styles
import './css/pages.css';
    //images
import currencyApp from "../images/projects/code/currencyAppSquare.png";
import fitnessTracker from "../images/projects/code/fitness-tracker-square.png";
import employeeDirectory from "../images/projects/code/employee-directory-square.png";
import minutePage from "../images/projects/code/project2_minute-page-square.jpg";
import budgetTracker from "../images/projects/code/budget-tracker-square.png";
import steadFast from "../images/projects/code/steadfast-logo-square.png";

//PAGE
const GalleryCODE = () => {
        return (
            <div className='pageContainer'>
                <BgImage>
                <MDBContainer className="mainContainer d-flex justify-content-center align-items-center">
                    <MDBRow>
                        {/* Main column will contain about header, projects, descriptions, and calls to action */}
                        <MDBCol md='12' className='mb-4 white-text text-center'>
                    
                            <h1 className="h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5">
                                Web Development Gallery
                            </h1>
                            <hr className='hr-light my-4' />
                            <h5 className="white-text font-weight-bold w-responsive mx-auto mb-5">
                                A collection of my past projects, including school projects.  Click the images to view the deployed projects.
                            </h5>

                            {/* Projects Section */}
                            <MDBRow className="text-center flex-row">

                                <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                                    <a href="https://steadfast-school.herokuapp.com/" target={"blank"}>
                                        <img
                                            src={steadFast}
                                            alt="Steadfast"
                                            className="img-fluid rounded z-depth-2 projectImage"
                                        />
                                    </a>
                                    <MDBCardBody className="pb-0 mb-3">
                                        <h4 className="font-weight-bold my-2">Steadfast<br></br>App</h4>
                                        <p className="white-text mb-2">
                                            This is my third group project. We created a landing page generator
                                            that uses a basic customer management system.  I worked with 3 others to create
                                            the authentication system and front-end design, and designed the logo.
                                        </p>
                                        <a href="https://github.com/Mbell42/steadfast-school" target={"blank"} className="gitLink"><MDBBtn gradient="purple">Github Link</MDBBtn></a>
                                    </MDBCardBody>
                                </MDBCol>

                                <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                                    <a href="https://react-employee-directory-hw-19.herokuapp.com/" target={"blank"}>
                                        <img
                                            src={employeeDirectory}
                                            alt="Employee Directory"
                                            className="img-fluid rounded z-depth-2 projectImage"
                                        /> 
                                    </a>
                                    <MDBCardBody className="pb-0 mb-3">
                                        <h4 className="font-weight-bold my-2">Employee<br />Directory</h4>
                                        <p className="white-text mb-2">
                                            This is my 19th homework project.  A sample employee directory that allows a 
                                            user to generate a set number of random employees, and then to search for them by multiple
                                            column criteria, or reset the random generation for a new set of eployees.
                                        </p>
                                        <a href="https://github.com/Mbell42/19_react_employee-directory" target={"blank"} className="gitLink"><MDBBtn gradient="purple">Github Link</MDBBtn></a>
                                    </MDBCardBody>
                                </MDBCol>                                

                                <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                                    <a href="https://arcane-journey-09301.herokuapp.com/?id=5ee2c802a334a900178b4f64" target={"blank"}>
                                        <img
                                            src={fitnessTracker}
                                            alt="Fitness Tracker"
                                            className="img-fluid rounded z-depth-2 projectImage"
                                        /> 
                                    </a>
                                    <MDBCardBody className="pb-0 mb-3">
                                        <h4 className="font-weight-bold my-2">Fitness<br />Tracker</h4>
                                        <p className="white-text mb-2">
                                            This is my 17th homework project.  Workout tracker that will allow a user to create, view, and track their daily workouts.
                                            It uses a Mongo database with a Mongoose schema and model, and will handle routes using Express.
                                            
                                        </p>
                                        <a href="https://github.com/Mbell42/17_Workout-Tracker" target={"blank"} className="gitLink"><MDBBtn gradient="purple">Github Link</MDBBtn></a>
                                    </MDBCardBody>
                                </MDBCol>

                                <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                                    <a href="https://blooming-beyond-15629.herokuapp.com/" target={"blank"}>
                                        <img
                                            src={budgetTracker}
                                            alt="Budget Tracker"
                                            className="img-fluid rounded z-depth-2 projectImage"
                                        />
                                    </a>
                                    <MDBCardBody className="pb-0 mb-3">
                                        <h4 className="font-weight-bold my-2">Budget<br />Tracker</h4>
                                        <p className="white-text mb-2">
                                            This is my 18th homework project.  Budget Tracker application that has offline access and functionality.
                                            A user can add expenses or deposits to their budget even if offline.
                                            Transactions made offline should populate to the total when brought back online.
                                            
                                        </p>
                                        <a href="https://github.com/Mbell42/18_pwa_budget-tracker" target={"blank"} className="gitLink"><MDBBtn gradient="purple">Github Link</MDBBtn></a>
                                    </MDBCardBody>
                                </MDBCol>

                                <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                                    <a href="https://minutepage-school.herokuapp.com/" target={"blank"}>
                                        <img
                                            src={minutePage}
                                            alt="Minute Page"
                                            className="img-fluid rounded z-depth-2 projectImage"
                                        />
                                    </a>
                                    <MDBCardBody className="pb-0 mb-3">
                                        <h4 className="font-weight-bold my-2">MinutePage<br />App</h4>
                                        <p className="white-text mb-2">
                                            This is the second group project. I worked with 3 others to create a landing page 
                                            generator using NodeJs, Express, and MySQL.  Users can login, and quickly 
                                            create landing pages that are bound to their user account.
                                        </p>
                                        <a href="https://github.com/Mbell42/minutepage-school" target={"blank"} className="gitLink"><MDBBtn gradient="purple">Github Link</MDBBtn></a>
                                    </MDBCardBody>
                                </MDBCol>

                                <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                                    <a href="https://currencyapp-school.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                        <img
                                            src={currencyApp}
                                            alt="Currency App"
                                            className="img-fluid rounded z-depth-2 projectImage"
                                        /> 
                                    </a>
                                    
                                    <MDBCardBody className="pb-0">
                                        <h4 className="font-weight-bold my-2">CurrencyExchangePro<br />App</h4>
                                        <p className="white-text mb-2">
                                            This is my first group project.  My team built a 
                                            currency-app that can convert any currency into another 
                                            currency, store/display your search history, and send a 
                                            text message of the most recent search details.
                                        </p>
                                        <a href="https://github.com/Mbell42/currencyExchangePro-school" target={"blank"} className="gitLink"><MDBBtn gradient="purple">Github Link</MDBBtn></a>
                                    </MDBCardBody>
                                </MDBCol>

                            </MDBRow>
                            {/* End Projects Section */}
                        </MDBCol>
                    </MDBRow>
                    
                </MDBContainer>
                </BgImage>
            </div>
        );
    }

export default GalleryCODE;