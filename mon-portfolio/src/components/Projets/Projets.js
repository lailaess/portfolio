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

    constructor(props){
        super(props);
        // this.state = {isToggleOn: true};

        // this.handleClick = this.handleClick.bind(this); 
        // this.handleClick2 = this.handleClick2.bind(this);

        
    }

    // MyVerticallyCenteredModal (props){
    //     return (
    //         <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
    //             <Modal.Header closeButton>
    //                 <Modal.Title id='contained-modal-title-vcenter'>Modal Heading</Modal.Title>
    //             </Modal.Header>
    //             <Modal.Body>
    //                 <h4>Centered Modal</h4>
    //                 <p>dkfdslkfjhslkgjhlkjgh lskslghldjkgh sdlkjgh dslkj</p>
    //             </Modal.Body>
    //             <Modal.Footer>
    //                 <Button onClick={props.onHide}>Close</Button>
    //             </Modal.Footer>
    //         </Modal>
    //     )
    // }

    //  state = {
    //     on : false
    // }

    // toggle = () => {
    //     this.setState({
    //         on: !this.state.on
    //     })
    // }

    // toggle2 = () => {
    //     this.setState({
    //         on2: !this.state.on2
    //     })
    // }



    handleClick(){
        console.log('BOUTON CLICKED');
       
       
        
    }

    handleClick2(){
        console.log('BOUTON CLICKED 2');
        
    }

    // App2(){
    //     const [modalShow, setModalShow] = React.useState(false); 
    // }

    render(){
        return(
            <div className="projets">
                <Container>
                    <h2>Mes Projets</h2>
                    <h5>Retrouvez ici quelques un de mes projets réalisés dans le cadre de ma formation au Samsung Campus</h5>

                    <Row>
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