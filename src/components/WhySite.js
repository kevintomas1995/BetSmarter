import React from "react";
import "./WhySite.css";
import CarouselComponent from "./CarouselComponent";

function WhySite(props) {
  return (
    <div className="section2" ref={props.whyRef}>
      <div className="section__wrapper">
        <div className="section__header">
          <a
            className="section__header__text"
            style={{ color: "white", paddingTop: "1%" }}
          >
            Warum WettFux?
          </a>
        </div>

       
          <CarouselComponent />
       
      </div>
    </div>
  );
}

export default WhySite;
