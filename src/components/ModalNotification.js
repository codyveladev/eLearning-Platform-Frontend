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
        >
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{msg}</Modal.Body>
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
