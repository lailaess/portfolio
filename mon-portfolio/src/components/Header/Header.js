import React from 'react';
import {Navbar, Nav, Container, Row, Col, Jumbotron} from 'react-bootstrap'
import './mysass.scss';
// import 'style.css'; 

class Header extends React.Component{
    render(){
        return(
            <body>
                <Navbar bg="dark" variant="dark" className="header">
                    <Container>
                        
                            <Col><Nav.Link>About Me</Nav.Link></Col>
                            <Col><Nav.Link href="#">Parcours</Nav.Link></Col>
                            <Col><Navbar.Brand>B</Navbar.Brand></Col>
                            <Col><Nav.Link href="#">Projets</Nav.Link></Col>
                            <Col><Nav.Link href="#">Hobbies</Nav.Link></Col>
                    </Container>
                    <Navbar.Brand>Contact</Navbar.Brand>

                </Navbar>

           </body>
        )
    }
}

export default Header; 