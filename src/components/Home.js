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
        <HomeDescription text="Pinnacle in Deutschland nutzen" />
        <HomeDescription text="Betse Quoten" />
        <HomeDescription text="Keine Wettsteuer" />
        <HomeDescription text="Keine Limitierungen" />

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
