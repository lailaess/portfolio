import React from 'react'
import { Modal, Button } from "react-bootstrap";
// import { render } from "node-sass";

function MyModal(props){
    return(
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">D.Y.Med</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <h5>Site</h5>
                    <p>A venir ... </p>
                </div>
                <div>
                    <h5>Langages Utilises</h5>
                    <p>Laravel - React - SQL - CSS</p>
                </div>
                <div>
                    <h5>Description</h5>
                    <p>Site de vente de produits medicinaux</p>

                    <h6><b>Projet Marketing en groupe realise dans le cadre d'un partenariat avec l'ESSEC</b></h6>

                </div>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}


function AppDYMED(){
    const [modalShow, setModalShow] = React.useState(false);

    return(
        <>
            <Button variant="primary" onClick={() => setModalShow(true)}>En savoir plus</Button>

            <MyModal show={modalShow} onHide={() => setModalShow(false)} />
            
        </>
    )
}



export default AppDYMED; 
// export default MyModal; 
