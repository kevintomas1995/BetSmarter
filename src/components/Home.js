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
              WILKOMMEN ZU BETSMART
            </a>
          </div>
        </div>
        <HomeDescription text="PINNACLE AUS DEUTSCHLAND NUTZEN" />
        <HomeDescription text="BESTE QUOTEN" />
        <HomeDescription text="KEINE WETTSTEUER" />
        <HomeDescription text="KEINE LIMITIERUNG" />

        <div className="main__actions">
          <button
            className="main__actions__button1"
            onClick={props.handleQuotenClick}
          >
            <a>REGISTRIEREN</a>
          </button>
          <button
            className="main__actions__button2"
            onClick={props.handleWhyClick}
            ref={props.quotenRef}
          >
            <a>WARUM BETSMART?</a>
          </button>
        </div>
      </FadeIn>
    </div>
  );
}

export default Home;
