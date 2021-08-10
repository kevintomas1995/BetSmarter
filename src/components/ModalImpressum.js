import React, { useRef } from "react";
import Modal from "./Modal";
import "./ModalImpressum.css";

function ModalImpressum(props) {
  const dropdownRef = useRef(null);

  return (
    <Modal onClose={props.onClick}>
      <div className="modal_wrapper_Impressum">
        <div className="modal_header">
          <a>Impressum</a>
        </div>
        <div className="modal_body_Impressum">
          <b>Angaben gemäß § 5 TMG</b>
          <br></br>
          Kevin Tomas<br></br>
          BetSamrt<br></br>
          Esmarchstraße, 56<br></br>
          22767 Hamburg<br></br>
          <p>
            <b>Kontakt</b>
            <br></br>
            Tel.: 01738241977<br></br>
            smartbetgermany@gmail.com<br></br>
          </p>
          <p>
            <b>Verbraucherstreitbeilegung</b>
            <br></br>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen
          </p>
        </div>
        <button className="button" onClick={props.onButtonClick}>
          Schließen
        </button>
      </div>
    </Modal>
  );
}

export default ModalImpressum;
