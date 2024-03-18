import React from "react";
import { Button, Modal } from "react-bootstrap";

const FormModal = ({ showModal, closeModal, children, submit}) => {
  return (
    <Modal show={showModal} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={closeModal}>
          Close
        </Button>
        <Button variant="primary" onClick={submit}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FormModal;
