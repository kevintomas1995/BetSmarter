import React from "react";
import FadeIn from "react-fade-in";
import HomeDescription from "./HomeDescription";
import "./Home.css";


function Home(props) {
  return (
    <div className="main__wrapper">
      <FadeIn delay={400} transitionDuration={800} className="main__fadeIn">
        <div className="main__descritption">
          <div className="main__descritption-text">
            <a className="main__descritption-text__title">
              WILKOMMEN ZU WETTFUX
            </a>
          </div>
        </div>
        <HomeDescription text="Pinnacle in Deutschland nutzen" />
        <HomeDescription text="Beste Quoten" />
        <HomeDescription text="Keine Wettsteuer" />
        <HomeDescription text="Keine Limitierungen, hohe Einsatzlimits" />

        <div className="main__actions">
          <button
            className="main__actions__button1"
            onClick={props.handleQuotenClick}
          >
            <a
              className="button_link"
              target="_blank"
              href="https://de.asianconnect88.com/register/?pk_kwd=YbzPaMfriy"
            >
              REGISTRIEREN
            </a>
          </button>
          <button
            className="main__actions__button2"
            onClick={props.handleWhyClick}
            ref={props.quotenRef}
          >
            <a>WARUM WETTFUX?</a>
          </button>
        </div>
      </FadeIn>
    </div>
  );
}

export default Home;
