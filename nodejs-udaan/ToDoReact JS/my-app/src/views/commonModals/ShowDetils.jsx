import { faTrashCan, faInfo, faEye } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { ModalDialog } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const ShowDetailsModal = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button className='p-2' variant="danger" onClick={handleShow}>
            <FontAwesomeIcon icon={faEye} />
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>show details</Modal.Title>
                </Modal.Header>
                <Modal.Body>do you want to see the details of the task</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancle
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Show details
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default ShowDetailsModal