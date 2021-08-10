import React from "react";
import "./Footer.css";
import { AiOutlineInstagram } from "react-icons/ai";
import ModalImpressum from "../components/ModalImpressum";

function Footer(props) {
  return (
    <div className="container">
      <div className="footer_item" style={{ fontWeight: "bold" }}>
        BetSmart
      </div>
      <div className="footer_item" onClick={props.onClickImpressum}>Impressum</div>
      <div className="insta_item">
        {/* <div className="footer_item" style={{marginRight: "5%"}}>Instagram</div> */}
        <AiOutlineInstagram size={32} />
      </div>
      {props.isActiveImpressum && (
        <ModalImpressum
          onClick={props.hideModalImpressumHandler}
          onButtonClick={props.hideModalImpressumHandler}
        />
      )}
    </div>
  );
}

export default Footer;
