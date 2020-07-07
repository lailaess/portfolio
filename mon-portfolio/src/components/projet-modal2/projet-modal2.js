import React from 'react'
import { Modal, Button } from "react-bootstrap";


function MyModal2(props){
    return(
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">My Puissance 4 </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <h5>Langages Utilises</h5>
                    <p>HTML/CSS - jQuery</p>
                </div>
                <div>
                    <h5>Description</h5>
                    <p>Realisation du jeu Puissance 4 avec creation d'un plugin en jQuery</p>

                    <h6><b>Projet realise dans le cadre de la formation du Samsung Campus</b></h6>

                </div>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}


function AppPuissance4(){
    const [modalShow, setModalShow] = React.useState(false);

    return(
        <>
            <Button variant="primary" onClick={() => setModalShow(true)}>En savoir plus</Button>

            <MyModal2 show={modalShow} onHide={() => setModalShow(false)} />
            
        </>
    )
}

export default AppPuissance4;