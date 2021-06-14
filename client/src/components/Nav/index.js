//DEPENDENCIES
import React, { Component } from "react";
  //components
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from "mdbreact";
  //router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
  //Pages
import Home from "../../pages/Home";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import GalleryCode from "../../pages/GalleryCode";
import GalleryVFX from "../../pages/GalleryVFX";
import GalleryDesign from "../../pages/GalleryDesign";
  //pdf
import Resume from "../../pages/MattBell-Resume.pdf";

//COMPONENT
class Nav extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Router>
        {/* NavBar */}
        <MDBNavbar className="navbar fixed-top" color="secondary-color-dark" dark expand="md" scrolling>
            {/* Logo */}
            <MDBNavbarBrand>
                <MDBNavLink to="/home"><strong className="white-text">MB</strong></MDBNavLink>
            </MDBNavbarBrand>
            {/* End Logo */}
            <MDBNavbarToggler onClick={this.toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            {/* Links */}
            <MDBNavbarNav left>
                <MDBNavItem>
                    <MDBNavLink to="home">Home</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink to="about">About</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink to="contact">Contact</MDBNavLink>
                </MDBNavItem>
                    
                {/* Dropdown for Gallery Links */}
                <MDBNavItem>
                    <MDBDropdown>
                        <MDBDropdownToggle nav caret>
                            <span className="mr-2">Galleries</span>
                        </MDBDropdownToggle>
                        <MDBDropdownMenu>
                            <MDBDropdownItem href="gallery_code">Web Development Gallery</MDBDropdownItem>
                            <MDBDropdownItem href="gallery_vfx">VFX Gallery</MDBDropdownItem>
                            <MDBDropdownItem href="gallery_design">Web Design Gallery</MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                </MDBNavItem>
                {/* End Dropdown for Gallery Links */}

                {/* Link to open pdf of Resume in new tab */}
                <MDBNavItem>
                  <a role="presentation" className="nav-link" href={Resume} target="_blank" rel="noopener noreferrer">Resume</a>
                </MDBNavItem>
            </MDBNavbarNav>
            {/* End Links */}

          {/* Right side of NavBar */}
          {/* <MDBNavbarNav right>
            <MDBNavItem>
              <MDBFormInline waves>
                <div className="md-form my-0">
                  <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                </div>
              </MDBFormInline>
            </MDBNavItem>
          </MDBNavbarNav> */}
        </MDBCollapse>
      </MDBNavbar>
      {/* End NavBar */}

      {/* Switch to control conditional routing */}
      <Switch>
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/gallery_code" component={GalleryCode} />
              <Route path="/gallery_vfx" component={GalleryVFX} />
              <Route path="/gallery_design" component={GalleryDesign} />
              <Route path="/home" component={Home} />
              <Route exact path="/" component={Home} />
            </Switch>
    </Router>
    );
  }
}

export default Nav;