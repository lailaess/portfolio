import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'

// import Footer2 from 'rc-footer'
// import 'rc-footer/assets/index.css'
import './mysass.scss';

class Footer extends React.Component{
    render(){
        return(
            
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
           
        )
    }
}

export default Footer; 