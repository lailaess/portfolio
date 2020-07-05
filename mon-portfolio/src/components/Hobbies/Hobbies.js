import React from 'react';
import {Container, Row, Col, Image, Button } from 'react-bootstrap';

import PhotoLecture from './photoHobbies/lecture.png';
import PhotoInformatique from './photoHobbies/informatique.png';

import './mysass.scss';

class Hobbies extends React.Component{
    render(){
        return(
            <div className="hobbies">
                <Container>
                    <h2>Mes centres d'intérêts</h2>

                    <Row>
                        <Col xs="12" md="6" lg="6" xl="lg">
                            <Image src={PhotoLecture} fluid className="hobbies_image" />
                            <h6>Lecture</h6>

                        </Col>
                        <Col xs="12" md="6" lg="6" xl="lg">
                            <Image src={PhotoInformatique} fluid className="hobbies_image" />
                            <h6>Informatique</h6>

                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Hobbies; 