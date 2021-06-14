//DEPENDENCIES
import React, { Component } from "react";
// import axios from "axios";
    //components
import BgImage from "../components/BgImage";
import ContactForm from "../components/ContactForm";
import Map from "../components/Map";
import { 
    MDBContainer,
    MDBRow,
    MDBCol,
} from "mdbreact";
    //styles
import './css/pages.css';

//PAGE
class Contact extends Component {
    render() {
        return (
            <div className='pageContainer'>
                <BgImage>
                    <MDBContainer className="mainContainer d-flex justify-content-center align-items-center">
                        <MDBRow>
                            {/* Main column will contain about header, text, and calls to action */}
                            {/* Header */}
                            <MDBCol md='12' className='mb-4 white-text '>
                                <h1 className="h1-reponsive text-center white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5">
                                    Contact me
                                </h1>
                                <hr className='hr-light my-4' />
                                <h5 className="text-center font-weight-bold white-text w-responsive mx-auto pb-5">
                                    If you have any questions, or would like to collaborate on a project,
                                    please let me know!
                                </h5>
                                <MDBRow>
                                    {/* Form Section */}
                                    <ContactForm></ContactForm>
                                    {/* Map Section */}
                                    <Map></Map>
                                </MDBRow>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </BgImage>
            </div>
        );
    }  
}

export default Contact;