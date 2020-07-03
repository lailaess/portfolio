import React from 'react';
import {Navbar, Nav, Container, Row, Col, Jumbotron} from 'react-bootstrap'
import './mysass.scss';
// import 'style.css'; 

class Header extends React.Component{
    render(){
        return(
            <div>
                <Navbar bg="dark" variant="dark" className="header nav navbar-nav">
                    <Container>
                        
                            <Col><Nav.Link>A Propos</Nav.Link></Col>
                            <Col><Nav.Link href="#">Formations</Nav.Link></Col>
                            <Col><Navbar.Brand>Bienvenue</Navbar.Brand></Col>
                            <Col><Nav.Link href="#">Portfolio</Nav.Link></Col>
                            <Col><Nav.Link href="#">Hobbies</Nav.Link></Col>
                    </Container>
                    <Navbar.Brand>Contact</Navbar.Brand>

                </Navbar>

           </div>
        )
    }
}

export default Header; 