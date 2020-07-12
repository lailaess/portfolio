import React from 'react';
import { Navbar, Nav, Container, Row , Col,Jumbotron, Button, NavDropdown } from 'react-bootstrap'
import './mysass.scss';
import './css/normalize.css';
import './css/skeleton.css';

import {Link as Linkscroll, animateScroll as scroll } from 'react-scroll';


class Header extends React.Component {
    render() {
        return (
            //     <div>
            //         <Navbar bg="dark" variant="dark" className="header nav navbar-nav">
            //             <Navbar.Collapse>
            //                 <Container>
                                    
            //                            <Nav.Link>A Propos</Nav.Link>
            //                            <Nav.Link  href="#">Formations</Nav.Link>
            //                            <Navbar.Brand>Bienvenue</Navbar.Brand>
            //                            <Nav.Link  href="#">Portfolio</Nav.Link>
            //                            <Nav.Link  href="#">Hobbies</Nav.Link>
                                    

            //                 </Container>
            //                 <Navbar.Brand>Contact</Navbar.Brand>
            //             </Navbar.Collapse>

            //         </Navbar>

            //    </div>



            <div>
                <Navbar collapseOnSelect expand="md"  nav navbar-nav className="mainNav">
                    <Nav.Link  href="#welcome" className="bienvenue"><p className="navText">laila</p></Nav.Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="navbar-toggle"/>


                    <Navbar.Collapse id="responsive-navbar-nav" className="custom-collapse">
                        <Nav className="mr-auto">
                            {/* <Container> */}
                               <Nav.Link><Linkscroll activeClass="active" to="aboutme" spy={true} smooth={true} offset={-70} duration={500}><p className="navText">À Propos</p></Linkscroll></Nav.Link>
                               <Nav.Link><Linkscroll activeClass="active" to="parcours" spy={true} smooth={true} offset={-70} duration={500}><p className="navText">Formations</p></Linkscroll></Nav.Link>
                               <Nav.Link><Linkscroll activeClass="active" to="projets" spy={true} smooth={true} offset={-70} duration={500}><p className="navText">Portfolio</p></Linkscroll></Nav.Link>
                               <Nav.Link><Linkscroll activeClass="active" to="hobbies" spy={true} smooth={true} offset={-70} duration={500}><p className="navText">Hobbies</p></Linkscroll></Nav.Link>
                               <Nav.Link><Linkscroll activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500}><p className="navText">Contact</p></Linkscroll></Nav.Link>

                            {/* </Container> */}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>


            // <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            //     <Navbar.Brand  href="#home">Laila Essadouqi</Navbar.Brand>
            //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            //     <Navbar.Collapse id="responsive-navbar-nav">
            //         <Nav className="mr-auto">
            //             <Nav.Link  href="#features">A propos</Nav.Link>
            //             <Nav.Link  href="#pricing">Formation</Nav.Link>
            //             <Nav.Link  href="#">Portfolio</Nav.Link>
            //             <Nav.Link  href="#">Hobbies</Nav.Link>

            //         </Nav>
            //         <Nav>
            //             <Nav.Link  href="#deets">More deets</Nav.Link>
            //             <Nav.Link   href="#memes">
            //                 Dank memes
            //             </Nav.Link>
            //         </Nav>
            //     </Navbar.Collapse>
            // </Navbar>
        )
    }
}

export default Header;

