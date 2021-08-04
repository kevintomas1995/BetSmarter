import React from "react";
import "./Anleitungen.css";
import registry from "../images/ac_registry.png";
import einzahlung from "../images/ac_einzahlung.png";
import einzahlung2 from "../images/ac_einzahlung2.png";
import einzahlung3 from "../images/ac_einzahlung3.png";

function Anleitungen() {
  return (
    <>
      <a>
        Hier erklären wir Dir, wie du dich bei unserem Partner
        <b> AsianConnect</b> anmeldest und <b>Pinnacle Sports</b> und viele
        andere Bookies nutzen kannst. Falls du dich noch nicht über die Vorteile
        von <b> AsianConnect</b> bzw. <b>Pinnacle Sports</b> erkundigt hast,
        kannst du dich hier **LINK** und **LINK** kurz informieren lassen.{" "}
        <br></br>
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
          SCHRITT 1:
        </a>
        <p>
          Gehe zu **LINK** und regisitriere dich mit deinen Daten. DAS BILD
          VERLINKEN. Auf der rechten Seite wirst du die Bookies sehen, bei denen
          du dich registrieren kannst. Pinnacle Sport ist unter "PS3838" zu
          finden. Darüber hinaus können wir dir AsianOdds empfehlen, dort sind
          mehrere asiatische Bookies gebündelt zu finden. (Die Auswahl kannst du
          später noch änder/erweitern)
        </p>
        <img src={registry} className="tutorial_img" />
        <a
          style={{
            fontSize: "130%",
            fontWeight: "bold",
            textAlign: "center",
            marginTop: "3%",
          }}
        >
          <br></br>
          SCHRITT 2:
        </a>
        <p>
          Nun wirst du in Kürze von AsianConnect eine E-Mail erhalten und dein
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
          SCHRITT 3:
        </a>
        <p>
          In ein paar Schritten hast du es geschafft! Nun logge dich ein und
          zahle Geld auf dein Konto ein: Klicke dafür auf "Einzahlung"
        </p>
        <img src={einzahlung} className="tutorial_img" />
        <p>
          Anschließend suchst du dir eine Einzahlungsmethode deiner Wahl aus:
        </p>
        <img src={einzahlung2} className="tutorial_img" />
        <p>
          Nun musst du nur noch deine Mail, den gewünschten Bookie und den
          Betrag angeben. Das war's!
        </p>
        <img src={einzahlung3} className="tutorial_img" />
        <p>
          <br></br>
          AsianConnect wird dir dann, sobal die Einzahlung erfolgreich war,
          neben einer Bestätigung die Zugangsdaten zu deinem gewählten Bookie
          zusenden. Mit diesen Daten loggst du dich ganz normal bei Pinnacle
          oder AsianOdds ein. <br></br>
          <br></br>
          Bei Fragen kannst du dich jederzeit bei unserem Team melden (KONTAKT
          **LINK**) oder den Support von AsianConnect wenden.
        </p>
      </div>
    </>
  );
}

export default Anleitungen;
