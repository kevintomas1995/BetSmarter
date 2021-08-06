import React, { useRef, useState } from "react";
import Modal from "./Modal";
import "./ModalInfo.css"

function ModalInfo(props) {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(dropdownRef, false);


  return (
    <Modal onClose={props.onClick}>
      <div className="modal_wrapper">
        halllooooo
      </div>
    </Modal>
  );
}

export default ModalInfo;
