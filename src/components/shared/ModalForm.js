import React from "react";
import { Modal, Button } from "react-bootstrap";

const ModalForm = (props) => {
  const { title, subject, message, onHide, onAccept, show } = props;

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{subject}</h4>
        <p>{message}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={onAccept}>
          Yes
        </Button>
        <Button onClick={onHide}>No</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalForm;
