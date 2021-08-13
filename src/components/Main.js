import React, { useRef, useState } from "react";
import NavBar from "./NavBar";
import "./Main.css";
import "@fontsource/dm-sans";
import Home from "./Home";
import StatsSite from "./StatsSite";
import WhySite from "./WhySite";
import TutSite from "./TutSite";
import Footer from "./Footer";
import Kontakt from "./Kontakt";

function Main() {
  const homeRef = useRef();
  const statsRef = useRef();
  const whyRef = useRef();
  const tutRef = useRef();
  const contactRef = useRef();
  const [isActiveMarkets, setIsActiveMarkets] = useState(false);
  const [isActiveInfo, setIsActiveInfo] = useState(false);
  const [isActiveImpressum, setIsActiveImpressum] = useState(false);

  const onClickMarkets = () => setIsActiveMarkets(!isActiveMarkets);
  const onClickInfo = () => setIsActiveInfo(!isActiveInfo);
  const onClickImpressum = () => setIsActiveImpressum(!isActiveImpressum);

  const hideModalMarketHandler = () => {
    setIsActiveMarkets(false);
  };

  const hideModalInfoHandler = () => {
    setIsActiveInfo(false);
  };

  const hideModalImpressumHandler = () => {
    setIsActiveImpressum(false);
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
        contactRef={contactRef}
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
        onClickMarkets={onClickMarkets}
        onClickInfo={onClickInfo}
        isActiveMarkets={isActiveMarkets}
        isActiveInfo={isActiveInfo}
        hideModalMarketHandler={hideModalMarketHandler}
        hideModalInfoHandler={hideModalInfoHandler}
      />

      <WhySite whyRef={whyRef} />

      <TutSite tutRef={tutRef} contactRef={contactRef} />

      <Kontakt />

      <Footer
        hideModalImpressumHandler={hideModalImpressumHandler}
        onClickImpressum={onClickImpressum}
        isActiveImpressum={isActiveImpressum}
      />
    </div>
  );
}

export default Main;
