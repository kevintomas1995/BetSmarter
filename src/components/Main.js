import React from "react";
import NavBar from "./NavBar";
import NavBar_2 from "./NavBar_2";
import "./Main.css";
import FadeIn from "react-fade-in";
import { useInView } from "react-intersection-observer";

function Main() {
  const [ref, inView] = useInView({
    threshold: 0,
  });

  console.log(inView);

  return (
    <div className="main">
      <div className="main__wrapper">
        <NavBar />
        <div className="main__home_wrapper">
          <FadeIn delay={400} transitionDuration={800} className="main__fadeIn">
            <div className="main__descritption">
              <div className="main__descritption-text">
                <a className="main__descritption-text__title">
                  Willkommen zu BetSmart!
                </a>
              </div>
            </div>

            <div className="main__descritption">
              <div className="main__descritption-text">
                <a>BESTE QUOTEN</a>
              </div>
            </div>

            <div className="main__descritption">
              <div className="main__descritption-text">
                <a>KEINE WETTSTEUER</a>
              </div>
            </div>

            <div className="main__descritption">
              <div className="main__descritption-text">
                <a>KEINE LIMITIERUNG</a>
              </div>
            </div>

            <div className="main__descritption">
              <div className="main__descritption-text">
                <a>100% FREIHEIT</a>
              </div>
            </div>

            <div className="main__actions">
              <button className="main__actions__button1">
                <a>Los geht's!</a>
              </button>
              <button className="main__actions__button2">
                <a>Wie funktioniert's?</a>
              </button>
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="section">
        {inView ? <NavBar_2 /> : <NavBar />}
        {/* // <NavBar_2 /> */}
        <div className="section__header">
          <a>Beste Quoten des Tages</a>
        </div>
        <div className="main_helper">
          <div className="main__helper__helper" ref={ref}>
            <p style={{color: "white"}}>HALLO</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
