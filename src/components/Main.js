import React, { useRef, useState } from "react";
import NavBar from "./NavBar";
import "./Main.css";
import FadeIn from "react-fade-in";
import { useInView } from "react-intersection-observer";
import MatchItem from "./MatchItem";
import HomeDescription from "./HomeDescription";
import "@fontsource/dm-sans";
import pinnacle from "../images/pinnacle.jpeg";
import logo from "../images/zweite_buli.jpg";

function Main() {
  const [ref, inView] = useInView({
    threshold: 0,
  });

  const [showDetails, setShowDetails] = useState(false);

  const homeRef = useRef();
  const quotenRef = useRef();
  const whyRef = useRef();

  function handleQuotenClick() {
    quotenRef.current.scrollIntoView({ behavior: "smooth" });
  }

  const date = new Date();
  const dateOptions = {
    weekday: "short",
    year: "numeric",
    month: "2-digit",
    day: "numeric",
  };

  return (
    <div className="main" ref={homeRef}>
      <NavBar homeRef={homeRef} quotenRef={quotenRef} whyRef={whyRef} />
      <div className="main__wrapper">
        <FadeIn delay={400} transitionDuration={800} className="main__fadeIn">
          <div className="main__descritption">
            <div className="main__descritption-text">
              <a className="main__descritption-text__title">
                Willkommen zu BetSmart!
              </a>
            </div>
          </div>

          <HomeDescription text="BESTE QUOTEN" />
          <HomeDescription text="KEINE WETTSTEUER" />
          <HomeDescription text="KEINE LIMITIERUNG" />
          <HomeDescription text="100% FREIHEIT" />

          <div className="main__actions">
            <button
              className="main__actions__button1"
              onClick={handleQuotenClick}
            >
              <a>Los geht's!</a>
            </button>
            <button className="main__actions__button2">
              <a>Wie funktioniert's?</a>
            </button>
          </div>
        </FadeIn>
      </div>

      <div className="section" ref={quotenRef}>
        <div classname="section__wrapper">
          <div className="section__header">
            <a className="section__header__text">Beste Quoten</a>
          </div>
          <a className="date__text">
            {date.toLocaleDateString("de-DE", dateOptions)}
          </a>
          <div className="section_items">
            <div className="match_item">
              <div className="match_item__upper">
                <div className="match_item_upper_logo">
                  <img src={logo} />
                </div>
                <div className="match_item__upper_teams">
                  <a style={{ textAlign: "center" }}>Fenerbache Istanbul</a>
                  <a>-</a>
                  <a style={{ textAlign: "center" }}>Galatasary Istanbul</a>
                </div>

                <div className="match_item__upper_rightSide">
                  <div className="match_item__upper_rightSide_pinnacle">
                    <img src={pinnacle} />
                    <a>+8.8%</a>
                  </div>
                  <div className="match_item__upper_rightSide_action">
                    <button>Wetten</button>
                  </div>
                </div>
              </div>
              <div
                className="match_item_lower"
                onClick={() => {
                  setShowDetails((prevState) => !prevState);
                }}
              >
                <div className="match_item__lower_details">
                  <i class="fas fa-info" style={{textAlign: "center"}}></i>
                </div>
              </div>
            </div>

            <div className="match_item">
              <div className="match_item__upper"></div>
            </div>
            <div className="match_item">
              <div className="match_item__upper"></div>
            </div>
            <div className="match_item">
              <div className="match_item__upper"></div>
            </div>
            <div className="match_item">
              <div className="match_item__upper"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="section2" ref={whyRef}>
        <div classname="section__wrapper">
          <div className="section__header">
            <a
              className="section__header__text"
              style={{ color: "white", paddingTop: "3%" }}
            >
              Warum BetSmart?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
