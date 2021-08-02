import React, { useRef } from "react";
import Modal from "./Modal";
import "./ModalComponent.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { FcFilledFilter, FcEmptyFilter } from "react-icons/fc";
import TableComponent from "./TableComponent";
import { useDetectOutsideClick } from "./useDetectOutsideClick";

// FÜR DROPDOWN https://codesandbox.io/s/dropdown-menu-jzldk

function ModalComponent(props) {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
    <Modal onClose={props.onClick}> 
      <div className="modal_wrapper">
        <div className="close_button">
          <AiFillCloseCircle size={25} onClick={props.onClick} className="close_button_element"/>
        </div>
        <div className="odds_market">
          <button className="menu-trigger" onClick={onClick}>
            <span>Märkte</span>
            { isActive ? <FcFilledFilter size={20} /> :   <FcEmptyFilter size={20} />}
          </button>
          
          <span className="market_name">Over/Under 2,5</span>
        </div>
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
        <TableComponent/>
      </div>
    </Modal>
  );
}

export default ModalComponent;
