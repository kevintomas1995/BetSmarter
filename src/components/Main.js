import React, { useRef, useState } from "react";
import NavBar from "./NavBar";
import "./Main.css";
import "@fontsource/dm-sans";
import Home from "./Home";
import StatsSite from "./StatsSite";
import WhySite from "./WhySite";
import TutSite from "./TutSite";

function Main() {
  const homeRef = useRef();
  const quotenRef = useRef();
  const whyRef = useRef();
  const tutRef = useRef();
  const [isActive, setIsActive] = useState(false);

  const onClick = () => setIsActive(!isActive);

  const hideModalHandler = () => {
    setIsActive(false);
  };

  function handleQuotenClick() {
    quotenRef.current.scrollIntoView({ behavior: "smooth" });
  }

  function handleWhyClick() {
    whyRef.current.scrollIntoView({ behavior: "smooth" });
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

      <Home
        handleQuotenClick={handleQuotenClick}
        handleWhyClick={handleWhyClick}
        quotenRef={quotenRef}
      />

      {/* <div className="section">
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
          </div>
        </div>
      </div> */}

      <StatsSite
        onClick={onClick}
        isActive={isActive}
        hideModalHandler={hideModalHandler}
      />

      <WhySite whyRef={whyRef} />

      <TutSite tutRef={tutRef} />
    </div>
  );
}

export default Main;
