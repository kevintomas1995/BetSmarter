import React, { useRef, useState } from "react";
import NavBar from "./NavBar";
import "./Main.css";
import FadeIn from "react-fade-in";

import MatchItem from "./MatchItem";
import HomeDescription from "./HomeDescription";
import "@fontsource/dm-sans";
import CarouselComponent from "./CarouselComponent";

function Main() {
  const homeRef = useRef();
  const quotenRef = useRef();
  const whyRef = useRef();
  const tutRef = useRef();

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="main" ref={homeRef}>
      <NavBar
        homeRef={homeRef}
        quotenRef={quotenRef}
        whyRef={whyRef}
        tutRef={tutRef}
      />
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
              onClick={handleQuotenClick}
            >
              <a>LOS GEHT'S!</a>
            </button>
            <button className="main__actions__button2" ref={quotenRef}>
              <a>WARUM BETSMART?</a>
            </button>
          </div>
        </FadeIn>
      </div>

      <div className="section">
        <div classname="section__wrapper">
          <div className="section__header">
            <a className="section__header__text" style={{ paddingTop: "3%" }}>
              Beste Quoten
            </a>
          </div>
          <a className="date__text">
            {date.toLocaleDateString("de-DE", dateOptions)}
          </a>
          <div className="section_items">
            <MatchItem />
            <MatchItem />
            <MatchItem />
            <MatchItem />
            <MatchItem />
            <MatchItem />
            <MatchItem />
            <MatchItem />
          </div>
        </div>
      </div>

      <div className="section3" ref={whyRef}>
        <div classname="section__wrapper">
          <div className="section__header">
            <a
              className="section__header__text"
              style={{ color: "white", paddingTop: "3%" }}
            >
              Warum BetSmart?
            </a>
          </div>

          <div className="section_items">
            <CarouselComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
