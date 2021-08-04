import React, { useRef, useState } from "react";
import Modal from "./Modal";
import "./ModalStats.css"



// FÜR DROPDOWN https://codesandbox.io/s/dropdown-menu-jzldk

function ModalComponent(props) {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
    <Modal onClose={props.onClick}> 
      <div className="modal_wrapper">
        <nav
            ref={dropdownRef}
            className={`menu ${isActive ? "active" : "inactive"}`}
          >
            <ul>
              <li>
                <a onClick={props.onClick}>Heim gewinnt</a>
              </li>
              <li>
                <a onClick={props.onClick}>Unentschieden</a>
              </li>
              <li>
                <a onClick={props.onClick}>Auswärts gewinnt</a>
              </li>
              <li>
                <a onClick={props.onClick}>Über 2.5 Tore</a>
              </li>
              <li>
                <a onClick={props.onClick}>Unter 2.5 Tore</a>
              </li>
              <li>
                <a onClick={props.onClick}>AHH</a>
              </li>
              <li>
                <a onClick={props.onClick}>AHA</a>
              </li>
            </ul>
          </nav>

      </div>
    </Modal>
  );
}

export default ModalComponent;
