import React from 'react';
import {Container, Row, Col, Image, Button } from 'react-bootstrap';

import './mysass.scss';
import './css/normalize.css';
import './css/skeleton.css';

import PhotoDYMED from './photoProjets/dymed/dymed_accueil.png';
import PhotoPuissance4 from './photoProjets/puissance4/puissance4.png';


class Projets extends React.Component{

    constructor(props){
        super(props);
        // this.state = {isToggleOn: true};

        // this.handleClick = this.handleClick.bind(this); 
        // this.handleClick2 = this.handleClick2.bind(this);

        
    }

    state = {
        on: false
    }

    handleClick(){
        console.log('BOUTON CLICKED');
       
        
    }

    handleClick2(){
        console.log('BOUTON CLICKED 2');
        
    }

    render(){
        return(
            <div className="projets">
                <Container>
                    <h2>Mes Projets</h2>
                    <h5>Retrouvez ici quelques un de mes projets réalisés dans le cadre de ma formation au Samsung Campus</h5>

                    <Row>
                        <Col xs="12" md="12" lg="6" xl="lg" >
                            <Image src={PhotoDYMED} fluid className="image_dymed" onClick={this.handleClick} />
                            {this.state.on && (
                                <h1>RICK SANCHEZ DIMENSION C-137</h1>
                            )}
                            
                        </Col>
                        <Col xs="12" md="12" lg="6" xl="lg" >
                            <Image src={PhotoPuissance4} fluide className="image_puissance4" onClick={this.handleClick2} />
                        </Col>
                    </Row>

                </Container>
                
            </div>
        )
    }
}

export default Projets; 