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
  //styles
import './css/pages.css';
  //images
import mbSquare from "../images/portrait/mbSquare.jpg"

//PAGE
const About = () => {

    return (
      <div className='pageContainer'>
        <BgImage>
          <MDBContainer className='mainContainer d-flex justify-content-center align-items-center'>
            <MDBRow>
              {/* Main column will contain about header, text, and calls to action */}
              <MDBCol md='12' className='mb-4 white-text text-center'>
                <h1 className="h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5">
                    About Me
                </h1>
                <hr className='hr-light my-4' />
                {/* Left Column will contain about text and calls to action. */}
                <MDBCol md='8' className='mb-4 float-left white-text text-center'>
                  <h4 className='text-uppercase mb-4 white-text '>
                      <strong>
                        Web Design and VFX
                      </strong>
                  </h4>
                  <p>
                    I am a Web Developer/Designer with a background in 3D Animation and VFX 
                    with 4 years of experience in film and mobile video game production.  
                    Graduate of UCSD Coding Bootcamp, with skills in HTML, CSS, NodeJS, 
                    MongoDB, Express, React, and NodeJS.  I enjoy working in a challenging 
                    environment and I mesh well with any size team.

                    My bag of skills includes, but is not limited to; 3D Charater Animation, 
                    VFX Compositing, Databases, Data Collection, and both Quality Control/Assurance. 
                    Top among my goals is to work in a team environment, where collaboration allows 
                    for the creation of solutions to new and difficult problems, and where the combined 
                    value of the product is increased beyond the sum of its parts.
                  </p>
                  {/* Call to Action */}
                  <a href="/contact" className="white-text"><MDBBtn gradient="purple">Contact Me</MDBBtn></a>
                  <a href="/gallery_code" className="white-text"><MDBBtn gradient="peach">Web Development Gallery</MDBBtn></a>
                  <a href="/gallery_vfx" className="white-text"><MDBBtn gradient="peach">VFX Gallery</MDBBtn></a>
                </MDBCol>
                {/* Right Column will contain image */}
                <MDBCol md='4' className='float-right'>
                  <img src={mbSquare} alt="Matthew Bell" className="img-fluid rounded-circle" />
                </MDBCol>
              </MDBCol>  
            </MDBRow>
          </MDBContainer>
        </BgImage>
      </div>
    );
  }

export default About;