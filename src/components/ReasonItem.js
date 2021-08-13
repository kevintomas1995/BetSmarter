import React from "react";
import "./ReasonItem.css";
import { AiOutlineRise } from "react-icons/ai";
import {
  FcSearch,
  FcAlarmClock,
  FcSportsMode,
  FcBullish,
  FcCalculator,
  FcApproval,
  FcIdea,
  FcHome,
  FcCancel,
  FcMultipleInputs,
  FcVip,
  FcDonate,
  FcCustomerSupport,
  FcHeadset,
  FcCallback,
} from "react-icons/fc";
import { GiMoneyStack, GiArchiveResearch } from "react-icons/gi";
import pinnacle from "../images/pinnacle.jpeg";
import ac from "../images/asianconnect.png";

function ReasonItem(props) {
  return (
    <div className="wrapper">
      {props.number === 1 && (
        <div className="reason_item">
          <div className="reason_item_header">
            Nutze die besten Quoten auf dem Markt
            <AiOutlineRise size={50} />
          </div>
          <div className="reason_item_body">
            Du hast keine Lust mehr, für jedes Spiel die <b>besten Quoten</b>{" "}
            herauszusuchen?
            <br></br>
            <br></br> <FcSearch size={30} />
            {/* <br></br> */}
            <br></br>
            Dann wende dich von den Mainstream-Buchmachern wie Bet365 und Co. ab
            und spare dir <b>Zeit</b> und <b>Geld</b>!<br></br>
            <br></br> <FcAlarmClock size={30} /> <GiMoneyStack size={30} />
            {/* <br></br> */}
            <br></br>
            Wie? Ganz einfach! Nutze <b>Pinnacle Sports</b> und profitiere von
            den besten Quoten auf dem Wettmarkt!
            <div
              className="reason_item_body_action"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
              }}
            >
              <button>
                <a
                  className="button_link_reason"
                  target="_blank"
                  href="https://de.asianconnect88.com/register/?pk_kwd=YbzPaMfriy"
                >
                  Registrieren
                </a>
              </button>
            </div>
          </div>
        </div>
      )}

      {props.number === 2 && (
        <div className="reason_item">
          <div className="reason_item_header">
            Pinnacle Sports: die Nr. 1 unter den Bookies
            <img
              src={pinnacle}
              style={{
                borderRadius: "35%",
                height: "15%",
                width: "15%",
                marginTop: "2%",
              }}
            />
          </div>
          <div className="reason_item_body">
            Pinnacle ist einfach ein Muss jür jeden ambitionierten Tipper!
            <br></br>
            <br></br> <FcSportsMode size={30} />
            <br></br>
            <br></br>
            Pinnacle Sports weiß mit seinen <b>Top-Quoten</b> und{" "}
            <b>hohen Einsatzlimits</b> seit Jahren zu überzeugen
            <br></br>
            <br></br> <FcBullish size={30} /> <FcCalculator size={30} />
            <br></br>
            <br></br>
            Zudem musst du bei Pinnacle <b>keine Wettsteuer</b> abführen und es
            bestehen <b>keine Einzahlungs- oder Einsatzlimits</b>!<br></br>
            <div
              className="reason_item_body_action"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
              }}
            >
              <button>
                <a
                  className="button_link_reason"
                  target="_blank"
                  href="https://de.asianconnect88.com/register/?pk_kwd=YbzPaMfriy"
                >
                  Registrieren
                </a>
              </button>
            </div>
          </div>
        </div>
      )}

      {props.number === 3 && (
        <div className="reason_item">
          <div className="reason_item_header">
            Pinnacle zu Hause in Deutschland nutzen
            <FcHome size={50} />
          </div>
          <div className="reason_item_body">
            Seit 2016 ist Pinnacle <b>eigentlich</b> nicht mehr aus Deutschland
            aus zu nutzen
            <br></br>
            <br></br> <FcCancel size={30} />
            <br></br>
            <br></br>
            BetSmart hat jedoch die <b>Lösung</b>!<br></br>
            <br></br> <FcIdea size={30} />
            <br></br>
            <br></br>
            Mit unserem Partner <b>AsianConnect</b> bieten wir die Möglichkeit,
            Pinnacle Sports völlig <b>legal</b> und <b>bequem</b> aus
            Deutschland asu zu nutzen
            <div
              className="reason_item_body_action"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
              }}
            >
              <button>
                <a
                  className="button_link_reason"
                  target="_blank"
                  href="https://de.asianconnect88.com/register/?pk_kwd=YbzPaMfriy"
                >
                  Registrieren
                </a>
              </button>
            </div>
          </div>
        </div>
      )}

      {props.number === 4 && (
        <div className="reason_item">
          <div className="reason_item_header">
            AsianConnect
            <img
              src={ac}
              style={{
                borderRadius: "35%",
                height: "15%",
                width: "25%",
                marginTop: "2%",
              }}
            />
          </div>
          <div className="reason_item_body">
            AsianConnect mietet ein sog. Agentenkonto bei Pinnacle. Dies ist
            ausschließlich <b>exklusiven Partnern </b>wie AsianConnect
            vorbehalten
            <br></br>
            <br></br> <FcVip size={30} />
            <br></br>
            <br></br>
            Über dieses Konto kannst du dann ganz normal{" "}
            <b>Wetten bei Pinnacle platzieren</b>
            <br></br>
            <br></br> <FcDonate size={30} />
            <br></br>
            <br></br>
            Du wirst die <b>volle Kontrolle</b> haben und kannst ganz{" "}
            <b>entspannt</b> die Vorzüge von Pinnacle <b>genießen</b>!
            <div
              className="reason_item_body_action"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
              }}
            >
              <button>
                <a
                  className="button_link_reason"
                  target="_blank"
                  href="https://de.asianconnect88.com/register/?pk_kwd=YbzPaMfriy"
                >
                  Registrieren
                </a>
              </button>
            </div>
          </div>
        </div>
      )}

      {props.number === 5 && (
        <div className="reason_item">
          <div className="reason_item_header">
            AsianConnect
            <img
              src={ac}
              style={{
                borderRadius: "35%",
                height: "15%",
                width: "25%",
                marginTop: "2%",
              }}
            />
          </div>
          <div className="reason_item_body">
            AsianConnect bietet einen <b>exzellenten Customer Support</b>
            <br></br>
            <br></br> <FcCustomerSupport size={30} />
            <br></br>
            <br></br>
            Egal ob <b>Live-Chat, Skype oder E-Mail</b>, unser Partner
            AsianConnect steht dir immer zur Verfügung
            <br></br>
            <br></br> <FcHeadset size={30} /> <FcCallback size={30} />
            <br></br>
            <br></br>
            Schaue hier in unseren <b>Anleitungen</b> nach, wie du dich bei
            AsianConnect registrierst und deren Services nutzt
            <div
              className="reason_item_body_action"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
              }}
            >
              <button>
                <a
                  className="button_link_reason"
                  target="_blank"
                  href="https://de.asianconnect88.com/register/?pk_kwd=YbzPaMfriy"
                >
                  Registrieren
                </a>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ReasonItem;
