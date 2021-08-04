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
                <a>Messages</a>
              </li>
              <li>
                <a>Trips</a>
              </li>
              <li>
                <a>Saved</a>
              </li>
            </ul>
          </nav>

      </div>
    </Modal>
  );
}

export default ModalComponent;
