import React, { useRef, useState } from "react";
import Modal from "./Modal";
import "./ModalStats.css";

// FÜR DROPDOWN https://codesandbox.io/s/dropdown-menu-jzldk

function ModalComponent(props) {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(dropdownRef, false);


  return (
    <Modal onClose={props.onClick}>
      <div className="modal_wrapper_stats">
        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          <ul>
            <li>
              <a onClick={() => {
                props.changeMarket("Heim gewinnt");
                props.onClick();
              }}>Heim gewinnt</a>
            </li>
            <li>
              <a onClick={() => {
                props.changeMarket("Unentschieden");
                props.onClick();
              }}>Unentschieden</a>
            </li>
            <li>
              <a onClick={() => {
                props.changeMarket("Auswärts gewinnt");
                props.onClick();
              }}>Auswärts gewinnt</a>
            </li>
            <li>
              <a onClick={() => {
                props.changeMarket("Über 2.5 Tore");
                props.onClick();
              }}>Über 2.5 Tore</a>
            </li>
            <li>
              <a onClick={() => {
                props.changeMarket("Unter 2.5 Tore");
                props.onClick();
              }}>Unter 2.5 Tore</a>
            </li>
            <li>
              <a onClick={() => {
                props.changeMarket("AHH");
                props.onClick();
              }}>AHH</a>
            </li>
            <li>
              {/* <a onClick={props.onClick}>AHA</a> */}
              <a onClick={() => {
                props.changeMarket("AHA");
                props.onClick();
              }}>AHA</a>
            </li>


            <li>
              {/* <a onClick={props.onClick}>AHA</a> */}
              <a onClick={() => {
                props.changeMarket("CH");
                props.onClick();
              }}>CH</a>
            </li>
            <li>
              {/* <a onClick={props.onClick}>AHA</a> */}
              <a onClick={() => {
                props.changeMarket("CD");
                props.onClick();
              }}>CD</a>
            </li>
            <li>
              {/* <a onClick={props.onClick}>AHA</a> */}
              <a onClick={() => {
                props.changeMarket("CA");
                props.onClick();
              }}>CA</a>
            </li>


          </ul>
        </nav>
      </div>
    </Modal>
  );
}

export default ModalComponent;
