//DEPENDENCIES
import React from 'react';
  //components
import BgImage from "../components/BgImage";
import {
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBContainer
} from 'mdbreact';
// import '../App.js'

//styles
import './css/pages.css';
  //images
import mbSquare from "../images/portrait/mbSquare.jpg";

//PAGE
const Home = () => {
    return (
      <div className='pageContainer'>
        <BgImage>
          <MDBContainer className='mainContainer d-flex justify-content-center align-items-center'>
            <MDBRow>
              {/* Main center column will contain intro header */}
              <MDBCol md='12' className='mb-4 white-text text-center'>
                <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 '>
                  Matthew Bell
                </h1>
                <hr className='hr-light my-4' />
                {/* Left Column will contain intro text and calls to action. */}
                <MDBCol md='8' className='mb-4 white-text text-center float-left'>
                    <h4 className='text-uppercase mb-4 white-text '>
                        <strong>
                          Web Design and VFX
                        </strong>
                    </h4>
                    <p>
                      Web Developer/Designer with a background in 3D Animation and VFX 
                      with 4 years of experience in film and mobile video game production. 
                      I learn new skills quickly, with the ability to pivot and take on new 
                      challenges. I am seeking a transition into Web and Software Development.
                    </p>
                    {/* Call to Action */}
                    <a href="/about" className="white-text py-3"><MDBBtn gradient="peach">Read More</MDBBtn></a>
                    <a href="/contact" className="white-text"><MDBBtn gradient="purple">Contact Me</MDBBtn></a>
                    
                </MDBCol>
                {/* Right Column will contain image */}
                <MDBCol md='4' className='mb-4 float-right'>
                    <img src={mbSquare} alt="Matthew Bell" className="img-fluid rounded-circle" />
                </MDBCol>
            </MDBCol>
            </MDBRow>
          </MDBContainer>
          </BgImage>
      </div>
    );
  }

export default Home;