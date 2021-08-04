import React from "react";
import "./WhySite.css";
import CarouselComponent from "./CarouselComponent";

function WhySite(props) {
  return (
    <div className="section2" ref={props.whyRef}>
      <div classname="section__wrapper">
        <div className="section__header">
          <a
            className="section__header__text"
            style={{ color: "white", paddingTop: "1%" }}
          >
            Warum BetSmart?
          </a>
        </div>

        <div className="section_items">
          <CarouselComponent />
        </div>
      </div>
    </div>
  );
}

export default WhySite;
