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
import antman from "../images/projects/vfx/antman.jpg"
import poltergeist from "../images/projects/vfx/poltergeist.jpg"
import theWalk from "../images/projects/vfx/theWalk.jpg"
import insurgent from "../images/projects/vfx/insurgent.jpg"

//PAGE
const GalleryVFX = () => {
        return (
            <div className='pageContainer'>
            <BgImage>
            <MDBContainer className="mainContainer d-flex justify-content-center align-items-center">
                <MDBRow>
                    {/* Main column will contain about header, projects, descriptions, and calls to action */}
                    <MDBCol md='12' className='mb-4 white-text text-center'>
                        <h1 className="h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5">
                            VFX Gallery
                        </h1>
                        <hr className='hr-light my-4' />
                        <h5 className="white-text  font-weight-bold w-responsive mx-auto mb-5">
                            Some of the VFX projects I have had the pleasure to take part in.  Click the images to view my IMDB page, which includes my credits.
                        </h5>

                        {/* Projects Section */}
                        <MDBRow className="text-center">
                            <MDBCol lg="3"></MDBCol>
                            <MDBCol lg="6" md="12" className="mb-lg-0 mb-4">
                                <a href="https://www.imdb.com/name/nm7347199/?ref_=ttfc_fc_cr429" target={"blank"}>     
                                    <img
                                        src={antman}
                                        alt=""
                                        className="img-fluid rounded z-depth-3 projectImage"
                                    />
                                </a>
                                <MDBCardBody className="pb-0">
                                    <h4 className="font-weight-bold my-2">Antman (2015)</h4>
                                    <p className="white-text mb-2">
                                        Provided VFX and Stereoscopic VFX compositing for 2D and 3D. 
                                    </p>
                                </MDBCardBody>
                            </MDBCol>
                            <MDBCol lg="3"></MDBCol>

                            <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                                <a href="https://www.imdb.com/name/nm7347199/?ref_=ttfc_fc_cr429" target={"blank"}>
                                    <img
                                        src={poltergeist}
                                        alt=""
                                        className="img-fluid rounded z-depth-3 projectImage"
                                    />
                                </a>
                                <MDBCardBody className="pb-0">
                                    <h4 className="font-weight-bold my-2">Poltergeist<br />(2016)</h4>
                                    <p className="white-text mb-2">
                                        Provided VFX and Stereoscopic VFX compositing for 2D and 3D. 
                                    </p>
                                </MDBCardBody>
                            </MDBCol>

                            <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                                <a href="https://www.imdb.com/name/nm7347199/?ref_=ttfc_fc_cr429" target={"blank"}>
                                    <img
                                        src={insurgent}
                                        alt=""
                                        className="img-fluid rounded z-depth-3 projectImage"
                                    />
                                </a>
                                <MDBCardBody className="pb-0">
                                    <h4 className="font-weight-bold my-2">Divergent Series: Insurgent (2015)</h4>
                                    <p className="white-text mb-2">
                                        Provided VFX and Stereoscopic VFX compositing for 2D and 3D. 
                                    </p>
                                </MDBCardBody>
                            </MDBCol>

                            <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                                <a href="https://www.imdb.com/name/nm7347199/?ref_=ttfc_fc_cr429" target={"blank"}> 
                                    <img
                                        src={theWalk}
                                        alt=""
                                        className="img-fluid rounded z-depth-3 projectImage"
                                    />
                                </a>
                                <MDBCardBody className="pb-0">
                                    <h4 className="font-weight-bold my-2">The Walk<br />(2015)</h4>
                                    <p className="white-text mb-2">
                                        Provided VFX and Stereoscopic VFX compositing for 2D and 3D. 
                                    </p>
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

export default GalleryVFX;