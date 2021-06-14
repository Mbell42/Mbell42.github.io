//DEPENDENCIES
import React from "react";
    //components
import { 
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBBtn
} from "mdbreact";
    //styles
import '../../pages/css/pages.css';

//COMPONENT
const Map = () => {
    return (
        <MDBCol lg="7">
            <div
            id="map-container"
            className="rounded z-depth-1-half map-container"
            style={{ height: "400px" }}
            >
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d76765.98321148289!2d-117.0147!3d32.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1525939514494"
                title="La Mesa"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
            />
            </div>
            <br />
            {/* Location Details */}
            <MDBRow className="text-center">
            <MDBCol md="4">
                <MDBBtn tag="a" color="indigo" className="accent-1">
                <MDBIcon icon="map-marker-alt" />
                </MDBBtn>
                <p className="white-text"><small>La Mesa, 91942</small></p>
                <p className="mb-md-0 white-text"><small>United States</small></p>
            </MDBCol>
            <MDBCol md="4">
                <MDBBtn tag="a" color="indigo" className="accent-1">
                <MDBIcon icon="phone" />
                </MDBBtn>
                <p className="white-text"><small>+ 01 858 922 5440</small></p>
                <p className="mb-md-0  white-text"><small>Mon - Fri, 8:00-20:00</small></p>
            </MDBCol>
            <MDBCol md="4">
                <MDBBtn tag="a" color="indigo" className="accent-1">
                <MDBIcon icon="envelope" />
                </MDBBtn>
                <p className="white-text"><small>matthewbell1030@gmail.com</small></p>
                
            </MDBCol>
            </MDBRow>
        </MDBCol>
    )}

    export default Map;