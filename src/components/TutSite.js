import React from "react";
import "./TutSite.css";
import Anleitungen from "./Anleitungen";


function TutSite(props) {
  return (
    <div className="section" ref={props.tutRef} >
      <a style={{ color: "white" }}>
        Pinnacle Sports, AsianConnect
      </a>
      <div className="section__wrapper">
        <div className="section__header">
          <a className="section__header__text" style={{ paddingTop: "3%" }}>
            Anleitungen
          </a>
        </div>

        <div className="section_items">
          <Anleitungen contactRef={props.contactRef}/>
        </div>
      </div>
    </div>
  );
}

export default TutSite;
