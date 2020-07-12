import React from 'react';
import {Container, Row, Col, Image, Button } from 'react-bootstrap';

import './mysass.scss';
import './css/normalize.css';
import './css/skeleton.css';



import PhotoFormation from './photoIcon/formation.png';
import PhotoExp from './photoIcon/exp.png';
import PhotoSkill from './photoIcon/skill.png';
import CV from './CV/CV_dev.pdf'

import {useMediaQuery} from 'react-responsive'; 

class Parcours extends React.Component{

    // isDesktop = useMediaQuery({ query: '(min-device-width: 1024px)'})
    // isTablet = useMediaQuery({ query: '(min-device-width: 740px)'})
    // isSmartphonePaysage = useMediaQuery({ query: '(min-device-width: 720px)'})
    // isSmartphonePortrait = useMediaQuery({ query: '(min-device-width: 480px)'})




    render(){
        return(
            <div id="parcours" title="parcours">
                {/* <div id="parcours-inside"> */}
                    <Container>
                        <h2 className="parcours-main-titre">Expériences et Compétences</h2>
                        <Row>
                            <Col xs="12" md="12" lg="6" xl="lg" className="scolaire" >
                                <Row className="parcours-titre">
                                    {/* <span><Image src={PhotoFormation} fluide className="icon" /></span>
                                    <span><h5>Formations</h5></span> */}

                                    <h5>
                                    <Image src={PhotoFormation} fluide className="icon icon_formations" />
                                    Formations
                                    </h5>
                                </Row>
                                <div className="parcours_information">
                                    <Row className="parcours_ligne">
                                        <Col ><p className="parcours_date">(2019 - en cours)</p></Col>
                                        <Col><p className="parcours_mes-formations"><strong>Formation Samsung Campus</strong></p></Col>
                                    </Row>
                                    <Row className="parcours_ligne">
                                        <Col><p className="parcours_date">(2017 - 2018)</p></Col>
                                        <Col><p className="parcours_mes-formations"><strong>Licence LLCE Chinois/Anglais</strong> <br /> UFR Paris Diderot</p></Col>
                                    </Row>
                                    <Row className="parcours_ligne">
                                        <Col><p className="parcours_date">(2015 - 2017)</p></Col>
                                        <Col><p className="parcours_mes-formations"><strong>Licence Psychologie</strong> <br/> UFR Paris Descartes</p></Col>
                                    </Row>
                                    <Row className="parcours_ligne">
                                        <Col><p className="parcours_date">(2015)</p></Col>
                                        <Col><p className="parcours_mes-formations"><strong>Baccalauréat Economque & Sociale </strong> <br/> Spé Science Politique</p></Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col xs="12" md="12" lg="6" xl="lg" className="professionnel" >
                                <Row className="professionnel parcours-titre">
                                    <span><Image src={PhotoExp} fluide className="icon" /></span>
                                    <span><h5>Expériences</h5></span>

                                    
                                </Row>
                                <div className="parcours_information">
                                    <Row className="parcours_ligne">
                                        <Col><p className="parcours_date">(2016 - 2019)</p></Col>
                                        <Col><p className="parcours_mes-formations"><strong>Employée de réserve</strong> <br/> Zara</p></Col>
                                    </Row>
                                    <Row className="parcours_ligne vacataire">
                                        <Col><p className="parcours_date">(2016)</p></Col>
                                        <Col><p className="parcours_mes-formations"><strong>Vacataire</strong> <br/> Centre de dialyse AURA</p></Col>
                                    </Row>
                                    <Row className="parcours_ligne stradivarius">
                                        <Col><p className="parcours_date">(2016)</p></Col>
                                        <Col><p className="parcours_mes-formations"><strong>Employée Polyvalent</strong> <br/> Stradivarius</p></Col>
                                    </Row>
                                </div>
                            </Col>
                            
                        </Row>
                        

                    </Container>
                    <Container>
                        <Row className="parcours-titre competence">
                            <span><Image src={PhotoSkill} fluide className="icon" /></span>
                            <span><h5>Compétences Techniques</h5></span>
                        </Row> 
                        <Row>
                            <Col md="6" className="skillBar">
                                <div className="html_bar"> 
                                    <p>HTML/CSS</p>
                                    <div className="progress mb-4">
                                        <div className="progress-bar"></div>
                                    </div>
                                </div>
                                <div className="php_bar"> 
                                    <p>PHP</p>
                                    <div className="progress mb-4">
                                        <div className="progress-bar"></div>
                                    </div>
                                </div>
                                <div className="js_bar"> 
                                    <p>JS</p>
                                    <div className="progress mb-4">
                                        <div className="progress-bar"></div>
                                    </div>
                                </div>
                                <div className="jquery_bar"> 
                                    <p>jQuery</p>
                                    <div className="progress mb-4">
                                        <div className="progress-bar"></div>
                                    </div>
                                </div>
                                <div className="react_bar"> 
                                    <p>REACTJS</p>
                                    <div className="progress mb-4">
                                        <div className="progress-bar"></div>
                                    </div>
                                </div>
                                <div className="sql_bar"> 
                                    <p>SQL</p>
                                    <div className="progress mb-4">
                                        <div className="progress-bar"></div>
                                    </div>
                                </div>
                            
                            </Col>
                        </Row>
                        <Button className="cv" variant="warning" size="lg"><a href={CV} download>TELECHARGER MON CV</a></Button>
                    </Container>
                {/* </div> */}
            </div>
        )
    }
}

export default Parcours; 


