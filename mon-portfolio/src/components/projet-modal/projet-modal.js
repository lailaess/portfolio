import React from 'react'
import { Modal, Button, Container, Col, Row, Image } from "react-bootstrap";
// import { render } from "node-sass";

import './projet-modal.css';
import './css/skeleton.css';
import './css/normalize.css';

import PhotoDYMED from './photoProjets/dymed/dymed_accueil.png';


function MyModal(props){
    return(
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">D.Y.Med</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* <Row> */}
                    <Image src={PhotoDYMED} fluid className="modal-agrandissement_photo"/>
                {/* </Row>
                <Row> */}
                    <div className="website">
                        <h5>Site</h5>
                        <p>A venir ... </p>
                    </div>
                    <div className="langages">
                        <h5>Langages Utilises</h5>
                        <p>Laravel - React - SQL - CSS</p>
                    </div>
                    <div className="description">
                        <h5>Description</h5>
                        <p>Site de vente de produits medicinaux</p>

                        <h6><b>Projet Marketing en groupe realise dans le cadre d'un partenariat avec l'ESSEC</b></h6>

                    </div>
                {/* </Row> */}

            </Modal.Body>
            <Modal.Footer>
                <Button className="modal_button" onClick={props.onHide}>Fermé</Button>
            </Modal.Footer>
        </Modal>
    )
}


function AppDYMED(){
    const [modalShow, setModalShow] = React.useState(false);

    return(
        <>
            <Button className="modal-button_plus" variant="primary" onClick={() => setModalShow(true)}>En savoir plus</Button>

            <MyModal show={modalShow} onHide={() => setModalShow(false)} />
            
        </>
    )
}



export default AppDYMED; 
// export default MyModal; 
