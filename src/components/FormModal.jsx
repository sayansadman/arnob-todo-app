import React from "react";
import { Button, Modal } from "react-bootstrap";
import { Floppy, XCircle } from "react-bootstrap-icons";

const FormModal = ({ showModal, closeModal, children, submit }) => {
  return (
    <Modal show={showModal} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Set a Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={closeModal}>
          <XCircle style={{marginRight: "5px"}}/>
          {"Close"}
        </Button>
        <Button variant="primary" onClick={submit}>
          <Floppy style={{marginRight: "10px"}}/>
          {"Save"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FormModal;
