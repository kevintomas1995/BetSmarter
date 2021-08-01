import React, { Fragment } from "react";
import "./Modal.css";
// import reactDom from "react-dom";
// import { ReactDOM } from "react";
import ReactDOM from "react-dom"

function Backdrop() {
  return <div className="backdrop" />;
}

function ModalOverlay(props) {
  return (
    <div className="modal">
      <div> {props.children}</div>
    </div>
  );
}

const portalElement = document.getElementById("overlays");

function Modal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </Fragment>
  );
}

export default Modal;
