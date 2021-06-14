//DEPENDENCIES
import React from "react";
  //components
import { MDBCol,
  MDBContainer,
  MDBRow,
  MDBFooter
} from "mdbreact";

//COMPONENT
const Footer = () => {
  return (
    <MDBFooter color="secondary-color-dark" className="font-small pt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          {/* Contact Details */}
          <MDBCol md="6">
            <h5 className="title">Matthew Bell</h5>
            <hr className='hr-grey my-4' />

            <p>
              email: matthewbell1030@gmail.com
              <br />
              phone: 858-922-5440
            </p>
          </MDBCol>
          {/* End Contact Details */}
          
          {/* Links */}
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <hr className='hr-grey my-4' />

            <ul className="pl-0">
              <li className="list-unstyled">
              <a href="https://github.com/Mbell42" target="_blank" rel="noopener noreferrer">
                  <p>
                      Github
                  </p>
                </a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.linkedin.com/in/matthew-bell-developer-artist/" target="_blank" rel="noopener noreferrer">
                  <p>
                      LinkedIn
                  </p>
                </a>
              </li>
              <li className="list-unstyled">
                <a href="https://vimeo.com/matthewgbell" target="_blank" rel="noopener noreferrer">
                  <p>
                      Vimeo
                  </p>
                </a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.imdb.com/name/nm7347199/?ref_=rvi_nm" target="_blank" rel="noopener noreferrer">
                  <p>
                      IMDB
                  </p>
                </a>
              </li>
            </ul>
          </MDBCol>
          {/* End Links */}
        </MDBRow>
      </MDBContainer>
      
      {/* Copyright/Contact section */}
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
        <p className="text-center">
            matthewbell1030@gmail.com<br />phone: 858-922-5440
          </p>
          &copy; {new Date().getFullYear()} Copyright
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;