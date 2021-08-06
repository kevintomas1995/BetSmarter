import React, { useRef, useState } from "react";
import NavBar from "./NavBar";
import "./Main.css";
import "@fontsource/dm-sans";
import Home from "./Home";
import StatsSite from "./StatsSite";
import WhySite from "./WhySite";
import TutSite from "./TutSite";
import Footer from "./Footer"

function Main() {
  const homeRef = useRef();
  const statsRef = useRef();
  const whyRef = useRef();
  const tutRef = useRef();
  const [isActive, setIsActive] = useState(false);

  const onClick = () => setIsActive(!isActive);

  const hideModalHandler = () => {
    setIsActive(false);
  };

  function handleWhyClick() {
    whyRef.current.scrollIntoView({ block: "end", behavior: "smooth" });
    console.log(whyRef.current);
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
        statsRef={statsRef}
        whyRef={whyRef}
        tutRef={tutRef}
      />

      <Home handleWhyClick={handleWhyClick} />

      {/* <div className="section">
        <div className="section__wrapper">
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
        statsRef={statsRef}
        onClick={onClick}
        isActive={isActive}
        hideModalHandler={hideModalHandler}
      />

      <WhySite whyRef={whyRef} />

      <TutSite tutRef={tutRef} />

      <Footer />
    </div>
  );
}

export default Main;
