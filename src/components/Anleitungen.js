import React from "react";
import "./Anleitungen.css";
import registry from "../images/ac_registry.png";
import einzahlung from "../images/ac_einzahlung.png";
import einzahlung2 from "../images/ac_einzahlung2.png";
import einzahlung3 from "../images/ac_einzahlung3.png";

function Anleitungen(props) {
  return (
    <div className="anleitungen_wrapper">
      <a>
        Hier erklären wir Dir, wie Du Dich bei unserem Partner
        <b> AsianConnect</b> anmeldest und <b>Pinnacle Sports</b> und viele
        andere Bookies nutzen kannst. Falls Du Dich noch nicht über die Vorteile
        von <b> AsianConnect</b> bzw. <b>Pinnacle Sports</b> erkundigt hast,
        kannst Du einfach unter "Warum BetSmart?" nachschauen. <br></br>
      </a>
      <div>
        <a
          style={{
            fontSize: "130%",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          <br></br>
          <p className="header">SCHRITT 1:</p>
        </a>
        <p>
          <img src={registry} className="tutorial_img" />
          Folge{" "}
          <a
            target="_blank"
            href="https://de.asianconnect88.com/register/?pk_kwd=YbzPaMfriy"
          >
            diesem Link
          </a>{" "}
          und regisitriere Dich mit Deinen Daten. Auf der rechten Seite wirst Du
          die Bookies sehen, bei denen Du Dich registrieren kannst. Pinnacle
          Sport ist unter "PS3838" zu finden. Dies ist einfach ein anderes
          Label, unter dem Pinnacle Sports agiert. Darüber hinaus können wir dir
          AsianOdds empfehlen, dort sind mehrere asiatische Bookies gebündelt zu
          finden. (Die Auswahl kannst du später noch ändern/erweitern)
        </p>

        <a
          style={{
            fontSize: "130%",
            fontWeight: "bold",
            textAlign: "center",
            marginTop: "3%",
          }}
        >
          <br></br>
          <p className="header">SCHRITT 2:</p>
        </a>
        <p>
          Nun wirst Du in Kürze von AsianConnect eine E-Mail erhalten und Dein
          Account wird freigeschaltet sein!
        </p>
        <a
          style={{
            fontSize: "130%",
            fontWeight: "bold",
            textAlign: "center",
            marginTop: "3%",
          }}
        >
          <br></br>
          <p className="header">SCHRITT 3:</p>
        </a>
        <p>
          In ein paar Schritten hast Du es geschafft! Nun logge Dich ein und
          zahle Geld auf Dein Konto ein: Klicke dafür auf "Einzahlung"
        </p>
        <img src={einzahlung} className="tutorial_img" />
        <p>
          Anschließend suchst Du Dir eine Einzahlungsmethode Deiner Wahl aus:
        </p>
        <img src={einzahlung2} className="tutorial_img" />
        <p>
          Nun musst Du nur noch Deine Mail, den gewünschten Bookie und den
          Betrag angeben. Das war's!
        </p>
        <img src={einzahlung3} className="tutorial_img" />
        <p>
          <br></br>
          AsianConnect wird Dir dann, sobald die Einzahlung erfolgreich war,
          neben einer Bestätigung die Zugangsdaten zu Deinem gewählten Bookie
          zusenden. Mit diesen Daten loggst Du dich ganz normal bei Pinnacle
          oder AsianOdds ein. <br></br>
          <br></br>
          <div className="banner">
          <a
            href="https://de.asianconnect88.com/register/?pk_kwd=YbzPaMfriy"
            data-content-name="YbzPaMfriy"
            className="piwikTrackContent"
          >
            <img
              src="https://tracker.ac66.com/banners/de-ad-300x300.jpg"
              alt="asianconnect88"
              className="piwikContentPiece"
              data-content-piece="YbzPaMfriy-300x300"
            />
          </a>
        </div>
          <p ref={props.contactRef}>
            {" "}
            Bei Fragen kannst Du Dich jederzeit bei unserem Team melden oder den
            Support von AsianConnect wenden.
          </p>
        </p>
        
      </div>
    </div>
  );
}

export default Anleitungen;
