import React from 'react';
import {Container, Row, Col, Image, Button } from 'react-bootstrap';

import PhotoLecture from './photoHobbies/lecture.png';
import PhotoInformatique from './photoHobbies/informatique.png';

import './mysass.scss';

class Hobbies extends React.Component{
    render(){
        return(
            <div id="hobbies" title="hobbies">
                {/* <Container> */}
                    <h2 className="hobbies-titre">Mes centres d'intérêts</h2>

                    <Row className="mes-hobbies">
                        <Col xs="12" md="6" lg="6" xl="lg" className="lecture">
                            <Image src={PhotoLecture} fluid className="hobbies_image"  hidden/>
                            <h2>Lecture</h2>

                        </Col>
                        <Col xs="12" md="6" lg="6" xl="lg" className="informatique">
                            <Image src={PhotoInformatique} fluid className="hobbies_image" hidden />
                            <h2>Informatique</h2>

                        </Col>
                    </Row>
                {/* </Container> */}
            </div>
        )
    }
}

export default Hobbies; 