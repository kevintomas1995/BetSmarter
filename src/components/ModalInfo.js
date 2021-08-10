import React, { useRef } from "react";
import Modal from "./Modal";
import "./ModalInfo.css";


function ModalInfo(props) {
  const dropdownRef = useRef(null);
  

  return (
    <Modal onClose={props.onClick}>
      <div className="modal_wrapper">
        <div className="modal_header">
          <a>Infos zu den Statistiken</a>
        </div>
        <div className="modal_body">
          <p>Die Statistik gibt pro Wettmarkt an, bei wie viel Prozent der Spiele
          aus der jeweiligen Liga <b>die Quote von Pinnacle Sports über dem Marktdurchschnitt </b>lag. </p>
          <p>Dafür wurden alle Spiele der letzten 2 Saisons aus den jeweiligen Ligen analysiert.</p>
          <p>Unter <b>"Märkte"</b> kannst du dir die Statistiken für verschiedenste Märkte anzeigen lassen</p>
          <p>Bei Interesse kannst du dich gerne bei uns melden!</p>
        </div>
        <button className="button" onClick={props.onButtonClick}>
          Schließen
        </button>
      </div>
    </Modal>
  );
}

export default ModalInfo;
