import React, { useState } from "react";
import "./MatchItem.css";
import pinnacle from "../images/pinnacle.jpeg";
import logo from "../images/zweite_buli.jpg";
import ModalComponent from "./ModalComponent";

function MatchItem() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    // <Modal>
    <>
    <div className="match_item">
    <div className="match_item__upper">
      <div className="match_item__upper__leagueRow">
        <div className="match_item__upper__leagueRow__logo">
          <img src={logo} />
          <p
            style={{
              fontWeight: "bold",
              color: "white",
              fontSize: "110%",
            }}
          >
            2. Bundesliga
          </p>
        </div>
      </div>

      <div className="match_item__upper__teams">
        <p style={{ color: "white" }}>
          Hamburger SV
        </p>
        <p style={{ color: "white" }}>-</p>
        <p style={{ color: "white"}}>
          Werder Bremen
        </p>
      </div>
    </div>

    <div className="match_item__lower">
    <div className="match_item__lower_action" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <button>Details</button>
        </div>
      <div className="match_item__lower__pinnacle" style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
        <img src={pinnacle} />
        <a style={{ color: "white", fontSize: "80%" }}>+8.8%</a>
      </div>
      <div className="match_item__lower_action" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <button>Wetten</button>
        </div>
    </div>
  </div>
  {/* </Modal> */}
  <ModalComponent />
  </>
  );
}

export default MatchItem;
