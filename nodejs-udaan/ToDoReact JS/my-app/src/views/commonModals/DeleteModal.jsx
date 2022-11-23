import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState } from 'react'
import { ModalDialog } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

let task;
function ondeletetask(e) {
    const form = e.currentTarget;
    e.preventDefault();


    axios.post("delete", {
        title: task.title,
    }).then(res => {
        alert(JSON.stringify(res.data.message))
    }).catch(er => {
        alert("invalid credintial ")
    })
}

const DeleteModal = ({ task }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    task = task;
    return (
        <>
            <Button className='p-2' variant="danger" onClick={handleShow}>
                <FontAwesomeIcon icon={faTrashCan} />
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>do you want to delete the task</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancle
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default DeleteModal