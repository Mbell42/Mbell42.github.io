//DEPENDENCIES
import React, { Component } from "react";
import axios from "axios";
    //components
import { 
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBIcon,
    MDBBtn,
    MDBInput } from "mdbreact";
    //styles
import '../../pages/css/pages.css';

//COMPONENT
class ContactForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            subject: "",
            message: "",
        }
    }
//LOGIC
    //reset the contact form
    resetForm(){
            this.setState({name: "", email: "", subject: "", message: ""});
    };
    //
    handleSubmit(e){
        e.preventDefault();
        console.log(this.state);
        try {
            axios({
                method: "POST", 
                url: "/send",
                data: this.state
            })
            .then(
                setTimeout(() => {
                    alert("email sent");
                    this.resetForm()
                }, 3000)
            );
        } catch (error) {
            console.log(error);
        }
    };
//RENDER
    render() {
        return (
            <>
            <MDBCol lg="5" className="lg-0 mb-4">
                <MDBCard>
                    {/* Form Header */}
                    <MDBCardBody>
                        <div className="text-center form-header indigo accent-1">
                            <h3 className="mt-2">
                                <MDBIcon icon="envelope" /> Send me a message:
                            </h3>
                        </div>
                        <p className="text-center font-small dark-grey-text">
                            I will return your message as soon as possible.
                        </p>
                        {/* Form Input */}
                        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST"> 
                            <div className="md-form form-group">
                                <MDBInput
                                    className="form-control"
                                    icon="user"
                                    label="Your name"
                                    iconClass="grey-text"
                                    type="text"
                                    value={this.state.name}
                                    onChange={this.onNameChange.bind(this)}
                                    id="form-name"                                                        
                                />
                            </div>
                            <div className="md-form form-group">
                                <MDBInput
                                    className="form-control"
                                    icon="envelope"
                                    label="Your email"
                                    iconClass="grey-text"
                                    type="email"
                                    value={this.state.email}
                                    onChange={this.onEmailChange.bind(this)}
                                    id="form-email"
                                />
                            </div>
                            <div className="md-form form-group">
                                <MDBInput
                                    className="form-control"
                                    icon="tag"
                                    label="Subject"
                                    iconClass="grey-text"
                                    type="text"
                                    value={this.state.subject}
                                    onChange={this.onSubjectChange.bind(this)}
                                    id="form-subject"
                                />
                            </div>
                            <div className="md-form form-group">
                                <MDBInput
                                    className="form-control"
                                    icon="pencil-alt"
                                    label="Message"
                                    iconClass="grey-text"
                                    type="textarea"
                                    rows="5"
                                    value={this.state.message}
                                    onChange={this.onMessageChange.bind(this)}
                                    id="form-text"   
                                />
                            </div>
                            <div className="text-center">
                                <MDBBtn gradient="peach" type="submit">Submit</MDBBtn>
                            </div>
                        </form>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
            </>
        );
    }  
    onNameChange(event) {
        this.setState({name: event.target.value})
    }
    onEmailChange(event) {
        this.setState({email: event.target.value})
    }
    onSubjectChange(event) {
        this.setState({subject: event.target.value})
    } 
    onMessageChange(event) {
        this.setState({message: event.target.value})
    }
}

export default ContactForm;