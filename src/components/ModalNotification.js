import React from 'react'
import {Link} from 'react-router-dom'
import {Modal, Button} from 'react-bootstrap'


const ModalNotification = ({show, handleClose, title, msg, link, buttonMsg}) => {
    return (
      <>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>
              <h2>{title}</h2>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{msg}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Link to={link}>
              <Button variant="primary">{buttonMsg}</Button>
            </Link>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default ModalNotification
