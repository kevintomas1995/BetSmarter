import React from "react";
import "./Footer.css";
import { AiOutlineInstagram } from "react-icons/ai";

function Footer() {
  return (
    <div className="container">
      <div className="footer_item" style={{fontWeight: "bold"}}>BetSmart</div>
      <div className="footer_item">Kontakt</div>
      <div className="footer_item">Impressum</div>
      <div className="insta_item">
        <div className="footer_item" style={{marginRight: "5%"}}>Instagram</div>
        <AiOutlineInstagram size={32}/>
      </div>
    </div>
  );
}

export default Footer;
