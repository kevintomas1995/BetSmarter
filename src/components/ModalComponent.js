import React from "react";
import Modal from "./Modal";
import "./ModalComponent.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { FcFilledFilter } from "react-icons/fc";
import TableComponent from "./TableComponent";

// FÜR DROPDOWN https://codesandbox.io/s/dropdown-menu-jzldk

function ModalComponent() {
  return (
    <Modal>
      <div className="modal_wrapper">
        <div className="close_button">
            <AiFillCloseCircle size={25}/>
        </div>
       <div className="odds_market">
        <button className="menu-trigger">
            <span>Märkte</span>
            <FcFilledFilter size={20}/>
        </button>
        <span className="market_name">
            Over/Under 2,5
        </span>
       </div>
       <TableComponent styles={{marginTop: "4%"}}/>
      </div>
    </Modal>
  );
}

export default ModalComponent;
