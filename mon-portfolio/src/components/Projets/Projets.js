import React from 'react';
import {Container, Row, Col, Image, Button, Modal } from 'react-bootstrap';


import AppDYMED from '../projet-modal/projet-modal';
import AppPuissance4 from '../projet-modal2/projet-modal2';


import './mysass.scss';
import './css/normalize.css';
import './css/skeleton.css';

import PhotoDYMED from './photoProjets/dymed/dymed_accueil.png';
import PhotoDYMEDinscription from './photoProjets/dymed/dymed_inscription.png';
import PhotoDYMEDadmin from './photoProjets/dymed/dymed_pageadmin.png';


import PhotoPuissance4 from './photoProjets/puissance4/puissance4.png';


class Projets extends React.Component{

    handleClick(){
        console.log('BOUTON CLICKED');
       
       
        
    }

    handleClick2(){
        console.log('BOUTON CLICKED 2');
        
    }


    render(){
        return(
            <div id="projets" title="projets">
                <Container>
                    <h2 className="projets-titre">Mes Projets</h2>
                    <h5>Retrouvez ici quelques un de mes projets réalisés dans le cadre de ma formation au Samsung Campus</h5>

                    <Row className="projets-vignettes">
                        <Col xs="12" md="12" lg="6" xl="lg" >
                            <Image src={PhotoDYMED} fluid className="image_dymed"/>
                            <AppDYMED/>
                        </Col>
                        <Col xs="12" md="12" lg="6" xl="lg" >
                            <Image src={PhotoPuissance4} fluide className="image_puissance4" onClick={this.toggle2} />
                            <AppPuissance4 />
                        </Col>
                    </Row>

                </Container>
                
            </div>
        )
    }
}

export default Projets; 