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
            <div className="parcours">
                <Container>
                    {this.isDesktop && <> <h1>DESKTOP</h1>
                        {this.isTablet && <h1>TABLET</h1>}
                        {this.isSmartphonePaysage && <h1>SMART PAYSAGE</h1>}
                        {this.isSmartphonePortrait && <h1>SMART PORTRAIT</h1>}
                    </>}
                    <h2>Experiences et Competences</h2>
                    <Row>
                        <Col xs="12" md="12" lg="6" xl="lg"  >
                            <Row>
                                <span><Image src={PhotoFormation} fluide className="icon" /></span>
                                <span><h5>Formations</h5></span>
                            </Row>
                            <div className="parcours_information">
                                <Row>
                                <Col ><p className="parcours_date">(2019 - en cours)</p></Col>
                                <Col><p><strong>Formation Samsung Campus</strong></p></Col>
                                </Row>
                                <Row>
                                    <Col><p className="parcours_date">(2017 - 2018)</p></Col>
                                    <Col><p><strong>Licence LLCE Chinois/Anglais</strong> <br /> UFR Paris Diderot</p></Col>
                                </Row>
                                <Row>
                                    <Col><p className="parcours_date">(2015 - 2017)</p></Col>
                                    <Col><p><strong>Licence Psychologie</strong> <br/> UFR Paris Descartes</p></Col>
                                </Row>
                                <Row>
                                    <Col><p className="parcours_date">(2015)</p></Col>
                                    <Col><p><strong>Baccalaureat Economque & Sociale </strong> <br/> Spe Science Politique</p></Col>
                                </Row>
                            </div>
                        </Col>
                        <Col xs="12" md="12" lg="6" xl="lg">
                            <Row>
                                <span><Image src={PhotoExp} fluide className="icon" /></span>
                                <span><h5>Experiences</h5></span>
                            </Row>
                            <div className="parcours_information">
                                <Row>
                                    <Col><p className="parcours_date">(2016 - 2019)</p></Col>
                                    <Col><p><strong>Employee de reserve</strong> <br/> Zara</p></Col>
                                </Row>
                                <Row>
                                    <Col><p className="parcours_date">(2016)</p></Col>
                                    <Col><p><strong>Vacataire</strong> <br/> Centre de dialyse AURA</p></Col>
                                </Row>
                                <Row>
                                    <Col><p className="parcours_date">(2016)</p></Col>
                                    <Col><p><strong>Employee Polyvalent</strong> <br/> Stradivarius</p></Col>
                                </Row>
                            </div>
                        </Col>
                        
                    </Row>
                    

                </Container>
                <Container>
                    <Row>
                        <span><Image src={PhotoSkill} fluide className="icon" /></span>
                        <span><h5>Competences Techniques</h5></span>
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
                    <Button variant="warning" size="lg"><a href={CV} download>TELECHARGER MON CV</a></Button>
                </Container>
                
            </div>
        )
    }
}

export default Parcours; 


