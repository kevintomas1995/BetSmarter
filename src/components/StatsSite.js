import React from "react";
import "./StatsSite.css";
import { FcFilledFilter, FcEmptyFilter } from "react-icons/fc";
import ModalStats from "./ModalStats";
import Diagrams from "./Diagrams";

function StatsSite(props) {
  return (
    <div className="section">
      <div classname="section__wrapper">
        <div className="section__header">
          <a className="section__header__text" style={{ paddingTop: "3%" }}>
            Statistiken weit. Modal
          </a>
        </div>

        <div className="section_items">
          <div className="odds_market">
            <button className="menu-trigger" onClick={props.onClick}>
              <span>Märkte</span>
              {props.isActive ? (
                <FcFilledFilter size={20} />
              ) : (
                <FcEmptyFilter size={20} />
              )}
            </button>

            <span className="market_name">Over/Under 2,5</span>
          </div>

          {props.isActive && <ModalStats onClick={props.hideModalHandler} />}
          <Diagrams />
        </div>
      </div>
    </div>
  );
}

export default StatsSite;
