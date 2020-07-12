import React from 'react'
import { Modal, Button, Container, Col, Row, Image } from "react-bootstrap";

import './projet-modal2.css';
import './css/skeleton.css';
import './css/normalize.css';

import PhotoPuissance4 from './photoProjets/puissance4/puissance4.png';

function MyModal2(props){
    return(
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">My Puissance 4 </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* <Row> */}
                    <Image src={PhotoPuissance4} fluid className="modal-agrandissement_photo" />
                {/* </Row>
                <Row> */}
                    <div>
                        <h5>Langages Utilises</h5>
                        <p>HTML/CSS - jQuery</p>
                    </div>
                    <div>
                        <h5>Description</h5>
                        <p>Realisation du jeu Puissance 4 avec creation d'un plugin en jQuery</p>

                        <h6><b>Projet realise dans le cadre de la formation du Samsung Campus</b></h6>

                    </div>
                {/* </Row> */}
            </Modal.Body>
            <Modal.Footer>
                <Button className="modal_button" onClick={props.onHide}>Fermé</Button>
            </Modal.Footer>
        </Modal>
    )
}


function AppPuissance4(){
    const [modalShow, setModalShow] = React.useState(false);

    return(
        <>
            <Button className="modal-button_plus" variant="primary" onClick={() => setModalShow(true)}>En savoir plus</Button>

            <MyModal2 show={modalShow} onHide={() => setModalShow(false)} />
            
        </>
    )
}

export default AppPuissance4;