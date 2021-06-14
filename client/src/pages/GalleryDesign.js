//DEPENDENCIES
import React from "react";
    //components
import BgImage from "../components/BgImage";
import { 
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCardBody
} from "mdbreact";
    //styles
import './css/pages.css';
    //images

//PAGE
const GalleryDESIGN = () => {
    return (
        <div className='pageContainer'>
            <BgImage>
            <MDBContainer className="mainContainer d-flex justify-content-center align-items-center">
                <MDBRow>
                    {/* Main column will contain about header, projects, descriptions, and calls to action */}
                    <MDBCol md='12' className='mb-4 white-text text-center'>
                
                        <h1 className="h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5">
                            Web Design Gallery
                        </h1>
                        <hr className='hr-light my-4' />
                        <h5 className="white-text font-weight-bold w-responsive mx-auto mb-5">
                            A collection of my past projects, including school projects.  Click the images to view the deployed projects.
                        </h5>

                        {/* Projects Section */}
                        <MDBRow className="text-center flex-row">

                        </MDBRow>
                        {/* End Projects Section */}
                    </MDBCol>
                </MDBRow>
                
            </MDBContainer>
            </BgImage>
        </div>
    );
}

export default GalleryDESIGN;