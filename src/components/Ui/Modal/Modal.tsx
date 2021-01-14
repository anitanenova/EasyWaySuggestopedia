import React from "react";

import { Modal } from "react-bootstrap";

import style from "./Modal.module.css";

const modal = (props) => {
  const { header, size } = props;
  return (
    <Modal
      {...props}
      size={size}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className={style["title-box"]} closeButton>
        <Modal.Title
          className={`${"txt-title-big "} ${"txt-bold"}  ${"txt-uppercase"}`}
          id="contained-modal-title-vcenter"
        >
          {header}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.children}</Modal.Body>
    </Modal>
  );
};

export default modal;
