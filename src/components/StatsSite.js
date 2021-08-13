import React, { useState } from "react";
import "./StatsSite.css";
import { FcFilledFilter, FcEmptyFilter, FcInfo } from "react-icons/fc";
import ModalStats from "./ModalStats";
import Diagrams from "./Diagrams";
import ModalInfo from "./ModalInfo";

function StatsSite(props) {
  const [market, setMarket] = useState("Heim gewinnt");

  return (
    <div className="section" ref={props.statsRef}>
      <div className="section__wrapper">
        <div className="section__header">
          <a className="section__header__text" style={{ paddingTop: "3%" }}>
            Statistiken
          </a>
        </div>

        <div className="section_items">
          <div className="odds_market">
            <button className="menu-trigger" onClick={props.onClickMarkets}>
              <span>Märkte</span>
              {props.isActiveMarkets ? (
                <FcFilledFilter size={20} />
              ) : (
                <FcEmptyFilter size={20} />
              )}
            </button>

            <button className="menu-trigger" onClick={props.onClickInfo}>
              <span>Info</span>
              <FcInfo size={20} />
            </button>
          </div>

          {props.isActiveMarkets && (
            <ModalStats
              onClick={props.hideModalMarketHandler}
              changeMarket={(market) => setMarket(market)}
            />
          )}
          {props.isActiveInfo && (
            <ModalInfo onClick={props.hideModalInfoHandler} onButtonClick={props.hideModalInfoHandler}/>
          )}
          <Diagrams market={market} />
        </div>
      </div>
    </div>
  );
}

export default StatsSite;
