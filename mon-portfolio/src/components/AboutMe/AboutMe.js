import React from 'react';
import {Container, Row, Col, Image } from 'react-bootstrap';
import './mysass.scss';
import './css/skeleton.css';
import './css/normalize.css'

import Photo from './photoCV/pp.png'

class AboutMe extends React.Component{
    render(){
        return(
            <div id="aboutme" title="aboutme">
                {/* <Container> */}
                    <div className="fiche">
                        <div className="fiche_contenu">
                            <Row>
                                <Col xs="12" md="12" lg="6" xl="lg" className="fichePhoto">
                                    <span><Image src={Photo} className="image_photo" fluid /></span>
                                </Col>
                                <Col xs="12" md="12" lg="6" xl="lg" className="ficheText">
                                    <span className="info_nom"><b>Je m'appelle Laila</b></span><br/><span className="info_age"> j'ai 22 ans et je suis en formation Développement web au Samsung Campus.</span>

                                    <br/><br/>
                                    <p className="info_supplementaire">Après quelques années d'études et quelques expériences professionnelles dans des domaines totalement différent, 
                                    c'est ma curiosité qui m'a amené à m'intéressée au monde de la programmation.</p>

                                    <div className="info_caractere-poste">

                                        <p>De nature très curieuse, je suis également persévérante et motivée à l'idée d'en connaître d'avantage sur le code.
                                        Bien que parfois discrète, je suis habituée au travail en équipe, celà ne me fait pas peur ! </p>
                                        
                                        {/* <h3>Recherche d'emploi actuel</h3> */}
                                        <p>Actuellement à la recherche d'un contrat de Professionnalisation</p>
                                    </div>
                                </Col>
                            </Row>
                            {/* <Row>
                                <div className="info_caractere-poste"> */}
                                {/* <h3>Caractere</h3> */}
{/* 
                                    <p>De nature très curieuse, je suis également persévérante et motivée à l'idée d'en connaître d'avantage sur le code.
                                    Bien que parfois discrète, je suis habituée au travail en équipe, celà ne me fait pas peur ! </p> */}
                                    
                                    {/* <h3>Recherche d'emploi actuel</h3> */}
                                    {/* <p>Actuellement à la recherche d'un contrat de Professionnalisation</p> */}
                                {/* </div> */}
                            {/* </Row> */}
                        </div>
                    </div>
                    
                {/* </Container> */}
            </div>
        )
    }
}


export default AboutMe; 