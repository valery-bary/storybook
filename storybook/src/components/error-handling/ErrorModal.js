"use client";

import { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useError } from "./ErrorContext";
import { useTranslation } from "react-i18next";
import {errMod} from "../../../public/assets/svg/errorModal.svg";

const ErrorModal = () => {
  const { t } = useTranslation("translation");
  const { errorMessage, hideError } = useError();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(!!errorMessage);
  }, [errorMessage]);

  const handleClose = () => {
    setShow(false);
    setTimeout(hideError, 300);
  };

  if (!errorMessage) return null;

  return (
    <Modal show={show} onHide={handleClose} centered animation={true}>
      <Modal.Header closeButton >
      <img src="/assets/svg/errorModal.svg" alt="error" className="modal-icon me-3 " style={{ height: "2.5em" }} />
        <Modal.Title className="text-danger text-uppercase">
          {t("modal.error.title")}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="m-2 h5">{errorMessage}</Modal.Body>
      <Modal.Footer className="d-flex justify-content-end mx-0 my-0">
        <Button variant="secondary" onClick={handleClose} className="text-uppercase">
          {t("modal.error.close")}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ErrorModal;