import React, { useState } from "react";
import "./MatchItem.css";
import foto from "../images/zweite_buli.jpg";
import pinnacle from "../images/pinnacle.jpeg";
import wh from "../images/wh.png";

function MatchItem() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      className="match_item"
      style={{ paddingBottom: showDetails ? "15%" : "0%" }}
    >
      <div className="match__item__upper">
        <div className="match__item__upper__match">
          <a style={{ fontStyle: "italic" }}>Hamburger SV</a>
          <a style={{ fontStyle: "italic" }}>-</a>
          <a style={{ fontStyle: "italic" }}>Werder Bremen</a>
        </div>

        <button className="match__item_upper_action">
          <a>JETZT WETTEN!</a>
        </button>
      </div>

      {/* <div className={!showDetails ? "match__item__lower" : "match__item__lower_padding"}> */}

      <div className="match__item__lower">
        <div className="match__item__lower__row">
          <div className="match__item__lower__row__item">
            <div>
              <img src={pinnacle} height={20} width={20} />
            </div>
          </div>
          <div className="match__item__lower__row__item">
            <div style={{ marginBottom: "1%", fontWeight: "bold" }}>1</div>
            <div>1.95</div>
          </div>
          <div className="match__item__lower__row__item">
            <div style={{ marginBottom: "1%", fontWeight: "bold" }}>x</div>
            <div>3.95</div>
          </div>
          <div className="match__item__lower__row__item">
            <div style={{ marginBottom: "1%", fontWeight: "bold" }}>2</div>
            <div>5.95</div>
          </div>
        </div>

        <div className="match__item__lower__row">
          <div className="match__item__lower__row__item">
            <div>
              <img src={wh} height={20} width={20} />
            </div>
          </div>
          <div className="match__item__lower__row__item">
            <div style={{ marginBottom: "1%", fontWeight: "bold" }}>1</div>
            <div>1.95</div>
          </div>
          <div className="match__item__lower__row__item">
            <div style={{ marginBottom: "1%", fontWeight: "bold" }}>x</div>
            <div>3.95</div>
          </div>
          <div className="match__item__lower__row__item">
            <div style={{ marginBottom: "1%", fontWeight: "bold" }}>2</div>
            <div>5.95</div>
          </div>
        </div>

        {showDetails && (
          <div>
            <div className="match__item__lower__row">
              <div className="match__item__lower__row__item">
                <div>
                  <img src={wh} height={20} width={20} />
                </div>
              </div>
              <div className="match__item__lower__row__item">
                <div style={{ marginBottom: "1%", fontWeight: "bold" }}>1</div>
                <div>1.95</div>
              </div>
              <div className="match__item__lower__row__item">
                <div style={{ marginBottom: "1%", fontWeight: "bold" }}>x</div>
                <div>3.95</div>
              </div>
              <div className="match__item__lower__row__item">
                <div style={{ marginBottom: "1%", fontWeight: "bold" }}>2</div>
                <div>5.95</div>
              </div>
            </div>

            <div className="match__item__lower__row">
              <div className="match__item__lower__row__item">
                <div>
                  <img src={wh} height={20} width={20} />
                </div>
              </div>
              <div className="match__item__lower__row__item">
                <div style={{ marginBottom: "1%", fontWeight: "bold" }}>1</div>
                <div>1.95</div>
              </div>
              <div className="match__item__lower__row__item">
                <div style={{ marginBottom: "1%", fontWeight: "bold" }}>x</div>
                <div>3.95</div>
              </div>
              <div className="match__item__lower__row__item">
                <div style={{ marginBottom: "1%", fontWeight: "bold" }}>2</div>
                <div>5.95</div>
              </div>
            </div>

            <div className="match__item__lower__row">
              <div className="match__item__lower__row__item">
                <div>
                  <img src={wh} height={20} width={20} />
                </div>
              </div>
              <div className="match__item__lower__row__item">
                <div style={{ marginBottom: "1%", fontWeight: "bold" }}>1</div>
                <div>1.95</div>
              </div>
              <div className="match__item__lower__row__item">
                <div style={{ marginBottom: "1%", fontWeight: "bold" }}>x</div>
                <div>3.95</div>
              </div>
              <div className="match__item__lower__row__item">
                <div style={{ marginBottom: "1%", fontWeight: "bold" }}>2</div>
                <div>5.95</div>
              </div>
            </div>
          </div>
        )}

        <div
          className="match__item__lower__row__item"
          onClick={() => {
            setShowDetails((prevState) => !prevState);
          }}
        >
          <i
            class={showDetails ? "fas fa-angle-up" : "fas fa-angle-down"}
            style={{ fontSize: 30 }}
          ></i>
        </div>
      </div>
    </div>
  );
}

export default MatchItem;
