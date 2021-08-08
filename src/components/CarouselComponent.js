import React, { useState, useEffect } from "react";
import ReasonItem from "./ReasonItem";
import "./CarouselComponent.css";
import FadeIn from "react-fade-in";
import MobileReasons from "./MobileReasons";

function CarouselComponent() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter === -1) {
      setCounter(4);
    } else if (counter > 4) {
      setCounter(0);
    }
  }, [counter]);

  return (
    <>
      <div className="carousel_component">
        <i
          class="fas fa-angle-left"
          onClick={() => {
            setCounter((prevState) => prevState - 1);
          }}
        />

        {counter === 0 && (
          <FadeIn delay={400} transitionDuration={200}>
            <ReasonItem number={1} />
          </FadeIn>
        )}
        {counter === 1 && (
          <FadeIn delay={400} transitionDuration={200}>
            <ReasonItem number={2} />
          </FadeIn>
        )}
        {counter === 2 && (
          <FadeIn delay={400} transitionDuration={200}>
            <ReasonItem number={3} />
          </FadeIn>
        )}
        {counter === 3 && (
          <FadeIn delay={400} transitionDuration={200}>
            <ReasonItem number={4} />
          </FadeIn>
        )}
        {counter === 4 && (
          <FadeIn delay={400} transitionDuration={200}>
            <ReasonItem number={5} />
          </FadeIn>
        )}

        <i
          class="fas fa-angle-right"
          onClick={() => {
            setCounter((prevState) => prevState + 1);
          }}
        />
      </div>


      <div className="mobile_reasons">
        <p style={{color: "white"}}>Klicke die Icons an, um mehr zu erfahren!</p>
        <div className="mobile_reason_item">
          <MobileReasons title={"1"}/>
        </div>
        <div className="mobile_reason_item">
          <MobileReasons title={"2"}/>
        </div>
        <div className="mobile_reason_item">
          <MobileReasons title={"3"}/>
        </div>
        <div className="mobile_reason_item">
          <MobileReasons title={"4"}/>
        </div>
        <div className="mobile_reason_item">
          <MobileReasons title={"5"}/>
        </div>
      </div>
    </>
  );
}

export default CarouselComponent;
