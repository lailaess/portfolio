import React from 'react';
import {Container, Row, Col, Image, Button, Form } from 'react-bootstrap';

import * as emailjs from 'emailjs-com';

import './mysass.scss';

class Contact extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            name : '', 
            email : '',
            message: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.sendMessage = this.sendMessage.bind(this)
    }

    // state = {
    //     on : false
    // }

    // toggle = () => {
    //     this.setState({
    //         on: !this.state.on
    //     })
    // }





    handleChange(e) {
        const value = e.target.value;

        if (e.target.className === "name form-control"){
            this.setState({ name: value})
        }
        else if (e.target.className === "email form-control"){
            this.setState({ email: value })
        }
        else if (e.target.className === "message form-control"){
            this.setState({ message: value })
        }
    }

    
    sendMessage(event) {
        event.preventDefault();

        if (this.state.name.length < 2 ||  !/[a-zA-Z]/.test(this.state.name)){
            alert("Veuillez inscrire un nom valide.")
        }

        else if (this.state.email.length < 0  || !/([a-zA-Z0-9\-\.])+@[a-zA-Z_\-\.]+\.[a-z]{2,3}/.test(this.state.email)){
            alert("Veuillez inscrire une adresse mail valide.")
        }

        else if (this.state.message.length < 0 || !/(\w+\W)/.test(this.state.message)){
            alert("Veuillez ecrire votre message avant d'envoyer votre requette.")
        }
    }
    


    handleSubmit(e){
        e.preventDefault();

        const {name, email, message} = this.state

        let templateParams = {
            from_name: email,
            to_name: 'laila.essadouqi@gmail.com',
            subject: 'Contact depuis le portfolio',
            message_html: message

        }

        emailjs.send(
            'gmail',
            'portfolio',
            templateParams,
            'user_FOasgK3LSYkur2AV1krXo'

        )
    }

    render(){
        return(
            <div className="contact">
                <Container>
                   
                        <h4>N'hésitez pas à me contacter</h4>
                        {/* <button onClick={this.toggle}>TEST</button>
                        {this.state.on && ( */}

                        
                        <Form controlId="contact-form" method="POST" onSubmit={this.handleSubmit.bind(this)} >
                            <Row>
                                <Col xs="12" md="12" lg="6">
                                    <Form.Group controlId="formBasicName">
                                        <Form.Control type="name" placeholder="NOM" className="name" value={this.state.name}  onChange={this.handleChange} required />
                                    </Form.Group>
                                </Col>
                                <Col xs="12" md="12" lg="6">
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control type="email" placeholder="EMAIL" className="email" onChange={this.handleChange} value={this.state.email} required />
                                    </Form.Group>
                                </Col>
                            </Row>
                            
                            
                            <Form.Group controlId="ControlTextarea">
                                <Form.Control as="textarea" rows="4" placeholder="MESSAGE" className="message" onChange={this.handleChange} value={this.state.message} required />
                            </Form.Group>

                            <Button variant="primary" type="submit" className="contact_submit-button" onClick={this.sendMessage}>Envoyer</Button>
                        </Form>
                    {/* )} */}
                </Container>

                <footer>
                    <hr />
                    <Container>
                        <Row>
                            <Col>Linkedin</Col>
                            <Col>Samsung Campus</Col>
                            <Col>Email</Col>
                        </Row>
                        <Row className="copyright">
                            <Col>
                                <p>Copyright &Copy; 2020 White - All rights reserved</p>
                            </Col>
                        </Row>
                    </Container>  
                </footer>
           
            </div>
        )
    }
}



export default Contact; 